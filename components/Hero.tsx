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
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
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
            className="text-5xl md:text-7xl font-semibold text-foreground leading-[1.05] tracking-tight mb-6"
          >
            Backend Engineer.{' '}
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
              className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors duration-200"
            >
              View Case Studies
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:border-foreground/30 transition-colors duration-200"
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
