'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Code, Globe, ArrowUpRight } from 'lucide-react'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/srdjanRakic',
    icon: Code,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srdjan-raki%C4%87-7784b5113/',
    icon: Globe,
  },
  {
    label: 'Email',
    href: 'mailto:srgjan.rakic',
    icon: Mail,
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="section-dark relative py-32 px-6 overflow-hidden">
      {/* Dark aurora */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 75% at -5% 100%, rgba(124, 58, 237, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 55% 65% at 105% -5%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">Contact</p>
          <h2
            className="font-heading font-bold text-foreground tracking-tight leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Let's talk
            <br />
            infrastructure.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-10 max-w-md">
            Open to interesting projects, architecture conversations, and senior engineering
            roles where scale and reliability actually matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2.5 px-4 py-2.5 border border-border rounded-lg text-sm text-muted hover:text-foreground hover:border-foreground/25 transition-all duration-200 group"
              >
                <Icon size={14} />
                {label}
                <ArrowUpRight
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
