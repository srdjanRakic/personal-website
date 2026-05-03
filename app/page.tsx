import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Expertise } from '@/components/Expertise'
import { CaseStudies } from '@/components/CaseStudies'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <CaseStudies />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
