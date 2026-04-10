import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Updates from '../components/Updates'
import Timeline from '../components/Timeline'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div className="noise scan-line">
      <Navbar variant="home" />
      <main>
        <Hero />
        <About />
        <Updates />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
