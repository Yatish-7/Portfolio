import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC;
    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        "Email service is not configured. Please use the mail link on the left."
      );
      return;
    }
    setStatus("Sending...");

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setStatus("Message sent successfully.");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100/80 border-t border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <SectionHeading label="Contact" title="Get in touch" />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch min-w-0">
          <div className="contact-connect-panel min-w-0">
            <div className="flex min-h-0 flex-1 flex-col">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Let&apos;s connect
              </h3>

              <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
                Open to opportunities, collaborations, and conversations about
                backend systems and security. Reach out anytime.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:mailtoyatish55@gmail.com"
                  className="contact-row-light no-underline rounded-xl px-3 -mx-3 py-2 hover:bg-slate-50 min-w-0"
                >
                  <span className="contact-row-icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <span className="min-w-0">Email me</span>
                </a>

                <a
                  href="tel:+916309757639"
                  className="contact-row-light no-underline rounded-xl px-3 -mx-3 py-2 hover:bg-slate-50 min-w-0"
                >
                  <span className="contact-row-icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <FaPhoneAlt className="text-sm" />
                  </span>
                  <span className="min-w-0 tabular-nums">+91 6309757639</span>
                </a>

                <div className="contact-row-light px-3 -mx-3 min-w-0">
                  <span className="contact-row-icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <span className="min-w-0">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-slate-100 pt-6">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-slate-500 mb-3">
                Social & links
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/yatishdatta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-light no-underline"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/Yatish-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-light no-underline"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://tryhackme.com/p/yatish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-light no-underline"
                  aria-label="TryHackMe"
                >
                  <SiTryhackme />
                </a>

                <a
                  href="/Yatish_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-light no-underline"
                  aria-label="Resume PDF"
                >
                  <FaFileAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel min-w-0">
            <div className="contact-form-panel__head">
              <div className="contact-form-panel__icon" aria-hidden>
                <FaPaperPlane className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Send a message
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Fill in the form and I&apos;ll get back to you shortly.
                </p>
              </div>
            </div>

            <div className="contact-form-panel__body">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-field__label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="contact-input-pro"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-field__label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="user_email"
                      placeholder="Your email"
                      required
                      autoComplete="email"
                      className="contact-input-pro"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject" className="contact-field__label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="contact-input-pro"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-field__label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here…"
                    required
                    className="contact-input-pro contact-input-pro--textarea"
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  <FaPaperPlane className="text-sm opacity-90" aria-hidden />
                  <span>Send message</span>
                </button>

                {status && (
                  <p
                    className={`contact-form-status ${
                      status.includes("successfully")
                        ? "contact-form-status--ok"
                        : status === "Sending..."
                          ? "contact-form-status--pending"
                          : status.includes("wrong") ||
                              status.includes("not configured")
                            ? "contact-form-status--err"
                            : "contact-form-status--neutral"
                    }`}
                    role="status"
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
