"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Clock } from "lucide-react";

const certifications = [
  {
    name: "Databricks Data Engineer Associate",
    issuer: "Databricks",
    inProgress: false,
    verifyUrl: "https://credentials.databricks.com/18b46c51-8c16-4700-ac1d-366098d02bef#acc.0LwXp6bt",
    badge: "/DatabricksAssociate.jpeg",
  },
  {
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    inProgress: false,
    verifyUrl: "https://credentials.databricks.com/daf5b221-1460-49af-81e6-2075b5ad8ac9#acc.vdz8cNjB",
    badge: "/AIFundametals.png",
  },
  {
    name: "AWS AI & ML Scholar",
    issuer: "Udacity + AWS",
    inProgress: true,
    verifyUrl: null,
    badge: null,
  },
  {
    name: "SQL - Introduction to SQL with MySQL",
    issuer: "Udemy",
    inProgress: false,
    verifyUrl: "https://ude.my/UC-b882ca62-1d2a-4d24-831a-a36dd933c5c4",
    badge: null,
  },
  {
    name: "API and Web Service Introduction",
    issuer: "Udemy",
    inProgress: false,
    verifyUrl: "https://ude.my/UC-5ec17e88-8535-4544-9238-a27bec7dd953",
    badge: null,
  },
  {
    name: "Process Improvement – White Belt",
    issuer: "Professional Certification",
    inProgress: false,
    verifyUrl: null,
    badge: null,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-dark-800/50">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">Continuous learning</p>
          <h2 className="section-title mb-12">Certifications</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <AnimatedSection key={cert.name} delay={idx * 0.1}>
              <div className="p-6 bg-dark-900 border border-dark-700 rounded-xl h-full flex flex-col hover:border-primary-500/30 transition-colors group">
                {/* Badge image */}
                {cert.badge ? (
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-dark-700 p-2 group-hover:scale-105 transition-transform">
                      <img
                        src={cert.badge}
                        alt={cert.name}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-dark-700 flex items-center justify-center">
                      {cert.inProgress ? (
                        <Clock size={28} className="text-yellow-400" />
                      ) : (
                        <span className="text-2xl">🏅</span>
                      )}
                    </div>
                  </div>
                )}

                <h3 className="text-white font-semibold text-sm mb-2 text-center flex-grow">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-xs text-center mb-3">{cert.issuer}</p>

                {cert.inProgress && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full w-fit mx-auto bg-yellow-400/10 text-yellow-400 mb-3">
                    In Progress
                  </span>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-xs text-primary-400 hover:text-primary-300 transition-colors mx-auto"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
