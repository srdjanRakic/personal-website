'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const links = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border backdrop-blur-lg bg-background/85' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-border shrink-0">
            <Image
              src="/profile-pic.jpg"
              alt="Srdjan Rakic"
              width={32}
              height={32}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="font-heading font-semibold text-sm text-foreground tracking-tight">
            Srdjan Rakic
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
