import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { useImageLightbox } from '../context/ImageLightboxContext'

type Props = {
  urls: string[]
  variant?: 'hero' | 'strip'
  className?: string
}

/** 多图展示；可点击放大；单张加载失败则隐藏 */
export default function MediaGallery({ urls, variant = 'strip', className = '' }: Props) {
  const [failed, setFailed] = useState<Set<number>>(() => new Set())
  const { open } = useImageLightbox()

  const activeUrls = urls.filter((_, i) => !failed.has(i))
  if (!activeUrls.length) return null

  const isHero = variant === 'hero'

  const handleOpen = (clickedSrc: string) => {
    const idx = activeUrls.indexOf(clickedSrc)
    open(activeUrls, idx >= 0 ? idx : 0)
  }

  return (
    <div className={`shrink-0 ${isHero ? 'w-full sm:max-w-sm' : 'w-full'} ${className}`}>
      <div
        className={
          isHero
            ? 'flex flex-col gap-3'
            : 'flex flex-nowrap gap-3 overflow-x-auto pb-2 -mx-0.5 px-0.5 [scrollbar-width:thin]'
        }
      >
        {urls.map((src, i) => {
          if (failed.has(i)) return null
          return (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => handleOpen(src)}
              className={
                isHero
                  ? 'group relative w-full aspect-[4/3] sm:aspect-square max-h-72 rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber/50'
                  : 'group relative shrink-0 w-[11.5rem] h-[8.5rem] sm:w-[13rem] sm:h-[9.5rem] rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber/50'
              }
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                onError={() => setFailed((prev) => new Set(prev).add(i))}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/55 px-2 py-1 text-[10px] font-mono text-cyber/90 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3" />
                <span className="hidden sm:inline">Zoom</span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
