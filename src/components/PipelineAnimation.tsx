"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const sources = [
  { label: "API", emoji: "🔌" },
  { label: "Database", emoji: "🗄️" },
  { label: "Files", emoji: "📁" },
  { label: "Streaming", emoji: "📡" },
];

const layers = [
  {
    label: "Bronze",
    color: "#d97706",
    bg: "#92400e",
    desc: "Raw ingestion",
    phases: [],
  },
  {
    label: "Silver",
    color: "#9ca3af",
    bg: "#4b5563",
    desc: "Cleaned & validated",
    phases: ["Deduplication", "Schema checks", "Type casting", "Null handling", "Joins & enrich"],
  },
  {
    label: "Gold",
    color: "#eab308",
    bg: "#a16207",
    desc: "Business-ready",
    phases: ["Aggregations", "Business logic", "KPI calcs", "Dim modelling", "SCD handling"],
  },
];

const outputs = [
  { label: "BI Dashboard", emoji: "📊" },
  { label: "ML Models", emoji: "🤖" },
  { label: "Reports", emoji: "📈" },
  { label: "APIs", emoji: "⚡" },
];

function FlowingParticles({ direction = "right", delay = 0 }: { direction?: "right" | "left"; delay?: number }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-400/70 shadow-sm shadow-primary-400/30"
          initial={{ left: direction === "right" ? "-10%" : "110%", opacity: 0 }}
          animate={{
            left: direction === "right" ? "110%" : "-10%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: delay + i * 1.2,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

function FlowingParticlesVertical({ delay = 0 }: { delay?: number }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-400/70 shadow-sm shadow-primary-400/30"
          initial={{ top: "-10%", opacity: 0 }}
          animate={{
            top: "110%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: delay + i * 1.2,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

function LayerCard({ layer, i }: { layer: typeof layers[number]; i: number }) {
  return (
    <motion.div
      className="relative px-4 py-3 rounded-xl border text-center w-full"
      style={{
        borderColor: layer.color,
        backgroundColor: `${layer.bg}15`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15 + 0.6 }}
    >
      <div
        className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1"
        style={{ color: layer.color }}
      >
        {layer.label}
      </div>
      <div className="text-[10px] text-gray-500 mb-1.5">{layer.desc}</div>

      {layer.phases.length > 0 && (
        <div className="border-t border-dark-700/50 pt-1.5 mt-1.5">
          {layer.phases.map((phase, pi) => (
            <motion.div
              key={phase}
              className="text-[9px] flex items-center gap-1 px-1.5 py-0.5 rounded whitespace-nowrap"
              animate={{
                backgroundColor: ["transparent", `${layer.color}25`, "transparent"],
                color: ["#9ca3af", "#ffffff", "#9ca3af"],
              }}
              transition={{
                duration: 1.5,
                delay: i * 3 + pi * 0.6,
                repeat: Infinity,
                repeatDelay: 8,
                ease: "easeInOut",
              }}
            >
              <motion.span
                style={{ color: layer.color }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1.5,
                  delay: i * 3 + pi * 0.6,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "easeInOut",
                }}
              >
                •
              </motion.span>
              {phase}
            </motion.div>
          ))}
        </div>
      )}

      {/* Processing pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: layer.color }}
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{
          duration: 2,
          delay: i * 2.5,
          repeat: Infinity,
          repeatDelay: layers.length * 2.5 - 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl border"
        style={{ borderColor: layer.color }}
        animate={{ opacity: [0.1, 0.6, 0.1] }}
        transition={{
          duration: 2,
          delay: i * 2.5,
          repeat: Infinity,
          repeatDelay: layers.length * 2.5 - 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default function PipelineAnimation() {
  return (
    <section className="py-12 border-t border-b border-dark-700/50 bg-dark-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">
            How I move data
          </p>
        </AnimatedSection>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:block">
          <AnimatedSection delay={0.2}>
            {/* Orchestration bar */}
            <div className="mb-4 mx-auto max-w-xl">
              <motion.div
                className="flex items-center justify-center gap-4 px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-purple-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Orchestration</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">⚙️ Scheduling</span>
                  <span className="text-[10px] text-gray-400">🔀 DAGs</span>
                  <span className="text-[10px] text-gray-400">🔁 Retries</span>
                  <span className="text-[10px] text-gray-400">📦 CI/CD</span>
                </div>
              </motion.div>
            </div>

            <div className="flex items-stretch justify-between gap-5">
              {/* Sources */}
              <div className="flex flex-col gap-2 justify-center">
                {sources.map((src, i) => (
                  <motion.div
                    key={src.label}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-xs text-gray-400"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <span className="text-sm">{src.emoji}</span>
                    <span>{src.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Arrow from sources */}
              <div className="relative flex-shrink-0 w-10 flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-gray-600 to-primary-500/50" />
                <div className="absolute right-0 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-primary-500/50" />
                <FlowingParticles direction="right" delay={0} />
              </div>

              {/* Medallion Layers */}
              <div className="flex items-center gap-2">
                {layers.map((layer, i) => (
                  <div key={layer.label} className="flex items-center">
                    <LayerCard layer={layer} i={i} />
                    {i < layers.length - 1 && (
                      <motion.div
                        className="flex items-center mx-2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          delay: i * 2.5 + 1.5,
                          repeat: Infinity,
                          repeatDelay: layers.length * 2.5 - 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-primary-400 text-sm font-bold">→</span>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrow to outputs */}
              <div className="relative flex-shrink-0 w-10 flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-primary-500/50 to-gray-600" />
                <div className="absolute right-0 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-gray-600" />
                <FlowingParticles direction="right" delay={1.5} />
              </div>

              {/* Outputs */}
              <div className="flex flex-col gap-2 justify-center">
                {outputs.map((out, i) => (
                  <motion.div
                    key={out.label}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-xs text-gray-400"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 1 }}
                  >
                    <motion.span
                      className="text-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1,
                        delay: 7.5 + i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 7.5 - 1 + (outputs.length - i) * 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {out.emoji}
                    </motion.span>
                    <span>{out.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom bars */}
            <div className="mt-4 mx-auto max-w-xl space-y-3">
              <motion.div
                className="flex items-center justify-center gap-4 px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Monitoring & Alerting</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">📡 Observability</span>
                  <span className="text-[10px] text-gray-400">🔔 Alerts</span>
                  <span className="text-[10px] text-gray-400">📋 Data Quality</span>
                  <span className="text-[10px] text-gray-400">⏱️ SLAs</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-4 px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Data Governance</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">🔗 Lineage</span>
                  <span className="text-[10px] text-gray-400">🔐 Access Control</span>
                  <span className="text-[10px] text-gray-400">📖 Catalog</span>
                  <span className="text-[10px] text-gray-400">📐 Schema Evolution</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden">
          <AnimatedSection delay={0.2}>
            {/* Orchestration */}
            <motion.div
              className="flex items-center gap-2 px-3 py-2 bg-dark-800/60 border border-dark-700 rounded-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-purple-400 shrink-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">Orchestration</span>
              <div className="flex flex-wrap gap-1.5 ml-auto">
                <span className="text-[9px] text-gray-400">⚙️</span>
                <span className="text-[9px] text-gray-400">🔀</span>
                <span className="text-[9px] text-gray-400">🔁</span>
                <span className="text-[9px] text-gray-400">📦</span>
              </div>
            </motion.div>

            {/* Sources row */}
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {sources.map((src, i) => (
                <motion.div
                  key={src.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-800 border border-dark-700 rounded-lg text-xs text-gray-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <span className="text-sm">{src.emoji}</span>
                  <span className="text-[10px]">{src.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Vertical arrow */}
            <div className="relative h-8 w-full flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-gray-600 to-primary-500/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-primary-500/50" />
              <FlowingParticlesVertical delay={0} />
            </div>

            {/* Medallion layers stacked */}
            <div className="space-y-2 my-3">
              {layers.map((layer, i) => (
                <div key={layer.label}>
                  <LayerCard layer={layer} i={i} />
                  {i < layers.length - 1 && (
                    <div className="relative h-6 w-full flex justify-center">
                      <div className="w-px h-full bg-gradient-to-b from-primary-500/50 to-primary-500/50" />
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          delay: i * 2.5 + 1.5,
                          repeat: Infinity,
                          repeatDelay: layers.length * 2.5 - 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-primary-400 text-sm font-bold">↓</span>
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical arrow */}
            <div className="relative h-8 w-full flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-primary-500/50 to-gray-600" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-gray-600" />
              <FlowingParticlesVertical delay={1.5} />
            </div>

            {/* Outputs row */}
            <div className="flex flex-wrap gap-2 justify-center mt-3 mb-4">
              {outputs.map((out, i) => (
                <motion.div
                  key={out.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-800 border border-dark-700 rounded-lg text-xs text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 1 }}
                >
                  <motion.span
                    className="text-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1,
                      delay: 7.5 + i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 7.5 - 1 + (outputs.length - i) * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {out.emoji}
                  </motion.span>
                  <span className="text-[10px]">{out.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom bars */}
            <div className="space-y-2">
              <motion.div
                className="flex items-center gap-2 px-3 py-2 bg-dark-800/60 border border-dark-700 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Monitoring</span>
                <div className="flex flex-wrap gap-1.5 ml-auto">
                  <span className="text-[9px] text-gray-400">📡</span>
                  <span className="text-[9px] text-gray-400">🔔</span>
                  <span className="text-[9px] text-gray-400">📋</span>
                  <span className="text-[9px] text-gray-400">⏱️</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-3 py-2 bg-dark-800/60 border border-dark-700 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-blue-400 shrink-0"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Governance</span>
                <div className="flex flex-wrap gap-1.5 ml-auto">
                  <span className="text-[9px] text-gray-400">🔗</span>
                  <span className="text-[9px] text-gray-400">🔐</span>
                  <span className="text-[9px] text-gray-400">📖</span>
                  <span className="text-[9px] text-gray-400">📐</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
