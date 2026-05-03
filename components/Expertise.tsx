'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stacks = [
  {
    category: 'Languages & Frameworks',
    items: ['Python', 'FastAPI', 'Pydantic', 'TypeScript', 'asyncio'],
  },
  {
    category: 'Infrastructure',
    items: ['Azure', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
  },
  {
    category: 'Data & AI',
    items: ['MongoDB', 'MLflow', 'OpenTelemetry', 'Vector DBs', 'Embedding Models'],
  },
  {
    category: 'Architecture',
    items: ['RAG Pipelines', 'Multi-Provider Routing', 'Circuit Breakers', 'Event-Driven', 'API Design'],
  },
]

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block font-mono text-xs text-tag bg-tag/8 border border-tag/20 px-2.5 py-1 rounded-md hover:bg-tag/15 hover:border-tag/40 transition-all duration-200 cursor-default">
      {label}
    </span>
  )
}

export function Expertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertise" ref={ref} className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            The Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-surface/60 hover:bg-surface hover:border-border/80 transition-all duration-200"
            >
              <p className="font-heading font-semibold text-xs text-foreground uppercase tracking-wider mb-5 pb-4 border-b border-border">
                {stack.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
