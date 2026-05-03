'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    index: '01',
    label: 'Scale First',
    description:
      'I design for 10x the current load by default. Capacity is an architectural decision, not a deployment one.',
  },
  {
    index: '02',
    label: 'Observable by Default',
    description:
      "Every system ships with structured logs, distributed traces, and meaningful metrics. If it isn't measured, it isn't production.",
  },
  {
    index: '03',
    label: 'Pragmatic Complexity',
    description:
      'Abstraction earns its place — where provider APIs diverge, not where your domain logic lives.',
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
          <p
            className="font-heading font-semibold text-foreground leading-[1.1] max-w-2xl"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            12 years building backend systems. The last three focused entirely on AI
            infrastructure — the layer most teams build wrong once and rewrite twice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group pl-5 border-l-2 border-accent/20 hover:border-accent/70 transition-colors duration-400"
            >
              <span className="font-mono text-[10px] text-muted/60 tracking-widest mb-3 block">
                {pillar.index}
              </span>
              <p className="font-heading font-semibold text-foreground text-base mb-3">
                {pillar.label}
              </p>
              <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
