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
    <section id="contact" ref={ref} className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Let's talk infrastructure.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-10">
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
                className="flex items-center gap-2.5 px-4 py-2.5 border border-border text-sm text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-200 rounded-md group"
              >
                <Icon size={14} />
                {label}
                <ArrowUpRight
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
