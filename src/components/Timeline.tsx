import type { ElementType } from 'react'
import { Briefcase, Award, FolderOpen, GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react'
import { timelineItems, type TimelineItem } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { timelineUi } from '../i18n/ui'
import MediaGallery from './MediaGallery'

const typeIcons: Record<TimelineItem['type'], ElementType> = {
  work: Briefcase,
  cert: ShieldCheck,
  award: Award,
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

function timelineGalleryUrls(item: TimelineItem): string[] {
  if (item.images?.length) return item.images
  if (item.image) return [item.image]
  return []
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useReveal()
  const { lang } = useLanguage()
  const Icon = typeIcons[item.type]
  const colorClass = typeColors[item.type]
  const showLink = Boolean(item.link && item.link !== '#')
  const galleryUrls = timelineGalleryUrls(item)

  return (
    <div ref={ref} className="reveal relative flex gap-6 group" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${colorClass} transition-transform group-hover:scale-110`}
        >
          <Icon className="w-4 h-4" />
        </div>
        {index < timelineItems.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-3" />
        )}
      </div>

      <div className="glass-card rounded-xl p-6 mb-8 flex-1 flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <span
              className={`inline-block text-[10px] font-mono tracking-[0.15em] px-2 py-0.5 rounded-full border mb-2 ${colorClass}`}
            >
              {t(timelineUi.typeLabels[item.type], lang)}
            </span>
            <h3 className="text-white font-semibold text-base leading-snug">{t(item.title, lang)}</h3>
            {item.subtitle && <p className="text-white/40 text-sm mt-0.5">{t(item.subtitle, lang)}</p>}
          </div>
          <span className="text-[11px] font-mono text-white/25 shrink-0 mt-1">{t(item.displayDate, lang)}</span>
        </div>

        {galleryUrls.length > 0 && <MediaGallery urls={galleryUrls} variant="strip" />}

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
  )
}

export default function Timeline() {
  const { lang } = useLanguage()

  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(timelineUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(timelineUi.sectionTitle, lang)}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Space Grotesk", system-ui' }}>
          {t(timelineUi.headline, lang)}
          <span className="text-cyber">.</span>
        </h2>
        <p className="text-white/40 text-sm mb-16 max-w-lg">{t(timelineUi.sub, lang)}</p>

        <div>
          {timelineItems.map((item, i) => (
            <TimelineCard key={`${item.date}-${item.title.en}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
