import type { Metadata } from 'next'
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
