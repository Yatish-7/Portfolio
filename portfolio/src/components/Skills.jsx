import SectionHeading from "./SectionHeading";

export default function Skills() {
  const skills = [
    { name: "Java", logo: "/logos/java.png" },
    { name: "React", logo: "/logos/react.png" },
    { name: "Spring Boot", logo: "/logos/spring.png" },
    { name: "MySQL", logo: "/logos/mysql.png" },
    { name: "RabbitMQ", logo: "/logos/rabbitmq.png" },
    { name: "GitHub", logo: "/logos/github.png" },
    { name: "Linux", logo: "/logos/linux.png" },
    { name: "Wireshark", logo: "/logos/wireshark.png" },
    { name: "Burp Suite", logo: "/logos/burp.png" },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-28 bg-white border-t border-slate-100 overflow-x-clip overflow-y-visible"
    >
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <SectionHeading label="Toolkit" title="Tech stack" />

        <div className="relative w-full skills-marquee-mask">
          <div className="flex w-max animate-scroll py-2">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center mx-6 sm:mx-10 md:mx-14 shrink-0"
              >
                <div className="skill-tile-surface h-24 w-24 sm:h-[6.25rem] sm:w-[6.25rem] rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm p-2.5">
                  <img
                    src={skill.logo}
                    alt=""
                    className="skill-logo-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
