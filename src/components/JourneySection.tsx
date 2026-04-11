import type { ElementType } from 'react'
import { Briefcase, FolderOpen, GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react'
import type { TimelineItem } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t, type Lang } from '../i18n/utils'
import { journeyUi, timelineUi, type JourneySectionKey } from '../i18n/ui'
import MediaGallery from './MediaGallery'

const typeIcons: Record<TimelineItem['type'], ElementType> = {
  work: Briefcase,
  cert: ShieldCheck,
  award: Briefcase,
  project: FolderOpen,
  education: GraduationCap,
}

const typeColors: Record<TimelineItem['type'], string> = {
  work: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  cert: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  award: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  project: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  education: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

function galleryUrls(item: TimelineItem): string[] {
  if (item.images?.length) return item.images
  if (item.image) return [item.image]
  return []
}

function typeLabel(item: TimelineItem, lang: Lang): string {
  return t(timelineUi.typeLabels[item.type], lang)
}

function JourneyCard({
  item,
  index,
  total,
}: {
  item: TimelineItem
  index: number
  total: number
}) {
  const ref = useReveal()
  const { lang } = useLanguage()
  const Icon = typeIcons[item.type]
  const colorClass = typeColors[item.type]
  const showLink = Boolean(item.link && item.link !== '#')
  const urls = galleryUrls(item)
  const isLast = index === total - 1

  return (
    <div ref={ref} className="reveal relative flex gap-0" style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="relative flex w-14 sm:w-20 shrink-0 flex-col items-center">
        {!isLast && (
          <div
            className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyber/45 via-white/12 to-white/[0.04]"
            aria-hidden
          />
        )}
        <div
          className={`relative z-[1] mt-6 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl ${colorClass}`}
        >
          <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 opacity-90" />
        </div>
      </div>

      <div className="min-w-0 flex-1 pb-14 pl-2 sm:pl-4">
        <div className="glass-card glass-card-strong rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span
                className={`inline-block text-[10px] font-mono tracking-[0.15em] px-2.5 py-1 rounded-full border mb-2 ${colorClass}`}
              >
                {typeLabel(item, lang)}
              </span>
              <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">{t(item.title, lang)}</h3>
              {item.subtitle && <p className="text-white/40 text-sm mt-0.5">{t(item.subtitle, lang)}</p>}
            </div>
            <span className="text-[11px] font-mono text-white/25 shrink-0 mt-1">{t(item.displayDate, lang)}</span>
          </div>

          {urls.length > 0 && <MediaGallery urls={urls} variant="strip" />}

          <p className="text-white/40 text-sm leading-relaxed whitespace-pre-line">{t(item.description, lang)}</p>

          <div className="flex flex-wrap items-center gap-2">
            {item.tags?.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
            {showLink && item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1 text-xs text-cyber/60 hover:text-cyber transition-colors font-mono"
              >
                {t(timelineUi.viewLink, lang)} <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function JourneySection({ sectionKey, items }: { sectionKey: JourneySectionKey; items: TimelineItem[] }) {
  const { lang } = useLanguage()
  const meta = journeyUi.sections[sectionKey]

  if (!items.length) return null

  return (
    <section id={meta.id} className="py-24 sm:py-28 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(meta.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/25 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(meta.sectionTitle, lang)}</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-14"
          style={{ fontFamily: '"Space Grotesk", system-ui' }}
        >
          {t(meta.headline, lang)}
          <span className="text-cyber">.</span>
        </h2>

        <div className="relative">
          {items.map((item, i) => (
            <JourneyCard key={`${item.date}-${item.title.en}-${i}`} item={item} index={i} total={items.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
