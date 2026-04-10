import { Award, ExternalLink } from 'lucide-react'
import { linkedInHighlights, socialLinks, type LinkedInHighlight } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { updatesUi } from '../i18n/ui'
import MediaGallery from './MediaGallery'

function highlightGalleryUrls(item: LinkedInHighlight): string[] {
  if (item.images?.length) return item.images
  if (item.image) return [item.image]
  return []
}

function HighlightCard({ item }: { item: LinkedInHighlight }) {
  const { lang } = useLanguage()
  const galleryUrls = highlightGalleryUrls(item)

  return (
    <article className="glass-card rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <span className="inline-flex p-1.5 rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-400 shrink-0">
            <Award className="w-3.5 h-3.5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-base leading-snug">{t(item.title, lang)}</h3>
            {item.issuer && <p className="text-white/40 text-sm mt-0.5">{t(item.issuer, lang)}</p>}
          </div>
        </div>
        <span className="text-[11px] font-mono text-white/25 shrink-0">{t(item.displayDate, lang)}</span>
      </div>

      {galleryUrls.length > 0 && <MediaGallery urls={galleryUrls} variant="strip" />}

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
          {t(updatesUi.viewLink, lang)} <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </article>
  )
}

export default function Updates() {
  const ref = useReveal()
  const { lang } = useLanguage()
  const linkedIn = socialLinks.find((s) => s.platform === 'LinkedIn')

  return (
    <section id="updates" className="py-32 px-6">
      <div ref={ref} className="reveal max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(updatesUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(updatesUi.sectionTitle, lang)}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Space Grotesk", system-ui' }}>
          {t(updatesUi.headline, lang)}
          <span className="text-cyber">.</span>
        </h2>
        <p className="text-white/40 text-sm mb-10 max-w-xl leading-relaxed">{t(updatesUi.sub, lang)}</p>

        <div className="flex flex-col gap-6">
          {linkedInHighlights.map((item) => (
            <HighlightCard key={item.id} item={item} />
          ))}
        </div>

        {linkedIn && (
          <p className="mt-10 text-center">
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyber/50 hover:text-cyber transition-colors"
            >
              {t(updatesUi.linkedInCta, lang)}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
