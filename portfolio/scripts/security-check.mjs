import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const blockedFileRegex = [
  /^\.env(\..+)?$/i,
  /\.pem$/i,
  /\.p12$/i,
  /\.key$/i,
  /id_rsa/i,
  /credentials\.json$/i,
];

const secretPatterns = [
  /VITE_EMAIL_(SERVICE|TEMPLATE|PUBLIC)\s*=\s*[^\s]+/i,
  /emailjs[^\n]{0,50}(private|secret|token|key)/i,
  /(?:api|auth|access|secret)[-_ ]?key\s*[:=]\s*["'][A-Za-z0-9_\-]{8,}["']/i,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /AKIA[0-9A-Z]{16}/,
];

function isGitRepo() {
  try {
    execSync("git rev-parse --is-inside-work-tree", {
      stdio: "ignore",
      cwd: root,
    });
    return true;
  } catch {
    return false;
  }
}

function getStagedFiles() {
  const output = execSync("git diff --cached --name-only --diff-filter=ACM", {
    cwd: root,
    encoding: "utf8",
  });
  return output
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function checkWorkspaceSafety() {
  const envPath = path.join(root, ".env");
  if (fs.existsSync(envPath)) {
    console.log("[info] .env exists locally (expected). Ensure it is never staged.");
  }
}

function run() {
  checkWorkspaceSafety();

  if (!isGitRepo()) {
    console.log("[warn] Not a git repository yet. Staged-file checks skipped.");
    console.log("[ok] Baseline security check passed.");
    return;
  }

  const staged = getStagedFiles();
  if (staged.length === 0) {
    console.log("[ok] No staged files. Security check passed.");
    return;
  }

  const violations = [];

  for (const rel of staged) {
    const normalized = rel.replace(/\\/g, "/");
    const base = path.basename(normalized);

    if (blockedFileRegex.some((rx) => rx.test(base) || rx.test(normalized))) {
      violations.push(`Blocked sensitive file staged: ${rel}`);
      continue;
    }

    const abs = path.join(root, rel);
    const body = readFileSafe(abs);
    if (!body) continue;

    for (const pattern of secretPatterns) {
      if (pattern.test(body)) {
        violations.push(`Potential secret pattern found in: ${rel}`);
        break;
      }
    }
  }

  if (violations.length > 0) {
    console.error("\n[fail] Security pre-commit checks failed:");
    for (const v of violations) {
      console.error(` - ${v}`);
    }
    console.error("\nResolve issues before committing.");
    process.exit(1);
  }

  console.log("[ok] Security pre-commit checks passed.");
}

run();
