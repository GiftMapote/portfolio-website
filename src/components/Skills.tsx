"use client";

import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  icon: string | null;
  customIcon?: string;
}

const topRow: Skill[] = [
  { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
  { name: "Hive", icon: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" },
];

const bottomRow: Skill[] = [
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
    <div className="flex flex-col items-center justify-center px-8 py-5 bg-dark-900 border border-dark-700 rounded-xl min-w-[120px] hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
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
      <span className="text-xs text-gray-400 font-medium text-center whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function Marquee({
  skills,
  direction = "left",
  speed = 30,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate the array to create seamless loop
  const duplicated = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden w-full group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-800/100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-800/100 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-4 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
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
          <div className="space-y-6">
            <Marquee skills={topRow} direction="left" speed={35} />
            <Marquee skills={bottomRow} direction="right" speed={40} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
