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
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-px bg-border">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background p-8 md:p-10 group hover:bg-surface transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted">{c.id}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">{c.system}</h3>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-border group-hover:text-muted transition-colors mt-1 shrink-0"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-tag border border-border px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-3 font-medium">
                    Problem
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-3 font-medium">
                    Architecture
                  </p>
                  <ul className="space-y-2">
                    {c.architecture.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="text-accent mt-0.5 shrink-0 font-mono">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="font-mono text-xs text-tag">{c.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
