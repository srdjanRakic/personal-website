'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">
      {/* Aurora gradient — committed opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 0% 75%, rgba(124, 58, 237, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 65% 55% at 95% 5%,  rgba(59, 130, 246, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 55% 65% at 55% 105%, rgba(5, 150, 105, 0.10) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Status pill */}
          <motion.div variants={item} className="mb-9">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/80 text-xs text-muted font-sans backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tag animate-pulse shrink-0" />
              Currently @ DataSnipper · AI Platform
            </span>
          </motion.div>

          {/* Headline — fluid type, two-line composition */}
          <motion.h1
            variants={item}
            className="font-heading font-bold leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: 'clamp(3.2rem, 9.5vw, 7.5rem)' }}
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(140deg, #18181b 15%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Backend
              <br />
              Engineer.
            </span>
            <br />
            <span
              className="text-muted"
              style={{ fontSize: '0.5em', letterSpacing: '0.01em', fontWeight: 600 }}
            >
              AI Platform.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-lg"
          >
            I architect the infrastructure between your product and the model.
            Multi-provider serving, embedding pipelines, intelligent failover —
            built for production from day one.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-3 mb-16">
            <a
              href="#case-studies"
              className="flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-sm"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)' }}
            >
              View Case Studies
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border text-sm font-medium rounded-lg transition-all duration-200 hover:bg-accent/5"
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted"
          >
            <span><span className="text-tag">12+</span> years</span>
            <span className="text-border select-none">·</span>
            <span>
              <span className="text-tag">Python</span>
              {' · '}
              <span className="text-tag">FastAPI</span>
              {' · '}
              <span className="text-tag">Azure</span>
            </span>
            <span className="text-border select-none">·</span>
            <span>Scale · Reliability · Observability</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted/50 uppercase tracking-widest">scroll</span>
        <motion.div
          className="w-px h-7 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, var(--color-muted), transparent)',
            opacity: 0.5,
          }}
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
