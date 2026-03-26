import { useState } from "react";
import SectionHeading from "./SectionHeading";
import AboutNetworkDiagram from "./AboutNetworkDiagram";

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="about"
      className="overflow-x-clip py-14 md:py-20 bg-white border-y border-slate-100"
    >
      <div className="mx-auto max-w-5xl min-w-0 px-4 sm:px-6 lg:max-w-6xl 2xl:max-w-7xl">
        <SectionHeading
          label="Introduction"
          title="About Me"
          className="!mb-7 md:!mb-9"
        />

        <div className="about-layout grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-x-10 lg:gap-y-10 xl:gap-x-12 2xl:gap-x-14">
          <div className="about-bio-enter order-2 min-w-0 max-w-xl lg:order-1 lg:max-w-none">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I&apos;m a Java full-stack developer specializing in Spring Boot and
              microservices, with hands-on experience building event-driven systems
              using RabbitMQ. I focus on secure, reliable, and scalable
              applications with strong backend fundamentals. As a cybersecurity
              enthusiast, I explore network security, system internals, and CTF
              challenges, and I aim to grow into roles where I can strengthen
              defenses and proactive risk mitigation.
            </p>
          </div>

          <div className="about-photo-enter order-1 justify-self-center lg:order-2 lg:justify-self-center">
            <div
              className="flip-card relative z-0 h-56 w-56 shrink-0 cursor-pointer rounded-full shadow-xl shadow-slate-900/10 ring-2 ring-slate-100 ring-offset-2 ring-offset-white transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-900/12 active:scale-[0.99] sm:h-64 sm:w-64 sm:ring-4 sm:ring-offset-4 md:h-72 md:w-72 lg:h-80 lg:w-80"
              onClick={() => setFlipped(!flipped)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFlipped(!flipped);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Flip profile card"
            >
              <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
                <div className="flip-front">
                  <img
                    src="/profile.png"
                    alt="M Yatish Datta"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flip-back flex items-center justify-center rounded-full border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-inner">
                  <p className="px-4 text-center text-lg font-semibold sm:px-6 sm:text-xl md:text-2xl">
                    Hi, I&apos;m Yatish
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-network-enter order-3 flex w-full justify-center lg:order-3 lg:min-w-0 lg:justify-end">
            <AboutNetworkDiagram className="about-network-shift relative z-10 lg:translate-x-6 xl:translate-x-10 2xl:translate-x-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
