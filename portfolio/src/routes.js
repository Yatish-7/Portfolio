/** Pathname (no hash) → section element id for scroll targets */
const PATH_TO_SECTION = {
  "/": "home",
  "/about": "about",
  "/experience": "experience",
  "/projects": "projects",
  "/certifications": "certifications",
  "/skills": "skills",
  "/contact": "contact",
};

export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export const KNOWN_PATHS = new Set(NAV_ITEMS.map((item) => item.path));

export function pathnameToSectionId(pathname) {
  return PATH_TO_SECTION[pathname] ?? "home";
}
