import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { pathnameToSectionId } from "../routes";

export default function ScrollToSection() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const id = pathnameToSectionId(pathname);
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}
