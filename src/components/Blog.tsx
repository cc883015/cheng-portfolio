import { BookOpen, ExternalLink } from 'lucide-react'
import { blogPosts } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { blogUi } from '../i18n/ui'
import SectionHeadline from './SectionHeadline'

export default function Blog() {
  const ref = useReveal()
  const { lang } = useLanguage()

  if (!blogPosts.length) return null

  return (
    <section id="blog" className="section-cv py-32 px-6 scroll-mt-24">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(blogUi.sectionNum, lang)}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(blogUi.sectionTitle, lang)}</span>
        </div>

        <SectionHeadline Icon={BookOpen} className="mb-14 sm:mb-16">
          <>
            {t(blogUi.headline, lang)}
            <span className="text-cyber">.</span>
          </>
        </SectionHeadline>

        <ul className="flex flex-col gap-5">
          {blogPosts.map((post, i) => (
            <li
              key={post.id}
              className="glass-card rounded-xl p-6 sm:p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {post.source && (
                      <span className="text-[10px] font-mono tracking-[0.2em] text-cyber/65 px-2 py-0.5 rounded-md border border-cyber/20 bg-cyber/5">
                        {t(post.source, lang)}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-white/30">{t(post.displayDate, lang)}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">{t(post.title, lang)}</h3>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-cyber/60 hover:text-cyber transition-colors"
                >
                  {t(blogUi.readPost, lang)}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{t(post.excerpt, lang)}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
