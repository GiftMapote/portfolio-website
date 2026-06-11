"use client";

import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  icon: string | null;
  customIcon?: string;
}

const allSkills: Skill[] = [
  { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
  { name: "Hive", icon: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
  { name: "Bamboo", icon: "https://www.vectorlogo.zone/logos/atlassian_bamboo/atlassian_bamboo-icon.svg" },
  { name: "OpenShift", icon: "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg" },
  { name: "YARN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
  { name: "Medallion", icon: null, customIcon: "M" },
  { name: "Batch & Streaming", icon: null, customIcon: "B&S" },
  { name: "ETL/ELT", icon: null, customIcon: "ETL" },
  { name: "Data Warehouse", icon: null, customIcon: "DW" },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-dark-900 border border-dark-700 rounded-xl hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="w-10 h-10 mb-2 flex items-center justify-center">
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-9 h-9 object-contain"
          />
        ) : (
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-white text-[10px] font-bold">
            {skill.customIcon || skill.name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-xs text-gray-400 font-medium text-center">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-dark-800/50">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title mb-4">Skills & Tools</h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Technologies and tools I use to build scalable data solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {allSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
