"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Information Systems Honours",
    institution: "Rhodes University",
    logo: "/rhodesLogo.png",
    period: "2022",
    description: null,
  },
  {
    degree: "Bachelor of Science in Computer Science and Information Systems",
    institution: "Rhodes University",
    logo: "/rhodesLogo.png",
    period: "2019 – 2021",
    description: "Graduated with Distinction",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">My academic background</p>
          <h2 className="section-title mb-12">Education</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark-700" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <AnimatedSection key={edu.degree} delay={idx * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-dark-900 border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <GraduationCap size={10} className="text-primary-400" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1.5 shrink-0"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                        {edu.description && (
                          <p className="text-gray-400 text-sm mt-2">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
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
