import { Award, ExternalLink } from 'lucide-react'
import { linkedInHighlights, socialLinks, type LinkedInHighlight } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { awardsUi } from '../i18n/ui'
import MediaGallery from './MediaGallery'

function urlsFor(item: LinkedInHighlight): string[] {
  if (item.images?.length) return item.images
  if (item.image) return [item.image]
  return []
}

function AwardCard({ item, index, total }: { item: LinkedInHighlight; index: number; total: number }) {
  const ref = useReveal()
  const { lang } = useLanguage()
  const gallery = urlsFor(item)
  const isLast = index === total - 1

  return (
    <div ref={ref} className="reveal relative flex gap-0" style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="relative flex w-14 sm:w-20 shrink-0 flex-col items-center">
        {!isLast && (
          <div
            className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-amber-400/35 via-white/10 to-white/[0.04]"
            aria-hidden
          />
        )}
        <div className="relative z-[1] mt-6 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl text-amber-400/90">
          <Award className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
        </div>
      </div>

      <div className="min-w-0 flex-1 pb-14 pl-2 sm:pl-4">
        <article className="glass-card glass-card-strong rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">{t(item.title, lang)}</h3>
              {item.issuer && <p className="text-white/40 text-sm mt-0.5">{t(item.issuer, lang)}</p>}
            </div>
            <span className="text-[11px] font-mono text-white/25 shrink-0">{t(item.displayDate, lang)}</span>
          </div>

          {gallery.length > 0 && <MediaGallery urls={gallery} variant="strip" />}

          {item.description && (
            <p className="text-white/40 text-sm leading-relaxed whitespace-pre-line">{t(item.description, lang)}</p>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyber/60 hover:text-cyber transition-colors font-mono w-fit"
            >
              {t(awardsUi.viewLink, lang)} <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </article>
      </div>
    </div>
  )
}

export default function AwardsSection() {
  const { lang } = useLanguage()
  const linkedIn = socialLinks.find((s) => s.platform === 'LinkedIn')
  const items = linkedInHighlights

  if (!items.length) return null

  return (
    <section id="awards" className="py-24 sm:py-28 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(awardsUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/25 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(awardsUi.sectionTitle, lang)}</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-14"
          style={{ fontFamily: '"Space Grotesk", system-ui' }}
        >
          {t(awardsUi.headline, lang)}
          <span className="text-cyber">.</span>
        </h2>

        <div className="relative">
          {items.map((item, i) => (
            <AwardCard key={item.id} item={item} index={i} total={items.length} />
          ))}
        </div>

        {linkedIn && (
          <p className="mt-8 text-center">
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyber/50 hover:text-cyber transition-colors"
            >
              {t(awardsUi.linkedInCta, lang)}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
