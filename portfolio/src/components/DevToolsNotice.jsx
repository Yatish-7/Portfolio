import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Docked DevTools often shrink inner vs outer viewport. Undocked tools may not trigger this.
 */
const SIZE_THRESHOLD_PX = 100;
const POLL_MS = 260;
const SHORTCUT_ALERT_MS = 14000;

const MESSAGES = [
  "You opened DevTools. Somewhere, a CSS grid broke.",
  "Lol I am also a cybersecurity guy and I know how to safeguard my page.",
  "Plot twist: there is no secret code, only chaos.",
  "If you break it, you buy it. That's how JavaScript works, right?",
  "If this were production, security would be watching you right now.",
  "Console says: // TODO: Stop opening DevTools",
  "Fun fact: pressing F12 doesn't make you a hacker. Nice try though.",
  "Alert: Suspicious activity from someone who knows what F12 does.",
  "This isn't CTF, stop recon on my DOM.",
  "The DOM is temporary, screenshots are forever.",
  "Nice try. The good stuff is on the backend... which you can't see.",
];

function pickMessageIndex(exclude) {
  if (MESSAGES.length <= 1) return 0;
  let i = exclude;
  while (i === exclude) {
    i = Math.floor(Math.random() * MESSAGES.length);
  }
  return i;
}

function shouldBlockDevToolsShortcut(e) {
  if (e.key === "F12") return true;

  const k = typeof e.key === "string" ? e.key.toLowerCase() : "";

  if (e.ctrlKey && e.shiftKey && (k === "i" || k === "j" || k === "c")) {
    return true;
  }
  if (e.ctrlKey && !e.shiftKey && !e.altKey && k === "u") {
    return true;
  }
  if (e.metaKey && e.altKey && (k === "i" || k === "j" || k === "c")) {
    return true;
  }
  return false;
}

export default function DevToolsNotice() {
  const [devtoolsOpen, setDevtoolsOpen] = useState(false);
  const [shortcutAlert, setShortcutAlert] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const lastMsgIndex = useRef(0);
  const devtoolsWasOpen = useRef(false);

  const refreshMessage = useCallback(() => {
    const next = pickMessageIndex(lastMsgIndex.current);
    lastMsgIndex.current = next;
    setMsgIndex(next);
  }, []);

  const dismissShortcutAlert = useCallback(() => {
    setShortcutAlert(false);
  }, []);

  const showPanel = devtoolsOpen || shortcutAlert;
  const shortcutOnly = shortcutAlert && !devtoolsOpen;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!shouldBlockDevToolsShortcut(e)) return;
      e.preventDefault();
      e.stopPropagation();
      refreshMessage();
      setShortcutAlert(true);
    };
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [refreshMessage]);

  useEffect(() => {
    const onContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", onContextMenu, true);
    return () => document.removeEventListener("contextmenu", onContextMenu, true);
  }, []);

  useEffect(() => {
    const check = () => {
      const wDiff = window.outerWidth - window.innerWidth;
      const hDiff = window.outerHeight - window.innerHeight;
      const open = wDiff > SIZE_THRESHOLD_PX || hDiff > SIZE_THRESHOLD_PX;

      if (open && !devtoolsWasOpen.current) {
        refreshMessage();
      }
      devtoolsWasOpen.current = open;
      setDevtoolsOpen(open);
    };

    const id = window.setInterval(check, POLL_MS);
    check();
    return () => window.clearInterval(id);
  }, [refreshMessage]);

  useEffect(() => {
    if (!shortcutOnly) return undefined;
    const t = window.setTimeout(() => setShortcutAlert(false), SHORTCUT_ALERT_MS);
    return () => window.clearTimeout(t);
  }, [shortcutOnly, msgIndex]);

  useEffect(() => {
    if (!showPanel) return undefined;
    const onEsc = (e) => {
      if (e.key === "Escape" && shortcutOnly) dismissShortcutAlert();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [showPanel, shortcutOnly, dismissShortcutAlert]);

  if (!showPanel) return null;

  /** Light veil so the page stays readable; no heavy blur or red */
  const backdropClass = "bg-slate-900/25 backdrop-blur-[2px]";

  return (
    <div
      className={`devtools-notice fixed inset-0 z-[2147483000] ${backdropClass}`}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="devtools-banner-title"
      aria-describedby="devtools-banner-body"
      onClick={shortcutOnly ? dismissShortcutAlert : undefined}
    >
      <div className="pointer-events-none box-border flex w-full max-w-full justify-end pt-14 pr-3 pl-3 sm:pt-20 sm:pr-5 sm:pl-0">
        <div
          className="devtools-notice-card pointer-events-auto w-full max-w-[16.5rem] rounded-xl border border-amber-500/40 bg-slate-950/88 px-3 pb-3 pt-3 text-left shadow-lg shadow-slate-950/30 ring-1 ring-white/10 sm:w-[17.5rem] sm:max-w-none"
          onClick={(e) => e.stopPropagation()}
        >
          <p
            id="devtools-banner-title"
            className="devtools-banner-title text-[9px] uppercase leading-tight text-amber-400 sm:text-[10px]"
          >
            DEVTOOLS ACTIVITY DETECTED
          </p>
          <p
            id="devtools-banner-body"
            className="mt-2 text-xs leading-snug text-slate-100 sm:text-[13px]"
          >
            {MESSAGES[msgIndex]}
          </p>
          {devtoolsOpen ? (
            <p className="mt-2.5 text-[10px] leading-snug text-slate-400">
              Close Developer Tools (or undock) to return.
            </p>
          ) : (
            <p className="mt-2.5 text-[10px] leading-snug text-slate-400">
              Closes automatically, or tap outside.
            </p>
          )}
          {shortcutOnly && (
            <button
              type="button"
              onClick={dismissShortcutAlert}
              className="devtools-close-btn mt-3 w-full rounded-full !border-0 !bg-white py-2 text-center font-sans text-[11px] font-bold uppercase tracking-[0.16em] !text-black shadow-sm transition-[background-color,transform] duration-200 hover:!bg-slate-100 active:scale-[0.98]"
            >
              CLOSE
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
