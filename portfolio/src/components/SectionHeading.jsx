export default function SectionHeading({ label, title, className = "" }) {
  return (
    <div className={`section-heading-wrap text-center ${className || "mb-14 md:mb-16"}`}>
      {label && (
        <p className="section-heading-label text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
          {label}
        </p>
      )}
      <h2 className="section-heading-title text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance px-1">
        {title}
      </h2>
      <div
        className="section-heading-line w-10 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-auto mt-6 rounded-full"
        aria-hidden
      />
    </div>
  );
}
