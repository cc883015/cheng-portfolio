import { skillCategories } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { skillsUi } from '../i18n/ui'

export default function Skills() {
  const ref = useReveal()
  const { lang } = useLanguage()

  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(skillsUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(skillsUi.sectionTitle, lang)}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16" style={{ fontFamily: '"Space Grotesk", system-ui' }}>
          {t(skillsUi.headline, lang)}
          <span className="text-cyber">.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name.en}
              className="glass-card rounded-xl p-6"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-cyber glow-dot" />
                <h3 className="font-mono text-xs text-cyber/70 tracking-[0.2em]">{t(category.name, lang).toUpperCase()}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-cyber hover:border-cyber/20 hover:bg-cyber/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
