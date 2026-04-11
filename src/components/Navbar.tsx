import { useState, useEffect } from 'react'
import { Terminal, Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { navLabels } from '../i18n/ui'

const navKeys = [
  { key: 'about', hash: 'about' },
  { key: 'education', hash: 'education' },
  { key: 'awards', hash: 'awards' },
  { key: 'work', hash: 'work' },
  { key: 'projects', hash: 'projects' },
  { key: 'certifications', hash: 'certifications' },
  { key: 'skills', hash: 'skills' },
  { key: 'contact', hash: 'contact' },
] as const

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'nav-glass-scrolled border-b border-white/[0.07]'
          : 'nav-glass border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="glass-icon-btn w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-[1.02]">
            <Terminal className="w-4 h-4 text-cyber" />
          </div>
          <span className="font-mono text-sm text-white/75 group-hover:text-cyber transition-colors hidden sm:block tracking-wide">
            {t(navLabels.brandHome, lang)}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1.5 flex-wrap justify-end max-w-[58%] xl:max-w-none">
          {navKeys.map((item) => (
            <a
              key={item.hash}
              href={`#${item.hash}`}
              className="glass-nav-link text-[11px] xl:text-xs px-2.5 py-2 rounded-xl text-white/55 hover:text-cyber font-mono tracking-wide transition-colors"
            >
              {t(navLabels[item.key], lang)}
            </a>
          ))}
          <div className="glass-icon-btn flex items-center rounded-xl p-0.5 ml-1">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 text-[11px] font-mono rounded-lg transition-colors ${
                lang === 'en' ? 'bg-white/[0.12] text-cyber shadow-inner' : 'text-white/40 hover:text-white/75'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-2.5 py-1.5 text-[11px] font-mono rounded-lg transition-colors ${
                lang === 'zh' ? 'bg-white/[0.12] text-cyber shadow-inner' : 'text-white/40 hover:text-white/75'
              }`}
            >
              中文
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="glass-icon-btn flex items-center rounded-xl p-0.5">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-[10px] font-mono rounded-lg ${
                lang === 'en' ? 'bg-white/[0.12] text-cyber' : 'text-white/40'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-2 py-1 text-[10px] font-mono rounded-lg ${
                lang === 'zh' ? 'bg-white/[0.12] text-cyber' : 'text-white/40'
              }`}
            >
              中文
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="glass-icon-btn w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-cyber transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden nav-glass-scrolled border-b border-white/[0.07] px-6 pb-5 max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto overscroll-y-contain">
          {navKeys.map((item) => (
            <a
              key={item.hash}
              href={`#${item.hash}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-white/65 hover:text-cyber transition-colors font-mono border-b border-white/[0.06]"
            >
              {t(navLabels[item.key], lang)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
