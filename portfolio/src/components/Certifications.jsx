import { FaEye, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <SectionHeading label="Credentials" title="Certifications" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="cert-card-pro">
            <img
              src="/aws.png"
              alt="AWS"
              className="cert-logo-large"
              decoding="async"
            />
            <h3 className="cert-title-pro">
              AWS Certified Cloud Practitioner (CLF-02)
            </h3>
            <a
              href="https://www.credly.com/badges/dbe1ac50-60bd-42df-8d88-cf4fab71e395/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pro"
            >
              <FaEye className="mr-2" />
              Verify credential
              <FaExternalLinkAlt className="ml-2 text-xs opacity-90" />
            </a>
          </div>

          <div className="cert-card-pro">
            <img
              src="/redhat.png"
              alt="Red Hat"
              className="cert-logo-large"
              decoding="async"
            />
            <h3 className="cert-title-pro">
              Red Hat Certified Enterprise Application Developer (EX-183)
            </h3>
            <a
              href="https://www.credly.com/badges/5c616102-e4ad-4a60-aa19-60c523220da5/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-pro w-full min-[400px]:w-fit mx-auto justify-center"
            >
              <FaEye className="mr-2" />
              Verify credential
              <FaExternalLinkAlt className="ml-2 text-xs opacity-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
