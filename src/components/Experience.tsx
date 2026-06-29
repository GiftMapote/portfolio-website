"use client";

import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Tech Engineer",
    company: "Monocle Solutions",
    logo: "/monocle_solutions_logo.jpeg",
    period: "2026 – Present",
    location: "South Africa",
    responsibilities: [
      "Delivering technology consulting and engineering solutions for financial services clients",
      "Designing and implementing scalable technical architectures aligned with business objectives",
      "Collaborating with cross-functional teams to drive digital transformation initiatives",
    ],
  },
  {
    role: "Data Engineer",
    company: "First National Bank",
    logo: "/fnbLogo.webp",
    period: "Jan 2023 – 2026",
    location: "South Africa",
    responsibilities: [
      "Designed, built, and maintained scalable data pipelines and cloud-based data platforms using Apache Spark and AWS services",
      "Developed ETL/ELT processes to ingest and transform large, complex datasets from multiple sources into centralized data lakes and warehouses",
      "Optimized Spark jobs and SQL transformations to improve performance, including handling data skew and reducing shuffle overhead",
      "Built and maintained data validation and monitoring frameworks to ensure high data quality in production environments",
      "Migrated data pipelines from on-prem to AWS, improving scalability, performance, and cost efficiency",
      "Performed root cause analysis and resolved production issues within SLA timelines",
      "Contributed to data architecture decisions, ensuring alignment with governance and platform design principles",
    ],
  },
  {
    role: "Business Consultant Intern",
    company: "BSG",
    logo: "/bsglogo.png",
    period: "June 2022 – July 2022",
    location: "South Africa",
    responsibilities: [
      "Supported project delivery by gathering and documenting business and functional requirements for digital transformation initiatives",
      "Contributed to Agile project delivery by participating in sprint planning, documentation, and progress tracking",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-800/50">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">Where I&apos;ve worked</p>
          <h2 className="section-title mb-12">Experience</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark-700" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={exp.company + exp.role} delay={idx * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-dark-900 border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <Briefcase size={10} className="text-primary-400" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-dark-900 border border-dark-700 rounded-xl hover:border-primary-500/30 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1.5 shrink-0"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {exp.role}
                        </h3>
                        <span className="text-primary-400 font-medium text-sm">
                          {exp.company}
                        </span>
                        <p className="text-gray-500 text-sm mt-0.5">
                          {exp.period} · {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1.5 shrink-0">
                            ▹
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
