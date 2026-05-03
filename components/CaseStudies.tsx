'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    id: '01',
    system: 'Multi-Provider Model Serving',
    tags: ['OpenAI', 'Azure OpenAI', 'Gemini', 'Failover', 'FastAPI'],
    problem:
      'Single-provider dependency created a single point of failure. One outage meant full product downtime with no fallback path.',
    architecture: [
      'Provider abstraction layer with unified interface across OpenAI, Azure, and Gemini',
      'Health-aware routing with circuit breaker pattern per provider',
      'Priority-based failover with per-request latency budgets',
      'Cost-aware routing for non-latency-sensitive workloads',
    ],
    outcome: '99.9% availability · 40% cost reduction via intelligent routing',
  },
  {
    id: '02',
    system: 'Async RAG Pipeline',
    tags: ['MongoDB', 'FastAPI', 'asyncio', 'Vector Search', 'MLflow'],
    problem:
      'Synchronous ingestion pipeline saturated at 50 docs/min. Retrieval latency spiked unpredictably under concurrent user load.',
    architecture: [
      'Fully async task queue with backpressure control and dead-letter handling',
      'Embedding cache with TTL and semantic deduplication to reduce model calls',
      'Hybrid BM25 + vector search with reciprocal rank fusion',
      'Per-tenant isolation with configurable chunking strategies',
    ],
    outcome: '10x throughput · P95 retrieval < 120ms at 1K concurrent users',
  },
  {
    id: '03',
    system: 'Document Intelligence Platform',
    tags: ['Azure', 'Python', 'Kubernetes', 'Pydantic', 'OpenTelemetry'],
    problem:
      'Enterprise clients ingesting 100K+ heterogeneous documents per day with strict SLA requirements and no tolerance for silent extraction failures.',
    architecture: [
      'Parallel extraction pipeline with pluggable format-specific adapters',
      'Semantic chunking with cross-document entity normalization',
      'Pydantic-enforced output schemas with validation at every stage boundary',
      'Full observability via OpenTelemetry — traces, metrics, and structured logs',
    ],
    outcome: '1M+ docs/month · 99.5% extraction accuracy · 100% trace coverage',
  },
]

export function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="case-studies" ref={ref} className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">System Design</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1 , y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-xl border border-border bg-surface/50 p-8 md:p-10 overflow-hidden group hover:border-accent/30 hover:bg-surface transition-all duration-300"
            >
              {/* Ghost index number */}
              <div
                className="absolute -bottom-6 -right-4 font-heading font-bold leading-none select-none pointer-events-none text-foreground transition-opacity duration-300"
                style={{
                  fontSize: 'clamp(6rem, 14vw, 11rem)',
                  opacity: 0.035,
                }}
              >
                {c.id}
              </div>

              {/* Left accent line on hover */}
              <div
                className="absolute left-0 top-10 bottom-10 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: 'linear-gradient(180deg, #7c3aed, #3b82f6)' }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted/60">{c.id}</span>
                    <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground">
                      {c.system}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-border group-hover:text-accent transition-colors duration-200 mt-0.5 shrink-0"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-tag bg-tag/8 border border-tag/20 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs text-muted/70 uppercase tracking-widest mb-3 font-medium">
                      Problem
                    </p>
                    <p className="text-sm text-muted leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted/70 uppercase tracking-widest mb-3 font-medium">
                      Architecture
                    </p>
                    <ul className="space-y-2">
                      {c.architecture.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="text-accent mt-0.5 shrink-0 font-mono text-xs">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <p className="font-mono text-xs text-tag">{c.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
