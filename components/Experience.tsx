'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const roles = [
  {
    title: 'Senior Backend Engineer',
    company: 'DataSnipper',
    period: 'Sep 2024 – Present',
    location: 'Amsterdam, Netherlands',
    current: true,
    highlights: [
      'Architected multi-provider model serving platform (FastAPI/Python) with intelligent failover across OpenAI, Azure, and Google Gemini — throttling, connection recovery, and exponential backoff',
      'Built async RAG pipelines with embedding caching (MongoDB), multi-region client routing, and structured observability via OpenTelemetry',
      'Designed task orchestration system with lifecycle management and blob-backed result storage',
      'Contributed to document-understanding pipelines (field extraction, checklist VQA) and ML experiment infrastructure (MLflow on Azure)',
      'Provisioned Azure landing zone infrastructure with Terraform; enforced type-safe ML interfaces via Pydantic and dependency injection',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Silverflow',
    period: 'Jul 2022 – Sep 2024',
    location: 'Amsterdam, Netherlands',
    current: false,
    highlights: [
      'Developed data-visualisation features for the Customer Portal of a global payment technology platform for PSPs',
      'Built a reusable React UI component library and design system that reduced development time and improved product consistency',
      'Built Node.js backend services on AWS and managed infrastructure as code with org-formation for dispute and chargeback workflows',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Lightspeed Commerce',
    period: 'Feb 2021 – Jun 2022',
    location: 'Amsterdam, Netherlands',
    current: false,
    highlights: [
      'Led rewrite and redesign of the Lightspeed Commerce Checkout, implementing all shipping and payment providers',
      'Developed new features and performed maintenance across the platform as a whole',
    ],
  },
  {
    title: 'Senior Frontend Engineer → Engineering Manager',
    company: 'JWP (InPlayer)',
    period: 'Aug 2018 – Mar 2021',
    location: 'Hybrid',
    current: false,
    highlights: [
      'Led a 5-person frontend engineering team; served as main architect of the frontend stack',
      'Developed and maintained the InPlayer Paywall; drove direct technical integrations with partners',
      'Open-source contributions through the InPlayer JavaScript SDK and React UI library',
      'Solely responsible for platform migration from Flow to TypeScript, including configuration and tooling setup',
      'Conducted technical interviews and actively contributed to sprint planning sessions',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'INSCALE Global',
    period: 'Sep 2017 – Aug 2018',
    location: 'Skopje, Macedonia',
    current: false,
    highlights: [
      'Built features on a booking platform connecting travelers with local tour operators for curated experiences worldwide',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Seavus',
    period: 'Jan 2017 – Sep 2017',
    location: 'Skopje, Macedonia',
    current: false,
    highlights: [
      'Developed B2B solutions for the iGaming industry — globally trusted sportsbook and gaming software',
      'Participated in defining technical specifications and frontend implementation details',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'MCA dooel',
    period: 'Dec 2015 – Jan 2017',
    location: 'Skopje, Macedonia',
    current: false,
    highlights: [
      'Built a SaaS solution targeting small and medium-sized companies in an Agile environment',
      'Developed API endpoints and frontend application (Angular, jQuery, KnockoutJS)',
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />
          <div className="space-y-14 md:pl-10">
            {roles.map((role, i) => (
              <motion.div
                key={`${role.company}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div
                  className="absolute -left-10 top-1.5 w-2 h-2 rounded-full hidden md:block"
                  style={{
                    backgroundColor: role.current ? 'var(--color-accent)' : 'var(--color-border)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: role.current ? 'var(--color-accent)' : 'var(--color-border)',
                    boxShadow: role.current ? '0 0 8px rgba(2, 132, 199, 0.35)' : 'none',
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted mt-0.5">
                      {role.company}
                      <span className="mx-2 text-border">·</span>
                      {role.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">{role.period}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-border mt-1.5 shrink-0">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
