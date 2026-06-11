"use client";

import AnimatedSection from "./AnimatedSection";
import { Database, Cloud, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title mb-8">About Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a Data Engineer with over 3 years of experience working in
                high-volume banking environments. I specialize in designing and
                operationalizing scalable data pipelines, cloud-based platforms,
                and data models that drive real business decisions.
              </p>
              <p>
                My expertise spans Apache Spark, SQL, AWS, and Databricks — 
                building production-grade solutions that support analytics,
                reporting, and machine learning use cases. I&apos;m experienced across
                the full data lifecycle: ingestion, transformation, modelling,
                and monitoring.
              </p>
              <p>
                I&apos;m passionate about data quality, governance, and performance
                optimization. I thrive on integrating data from multiple sources
                and collaborating with stakeholders to deliver reliable, scalable
                solutions aligned to business and technical standards.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors">
                <Database className="text-primary-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-1">Data Pipelines</h3>
                <p className="text-gray-400 text-sm">
                  Scalable batch & streaming ETL/ELT solutions processing millions of records daily
                </p>
              </div>
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors">
                <Cloud className="text-primary-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-1">Cloud Platforms</h3>
                <p className="text-gray-400 text-sm">
                  AWS & Databricks expertise — from S3 data lakes to Delta Lake architectures
                </p>
              </div>
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors">
                <BarChart3 className="text-primary-400 mb-3" size={28} />
                <h3 className="text-white font-semibold mb-1">Analytics & ML</h3>
                <p className="text-gray-400 text-sm">
                  Production-grade data solutions powering analytics, reporting, and ML models
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
