import { ArrowUpRight, Mail } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { contactUi } from '../i18n/ui'
import SectionHeadline from './SectionHeadline'

export default function Contact() {
  const ref = useReveal()
  const { lang } = useLanguage()

  return (
    <section id="contact" className="py-32 px-6 scroll-mt-24">
      <div ref={ref} className="reveal max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <span className="font-mono text-xs text-cyber/60 tracking-[0.3em]">{t(contactUi.sectionNum, lang)}</span>
          <div className="h-px w-16 bg-gradient-to-r from-cyber/20 to-transparent" />
          <span className="font-mono text-xs text-white/30 tracking-[0.2em]">{t(contactUi.sectionTitle, lang)}</span>
          <div className="h-px w-16 bg-gradient-to-l from-cyber/20 to-transparent" />
        </div>

        <SectionHeadline Icon={Mail} variant="centered" className="mb-6">
          <>
            {t(contactUi.headline1, lang)}
            <br />
            <span className="text-cyber glow-text">{t(contactUi.headline2, lang)}</span>
          </>
        </SectionHeadline>

        <p className="text-white/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">{t(contactUi.body, lang)}</p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyber text-midnight-950 font-semibold text-sm hover:shadow-[0_0_30px_rgba(94,234,212,0.35)] transition-all duration-300 hover:scale-105 mb-8"
        >
          <Mail className="w-4 h-4" />
          {t(contactUi.cta, lang)}
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-20">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-white/30 hover:text-cyber transition-colors"
            >
              {link.platform}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20 font-mono">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-white/15 font-mono">{t(contactUi.footerTech, lang)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
