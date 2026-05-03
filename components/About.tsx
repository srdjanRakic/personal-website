'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    label: 'Scale First',
    description:
      "I design for 10x the current load by default. Capacity is an architectural decision, not a deployment one.",
  },
  {
    label: 'Observable by Default',
    description:
      "Every system ships with structured logs, distributed traces, and meaningful metrics. If it isn't measured, it isn't production.",
  },
  {
    label: 'Pragmatic Complexity',
    description:
      "Abstraction earns its place — where provider APIs diverge, not where your domain logic lives.",
  },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">About</p>
          <p className="text-2xl md:text-3xl text-foreground font-medium leading-snug max-w-2xl">
            12 years building backend systems. The last three focused entirely on AI
            infrastructure — the layer most teams build wrong once and rewrite twice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8"
            >
              <p className="font-mono text-xs text-accent mb-4 tracking-wide">{pillar.label}</p>
              <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
