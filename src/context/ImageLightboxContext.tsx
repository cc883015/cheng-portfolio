import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface LightboxState {
  isOpen: boolean
  images: string[]
  currentIndex: number
  alt: string
}

interface LightboxContextType {
  lightbox: LightboxState
  open: (srcOrArray: string | string[], indexOrAlt?: number | string) => void
  openLightbox: (srcOrArray: string | string[], indexOrAlt?: number | string) => void
  closeLightbox: () => void
}

const ImageLightboxContext = createContext<LightboxContextType | null>(null)

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    alt: '',
  })

  const open = useCallback((srcOrArray: string | string[], indexOrAlt?: number | string) => {
    if (Array.isArray(srcOrArray)) {
      setLightbox({
        isOpen: true,
        images: srcOrArray,
        currentIndex: typeof indexOrAlt === 'number' ? indexOrAlt : 0,
        alt: '',
      })
    } else {
      setLightbox({
        isOpen: true,
        images: [srcOrArray],
        currentIndex: 0,
        alt: typeof indexOrAlt === 'string' ? indexOrAlt : '',
      })
    }
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0, alt: '' })
  }, [])

  const prev = () => setLightbox(s => ({ ...s, currentIndex: Math.max(0, s.currentIndex - 1) }))
  const next = () => setLightbox(s => ({ ...s, currentIndex: Math.min(s.images.length - 1, s.currentIndex + 1) }))

  return (
    <ImageLightboxContext.Provider value={{ lightbox, open, openLightbox: open, closeLightbox }}>
      {children}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {lightbox.images.length > 1 && lightbox.currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
            >
              ‹
            </button>
          )}
          <img
            src={lightbox.images[lightbox.currentIndex]}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox.images.length > 1 && lightbox.currentIndex < lightbox.images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
            >
              ›
            </button>
          )}
          {lightbox.images.length > 1 && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </span>
          )}
        </div>
      )}
    </ImageLightboxContext.Provider>
  )
}

export function useImageLightbox() {
  const ctx = useContext(ImageLightboxContext)
  if (!ctx) throw new Error('useImageLightbox must be used within ImageLightboxProvider')
  return ctx
}