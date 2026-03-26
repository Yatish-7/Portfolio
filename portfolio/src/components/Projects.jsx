import { FaFilePdf, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <SectionHeading label="Work" title="Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          <article className="surface-card project-card p-6 sm:p-8 lg:p-10 flex flex-col h-full min-w-0">
            <h3 className="project-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2 text-balance">
              Academic Website Security Audit
            </h3>

            <p className="project-card-date text-slate-500 text-sm mb-5">Jan 2024 – Mar 2024</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag">WebDevTools</span>
              <span className="tag">Gobuster</span>
              <span className="tag">Burp Suite</span>
              <span className="tag">DOM</span>
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px] mb-8 flex-grow">
              Security assessment of the university academic portal: DOM
              manipulation issues, access control gaps, and remediation guidance
              to reduce attack surface.
            </p>

            <a
              href="https://drive.google.com/file/d/1TcWaw1Nf4pErWmpCMcnMc62iaoOE7jIO/view"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pro no-underline w-full min-[400px]:w-fit mt-auto justify-center"
            >
              <FaFilePdf className="mr-2 text-base shrink-0" />
              <span>View security report (PDF)</span>
            </a>
          </article>

          <article className="surface-card project-card p-6 sm:p-8 lg:p-10 flex flex-col h-full min-w-0">
            <h3 className="project-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2 text-balance">
              Real-Time Data Synchronization
            </h3>

            <p className="project-card-date text-slate-500 text-sm mb-5">May 2025 – July 2025</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">RabbitMQ</span>
              <span className="tag">Debezium</span>
              <span className="tag">WAL</span>
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px] mb-8 flex-grow">
              Event-driven replication with Debezium CDC, streaming changes through
              RabbitMQ and WAL for reliable, low-latency sync between PostgreSQL and
              MySQL.
            </p>

            <a
              href="https://github.com/Yatish-7/Real-Time-Data-Synchronization-Using-CDC"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pro no-underline w-full min-[400px]:w-fit mt-auto justify-center"
            >
              <FaGithub className="mr-2 text-base shrink-0" />
              <span>View on GitHub</span>
            </a>
          </article>

          <article className="surface-card project-card p-6 sm:p-8 lg:p-10 flex flex-col h-full min-w-0">
            <h3 className="project-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2 text-balance">
              INOSKL-24
            </h3>

            <p className="project-card-date text-slate-500 text-sm mb-5">
              Python security toolkit · KLCYBERSAC · 2024
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag">Python</span>
              <span className="tag">Requests</span>
              <span className="tag">BeautifulSoup</span>
              <span className="tag">IPinfo</span>
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px] mb-8 flex-grow">
              A Python-based security and OSINT toolkit for analyzing domains and
              IPs: WHOIS, DNS, SSL details, headers, robots.txt, linked pages,
              social tags, geolocation, port scans, BGP info, reputation checks,
              and more — all via a CLI report.
            </p>

            <a
              href="https://github.com/k-shaik/INOSKL-24"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pro no-underline w-full min-[400px]:w-fit mt-auto justify-center"
            >
              <FaGithub className="mr-2 text-base shrink-0" />
              <span>View on GitHub</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
