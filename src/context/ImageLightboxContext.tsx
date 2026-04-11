import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type LightboxState = { urls: string[]; index: number }

type Ctx = {
  open: (urls: string[], index: number) => void
  close: () => void
}

const ImageLightboxContext = createContext<Ctx | null>(null)

export function useImageLightbox() {
  const c = useContext(ImageLightboxContext)
  if (!c) throw new Error('useImageLightbox requires ImageLightboxProvider')
  return c
}

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null)

  const close = useCallback(() => setState(null), [])
  const open = useCallback((urls: string[], index: number) => {
    const clean = urls.filter(Boolean)
    if (!clean.length) return
    setState({ urls: clean, index: Math.min(Math.max(0, index), clean.length - 1) })
  }, [])

  const next = useCallback(() => {
    setState((s) =>
      s && s.urls.length > 1 ? { ...s, index: (s.index + 1) % s.urls.length } : s,
    )
  }, [])

  const prev = useCallback(() => {
    setState((s) =>
      s && s.urls.length > 1
        ? { ...s, index: (s.index - 1 + s.urls.length) % s.urls.length }
        : s,
    )
  }, [])

  useEffect(() => {
    if (!state) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [state, close, next, prev])

  return (
    <ImageLightboxContext.Provider value={{ open, close }}>
      {children}
      {state &&
        createPortal(
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/88 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 z-[10001] p-2 rounded-full glass-icon-btn text-white/70 hover:text-cyber"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {state.urls.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[10001] p-2 rounded-full glass-icon-btn text-white/70 hover:text-cyber"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[10001] p-2 rounded-full glass-icon-btn text-white/70 hover:text-cyber"
                  aria-label="Next"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
            <div
              className="relative max-w-[min(96vw,1400px)] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={state.urls[state.index]}
                alt=""
                className="max-h-[min(85vh,900px)] max-w-full w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              {state.urls.length > 1 && (
                <p className="mt-3 text-xs font-mono text-white/35">
                  {state.index + 1} / {state.urls.length}
                </p>
              )}
            </div>
          </div>,
          document.body,
        )}
    </ImageLightboxContext.Provider>
  )
}
