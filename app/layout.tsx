import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Srdjan Rakic — Backend Engineer, AI Platform',
  description:
    'Senior Backend Engineer specializing in AI infrastructure. Multi-provider model serving, async RAG pipelines, and document intelligence at scale.',
  keywords: ['Backend Engineer', 'AI Platform', 'Python', 'FastAPI', 'MLOps', 'System Architecture'],
  openGraph: {
    title: 'Srdjan Rakic — Backend Engineer, AI Platform',
    description:
      'Senior Backend Engineer specializing in AI infrastructure. Multi-provider model serving, async RAG pipelines, and document intelligence at scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
