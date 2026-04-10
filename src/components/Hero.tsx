import { useState } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'
import { profile } from '../data/portfolio'
import SocialIcons from './SocialIcons'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { heroUi } from '../i18n/ui'

export default function Hero() {
  const { lang } = useLanguage()
  const [photoOk, setPhotoOk] = useState(true)
  const nameParts = profile.name.trim().split(/\s+/)
  const firstName = nameParts[0] ?? profile.name
  const restName = nameParts.slice(1).join(' ')
  const initials = nameParts.map((p) => p[0]?.toUpperCase() ?? '').join('') || '?'

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyber/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-14">
        <div className="shrink-0 animate-fade-in">
          {photoOk ? (
            <img
              src={profile.avatar}
              alt=""
              width={176}
              height={176}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-midnight-700 to-midnight-800 border border-white/10 flex items-center justify-center font-mono text-cyber text-3xl sm:text-4xl font-bold tracking-tight"
              aria-hidden
            >
              {initials}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber/20 bg-cyber/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyber glow-dot animate-pulse" />
            <span className="text-xs font-mono text-cyber/80 tracking-wider">{t(heroUi.badge, lang)}</span>
          </div>

          <div className="mb-6 animate-slide-up stagger-1">
            <span className="font-mono text-sm text-white/30">{t(heroUi.greeting, lang)}</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2 animate-slide-up stagger-2"
            style={{ fontFamily: '"Space Grotesk", system-ui' }}
          >
            <span className="text-white">{firstName} </span>
            {restName ? <span className="text-cyber glow-text">{restName}</span> : null}
          </h1>

          {profile.nickname ? (
            <p className="font-mono text-white/30 text-sm mb-6 animate-slide-up stagger-3">
              {t(heroUi.aka, lang)} <span className="text-white/50">{profile.nickname}</span>
            </p>
          ) : (
            <div className="mb-2 animate-slide-up stagger-3" />
          )}

          <p
            className="text-lg sm:text-xl text-white/60 mb-4 animate-slide-up stagger-4 max-w-xl"
            style={{ fontFamily: '"DM Sans", system-ui' }}
          >
            {t(profile.title, lang)}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-1.5 text-white/30 mb-10 animate-slide-up stagger-5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="text-sm font-mono">{t(profile.location, lang)}</span>
          </div>

          <div className="animate-slide-up stagger-6">
            <SocialIcons />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="text-[10px] font-mono text-white/20 tracking-[0.3em]">{t(heroUi.scroll, lang)}</span>
        <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
      </div>
    </section>
  )
}
