import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_ITEMS } from "../routes";

const navLinkDesktop =
  "nav-link-desktop group relative inline-flex flex-col items-center rounded-lg px-3 py-2 text-sm font-medium leading-normal transition-[color,transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-slate-100/95 hover:text-slate-900 hover:shadow-md hover:shadow-slate-900/[0.06] active:translate-y-0 active:scale-[0.96] active:bg-slate-200/90 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2";

const navLinkMobile =
  "nav-link-mobile group relative block rounded-lg border-l-[3px] border-transparent py-3 pl-3 pr-3 font-medium leading-normal transition-[color,transform,background-color,border-color,box-shadow,padding-left] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-slate-800/80 hover:bg-slate-100/95 hover:pl-4 hover:text-slate-900 hover:shadow-md hover:shadow-slate-900/[0.05] active:scale-[0.98] active:bg-slate-200/85 active:shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-inset";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const refreshToHome = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.assign(import.meta.env.BASE_URL || "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl shadow-sm shadow-slate-900/5 transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center gap-3">
        <Link
          to="/"
          className="nav-brand inline-block text-lg font-bold tracking-tight text-slate-900 transition-[color,transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-slate-700 hover:opacity-90 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded-md"
          onClick={refreshToHome}
        >
          Yatish
        </Link>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `${navLinkDesktop} ${isActive ? "text-slate-900 bg-slate-100/90" : "text-slate-600"}`
                }
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className="pointer-events-none absolute bottom-1 left-3 right-3 h-0.5 origin-center scale-x-0 rounded-full bg-slate-800/85 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-active:scale-x-100"
                  aria-hidden
                />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="nav-menu-btn p-2 rounded-lg text-slate-700 transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-slate-100 hover:shadow-md hover:shadow-slate-900/5 active:scale-90 active:bg-slate-200/90 active:shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden max-h-[min(70vh,24rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5">
          <ul className="flex flex-col py-4 px-4 sm:px-5 gap-1 pb-[env(safe-area-inset-bottom,0px)]">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkMobile} ${isActive ? "border-slate-800/80 bg-slate-100/95 text-slate-900" : "border-transparent text-slate-700"}`
                  }
                >
                  <span className="relative z-10">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
