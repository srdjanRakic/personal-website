'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">
      {/* Aurora gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 10% 65%, rgba(124, 58, 237, 0.09) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 85% 15%, rgba(59, 130, 246, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 45% 55% at 55% 95%, rgba(5, 150, 105, 0.06) 0%, transparent 70%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-8"
          >
            Senior Backend Engineer · AI Platform
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #18181b 20%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Backend Engineer.
            </span>{' '}
            <span className="text-muted">AI Platform.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl"
          >
            I architect the infrastructure between your product and the model.
            Multi-provider serving, embedding pipelines, intelligent failover —
            built for production from day one.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-3 mb-20">
            <a
              href="#case-studies"
              className="flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)' }}
            >
              View Case Studies
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border text-sm font-medium rounded-md transition-colors duration-200 hover:bg-accent/5"
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted"
          >
            <span>
              <span className="text-tag">12+</span> years
            </span>
            <span className="text-border">·</span>
            <span>
              <span className="text-tag">Python</span> ·{' '}
              <span className="text-tag">FastAPI</span> ·{' '}
              <span className="text-tag">Azure</span>
            </span>
            <span className="text-border">·</span>
            <span>Scale · Reliability · Observability</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
