import type { ElementType } from 'react'
import { Linkedin, BookOpen, Github, ExternalLink } from 'lucide-react'
import { socialLinks } from '../data/portfolio'

const iconMap: Record<string, ElementType> = {
  Linkedin,
  BookOpen,
  Github,
  ExternalLink,
}

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || ExternalLink
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.platform}
            className="group relative w-11 h-11 rounded-xl border border-white/8 bg-white/[0.02] flex items-center justify-center hover:border-cyber/30 hover:bg-cyber/5 transition-all duration-300"
          >
            <Icon className="w-4.5 h-4.5 text-white/40 group-hover:text-cyber transition-colors" />
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/0 group-hover:text-white/50 transition-all whitespace-nowrap">
              {link.platform}
            </span>
          </a>
        )
      })}
    </div>
  )
}
