import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80svh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-5 overflow-hidden pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-10 sm:pb-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f1f5f9_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(15,23,42,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-40"
        aria-hidden
      />

      <div className="relative w-full max-w-3xl min-w-0 text-center pt-2">
        <p className="hero-animate flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-slate-500 mb-4 px-1">
          <span className="hero-line-animate hidden min-[360px]:block h-px w-6 sm:w-8 bg-slate-300 shrink-0" aria-hidden />
          Hello, I&apos;m
          <span className="hero-line-animate hidden min-[360px]:block h-px w-6 sm:w-8 bg-slate-300 shrink-0" aria-hidden />
        </p>

        <h1 className="hero-animate hero-animate-delay-1 text-[1.65rem] min-[380px]:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.12] text-balance px-0.5">
          M Yatish Datta
        </h1>

        <p className="hero-animate hero-animate-delay-2 text-base sm:text-lg md:text-xl font-medium text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed text-balance px-1">
          Full Stack Developer · Backend systems · Security research
        </p>

        <p className="hero-animate hero-animate-delay-3 text-slate-600 text-[0.9375rem] sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 px-1">
          Final-year B.Tech Computer Science student specializing in Java (Spring
          Boot), SQL, and event-driven architectures with RabbitMQ. I build
          scalable backends and care deeply about secure, reliable software.
        </p>

        <div className="hero-animate hero-animate-delay-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-md sm:max-w-none mx-auto px-1">
          <Link
            to="/contact"
            className="inline-flex flex-1 min-[340px]:flex-none min-w-[9.5rem] items-center justify-center px-5 sm:px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/25 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 active:translate-y-0 active:scale-[0.98] active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            Get in touch
          </Link>
          <Link
            to="/projects"
            className="inline-flex flex-1 min-[340px]:flex-none min-w-[9.5rem] items-center justify-center px-5 sm:px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-semibold shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:translate-y-0 active:scale-[0.98] active:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
