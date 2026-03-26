import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <SectionHeading label="Career" title="Experience" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <article className="surface-card p-6 sm:p-8 lg:p-10 min-w-0">
            <div className="flex justify-center mb-8">
              <div className="exp-logo-frame rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <img
                  src="/NewMEK.jpg"
                  alt="NewMEK Software Solutions"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-balance px-0.5">
              <a
                href="https://newmeksolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link text-slate-900 hover:text-slate-600 underline-offset-4 hover:underline transition-colors"
              >
                NewMEK Software Solutions
              </a>
            </h3>

            <p className="text-slate-500 text-sm text-center mt-2 mb-6">
              Summer Intern · May 2025 – July 2025
            </p>

            <h4 className="font-semibold text-slate-800 mb-4 text-center text-sm uppercase tracking-wide">
              Real-time data sync (CDC)
            </h4>

            <p className="text-slate-600 leading-relaxed text-center text-[15px]">
              Built a high-performance event-driven Java solution using Change Data
              Capture (CDC) to synchronize real-time customer data. Used WAL-based
              streaming with Debezium and RabbitMQ to PostgreSQL for reliable,
              low-latency updates without polling.
            </p>
          </article>

          <article className="surface-card p-6 sm:p-8 lg:p-10 min-w-0">
            <div className="flex justify-center mb-8">
              <div className="exp-logo-frame rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <img
                  src="/Cystar.jpg"
                  alt="Cystar IIT Madras"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-balance px-0.5">
              <a
                href="https://cystar.iitm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link text-slate-900 hover:text-slate-600 underline-offset-4 hover:underline transition-colors"
              >
                Cystar, IIT Madras
              </a>
            </h3>

            <p className="text-slate-500 text-sm text-center mt-2 mb-6">
              Research Intern · August 2025 – February 2026
            </p>

            <p className="text-slate-600 leading-relaxed text-center text-[15px]">
              Advanced cybersecurity research under NDA, contributing to
              security-focused investigations and defensive architecture work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
