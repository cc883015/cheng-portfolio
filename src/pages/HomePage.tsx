import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AwardsSection from '../components/AwardsSection'
import JourneySection from '../components/JourneySection'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { timelineByCategory } from '../data/portfolio'

export default function HomePage() {
  return (
    <div className="noise scan-line">
      <Navbar />
      <main>
        <Hero />
        <About />
        <JourneySection sectionKey="education" items={timelineByCategory.education} />
        <AwardsSection />
        <JourneySection sectionKey="work" items={timelineByCategory.work} />
        <JourneySection sectionKey="projects" items={timelineByCategory.project} />
        <JourneySection sectionKey="certs" items={timelineByCategory.cert} />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
