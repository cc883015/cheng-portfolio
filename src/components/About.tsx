import { profile } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { aboutUi } from '../i18n/ui'
import MediaGallery from './MediaGallery'

export default function About() {
  const ref = useReveal()
  const { lang } = useLanguage()

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(aboutUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(aboutUi.sectionTitle, lang)}</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: '"Space Grotesk", system-ui' }}>
              {t(aboutUi.headline1, lang)}
              <br />
              <span className="text-cyber">{t(aboutUi.headline2, lang)}</span>
            </h2>
            <div className="space-y-4">
              {t(profile.bio, lang)
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i} className="text-white/50 leading-relaxed text-[15px]">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
            {profile.aboutImages && profile.aboutImages.length > 0 && (
              <div className="pt-4">
                <p className="text-[10px] font-mono text-cyber/50 tracking-[0.2em] mb-3">
                  {t(aboutUi.galleryLabel, lang)}
                </p>
                <MediaGallery urls={profile.aboutImages} variant="strip" />
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {aboutUi.stats.map((stat) => (
              <div key={stat.label.en} className="glass-card rounded-xl p-5">
                <p className="text-[10px] font-mono text-cyber/50 tracking-[0.2em] mb-1.5">{t(stat.label, lang)}</p>
                <p className="text-white font-semibold text-sm mb-0.5">{t(stat.value, lang)}</p>
                <p className="text-white/30 text-xs">{t(stat.detail, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
