import { Check, Circle, UserCircle } from 'lucide-react'
import { profile } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { aboutUi, type YearPlanStatus } from '../i18n/ui'
import MediaGallery from './MediaGallery'
import SectionHeadline from './SectionHeadline'

function YearPlanStatusIcon({ status }: { status: YearPlanStatus }) {
  if (status === 'done') {
    return <Check className="w-4 h-4 text-amber-400/95 shrink-0" strokeWidth={2.5} aria-hidden />
  }
  if (status === 'progress') {
    return <span className="year-plan-progress-ring shrink-0" title="In progress" aria-hidden />
  }
  return <Circle className="w-3.5 h-3.5 text-white/25 shrink-0" strokeWidth={1.5} aria-hidden />
}

export default function About() {
  const ref = useReveal()
  const { lang } = useLanguage()

  return (
    <section id="about" className="py-32 px-6 scroll-mt-24">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(aboutUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(aboutUi.sectionTitle, lang)}</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 metal-gold-frame">
            <div className="metal-gold-frame__inner about-gold-inner p-6 sm:p-8 space-y-6">
            <SectionHeadline Icon={UserCircle} className="!mb-6 !text-2xl sm:!text-3xl lg:!text-4xl">
              {t(aboutUi.headline, lang)}
            </SectionHeadline>
            <div className="space-y-4">
              {t(profile.bio, lang)
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i} className="text-zinc-200/90 leading-relaxed text-[15px]">
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
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="metal-gold-frame">
              <div className="metal-gold-frame__inner about-gold-inner p-5">
                <p className="text-[10px] font-mono text-cyber/70 tracking-[0.25em] mb-4">
                  {t(aboutUi.yearPlanTitle, lang)}
                </p>
                <ul className="space-y-3.5">
                  {aboutUi.yearPlanItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <span className="mt-0.5 flex w-5 justify-center">
                        <YearPlanStatusIcon status={item.status} />
                      </span>
                      <span className="text-[13px] text-zinc-200/90 leading-relaxed">{t(item.label, lang)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {aboutUi.stats.map((stat) => (
              <div key={stat.label.en} className="glass-card glass-card--about-stat rounded-xl p-5">
                <p className="text-[10px] font-mono text-cyber/70 tracking-[0.2em] mb-1.5">{t(stat.label, lang)}</p>
                <p className="text-white font-semibold text-sm mb-0.5">{t(stat.value, lang)}</p>
                <p className="text-white/45 text-xs">{t(stat.detail, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
