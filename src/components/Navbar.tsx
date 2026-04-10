import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Terminal, Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { navLabels } from '../i18n/ui'

const navKeys = [
  { key: 'about', hash: 'about' },
  { key: 'updates', hash: 'updates' },
  { key: 'timeline', hash: 'timeline' },
  { key: 'skills', hash: 'skills' },
  { key: 'contact', hash: 'contact' },
] as const

type NavbarProps = {
  variant?: 'home' | 'certificates'
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const { lang, setLang } = useLanguage()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-900/85 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-md bg-cyber/10 border border-cyber/20 flex items-center justify-center group-hover:bg-cyber/20 transition-colors">
            <Terminal className="w-4 h-4 text-cyber" />
          </div>
          <span className="font-mono text-sm text-white/70 group-hover:text-cyber transition-colors hidden sm:block">
            charles.dev
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 flex-wrap justify-end">
          {variant === 'certificates' && (
            <Link
              to="/"
              className="text-sm text-white/50 hover:text-cyber transition-colors font-mono tracking-wide"
            >
              {t(navLabels.home, lang)}
            </Link>
          )}
          {variant === 'home' &&
            navKeys.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                className="text-sm text-white/50 hover:text-cyber transition-colors font-mono tracking-wide"
              >
                {t(navLabels[item.key], lang)}
              </a>
            ))}
          <Link
            to="/certificates"
            className={`text-sm font-mono tracking-wide transition-colors ${
              variant === 'certificates' ? 'text-cyber' : 'text-white/50 hover:text-cyber'
            }`}
          >
            {t(navLabels.certVault, lang)}
          </Link>
          {variant === 'home' && (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="text-sm px-4 py-1.5 rounded-full border border-cyber/30 text-cyber hover:bg-cyber/10 transition-all font-mono"
            >
              {t(navLabels.resume, lang)}
            </a>
          )}
          <div className="flex items-center rounded-full border border-white/10 p-0.5 bg-white/[0.03]">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${
                lang === 'en' ? 'bg-cyber/20 text-cyber' : 'text-white/40 hover:text-white/70'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${
                lang === 'zh' ? 'bg-cyber/20 text-cyber' : 'text-white/40 hover:text-white/70'
              }`}
            >
              中文
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-full border border-white/10 p-0.5 bg-white/[0.03]">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-full ${
                lang === 'en' ? 'bg-cyber/20 text-cyber' : 'text-white/40'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-full ${
                lang === 'zh' ? 'bg-cyber/20 text-cyber' : 'text-white/40'
              }`}
            >
              中文
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/60 hover:text-cyber transition-colors p-1"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-midnight-900/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
          {variant === 'certificates' && (
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-white/60 hover:text-cyber transition-colors font-mono border-b border-white/5"
            >
              {t(navLabels.home, lang)}
            </Link>
          )}
          {variant === 'home' &&
            navKeys.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm text-white/60 hover:text-cyber transition-colors font-mono border-b border-white/5"
              >
                {t(navLabels[item.key], lang)}
              </a>
            ))}
          <Link
            to="/certificates"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm text-cyber font-mono border-b border-white/5"
          >
            {t(navLabels.certVault, lang)}
          </Link>
          {variant === 'home' && (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-white/60 hover:text-cyber font-mono"
            >
              {t(navLabels.resume, lang)}
            </a>
          )}
        </div>
      )}
    </nav>
  )
}
