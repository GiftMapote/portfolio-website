"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Award } from "lucide-react";

const projects = [
  {
    title: "Rental Fairness Checker",
    description:
      "End-to-end cloud-based rental analytics platform that assesses rental price fairness across different areas. Integrates AWS Bedrock AI for multilingual rental insights across 9 languages.",
    tech: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "S3", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
      { name: "IAM", icon: null },
      { name: "Amplify", icon: null },
      { name: "API Gateway", icon: null },
      { name: "SNS", icon: null },
      { name: "Lambda", icon: null },
      { name: "Budgets", icon: null },
      { name: "CloudWatch", icon: null },
      { name: "Bedrock", icon: null },
      { name: "Athena", icon: null },
    ],
    liveUrl: "https://main.d1y5bsp5jwth70.amplifyapp.com/",
    githubUrl: null,
    highlight: false,
    award: null,
  },
  {
    title: "Mule Fraud Detection",
    description:
      "Feature store pipelines to track behavioural patterns and identify accounts potentially used as mule accounts. Delivered production-ready features consumed by DataRobot fraud model scoring pipelines.",
    tech: [
      { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "DataRobot", icon: null },
    ],
    liveUrl: null,
    githubUrl: null,
    highlight: true,
    award: "Innovation Award",
  },
  {
    title: "Clickstream Pipeline Migration",
    description:
      "Migrated a high-volume clickstream pipeline from Cloudera to AWS using Spark and EMR. Reduced pipeline runtime from ~8 hours to under 3 hours while improving costs and stability.",
    tech: [
      { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
      { name: "AWS EMR", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
      { name: "S3", icon: null },
      { name: "Data Lake", icon: null },
    ],
    liveUrl: null,
    githubUrl: null,
    highlight: false,
    award: null,
  },
  {
    title: "EBE Real Time Streaming Tracker",
    description:
      "Real-time streaming solution using Apache Kafka and Java to track incomplete product take-up applications. Enabled call centre teams to proactively follow up with clients.",
    tech: [
      { name: "Apache Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Streaming", icon: null },
    ],
    liveUrl: null,
    githubUrl: null,
    highlight: false,
    award: null,
  },
  {
    title: "Fraud Sentinel Medallion Pipeline",
    description:
      "Analytics-ready datasets integrated with Power BI dashboards. Automated observability system with Databricks Workflows monitoring pipeline health with instant email alerts.",
    tech: [
      { name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
      { name: "Delta Lake", icon: null },
      { name: "Power BI", icon: null },
      { name: "OPTIMIZE/VACUUM", icon: null },
    ],
    liveUrl: null,
    githubUrl: null,
    highlight: false,
    award: null,
  },
  {
    title: "Cloudera Dataset Monitor",
    description:
      "Hourly monitoring job using Scala and SQL to detect missing data across 20+ critical datasets supporting downstream fraud and analytics pipelines.",
    tech: [
      { name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Cloudera", icon: null },
      { name: "Monitoring", icon: null },
    ],
    liveUrl: null,
    githubUrl: null,
    highlight: false,
    award: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">What I&apos;ve built</p>
          <h2 className="section-title mb-12">Projects</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.1}>
              <div className="group p-6 bg-dark-800 border border-dark-700 rounded-xl h-full flex flex-col hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        aria-label={`View ${project.title} source`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Award badge */}
                {project.highlight && project.award && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Award size={14} className="text-yellow-400" />
                    <span className="text-xs font-medium text-yellow-400">
                      {project.award}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech tags with icons */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs bg-dark-700 text-primary-300 rounded"
                    >
                      {t.icon && (
                        <img
                          src={t.icon}
                          alt={t.name}
                          className="w-3.5 h-3.5 object-contain"
                        />
                      )}
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
