import type { ElementType } from 'react'
import { Aperture, Code2, Headset, Hotel, Layers, Server, Shield, Wrench } from 'lucide-react'
import { skillCategories } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { skillsUi } from '../i18n/ui'
import SectionHeadline from './SectionHeadline'

const categoryIconByEnName: Record<string, ElementType> = {
  'IT Support & Service Desk': Headset,
  Development: Code2,
  Cybersecurity: Shield,
  Infrastructure: Server,
  'Tools & Platforms': Wrench,
  'Hotel & OTA Operations': Hotel,
  'Imaging & ISP': Aperture,
}

export default function Skills() {
  const ref = useReveal()
  const { lang } = useLanguage()

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(skillsUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(skillsUi.sectionTitle, lang)}</span>
        </div>

        <SectionHeadline Icon={Layers} className="mb-16 sm:mb-16">
          <>
            {t(skillsUi.headline, lang)}
            <span className="text-cyber">.</span>
          </>
        </SectionHeadline>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = categoryIconByEnName[category.name.en] ?? Layers
            return (
            <div
              key={category.name.en}
              className="glass-card rounded-xl p-6"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-cyber/90"
                  aria-hidden
                >
                  <CatIcon className="h-3.5 w-3.5" strokeWidth={1.85} />
                </span>
                <h3 className="font-mono text-xs text-cyber/70 tracking-[0.2em]">{t(category.name, lang).toUpperCase()}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-cyber hover:border-cyber/25 hover:bg-cyber/8 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
