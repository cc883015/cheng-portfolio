import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Upload, Trash2, GripVertical, Download, Home, ImageIcon } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../i18n/utils'
import { certificatesPageUi } from '../i18n/ui'
import {
  loadUserCertificates,
  saveUserCertificates,
  exportCertificatesJson,
  type UserCertificate,
} from '../lib/userCertificates'
import { useImageLightbox } from '../context/ImageLightboxContext'

const MAX_FILE_MB = 2.5
const MAX_ITEMS = 30

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(String(r.result))
    r.onerror = () => reject(new Error('read failed'))
    r.readAsDataURL(file)
  })
}

export default function CertificatesPage() {
  const { lang } = useLanguage()
  const { open } = useImageLightbox()
  const [items, setItems] = useState<UserCertificate[]>(() => loadUserCertificates())
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [dropIndex, setDropIndex] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const persist = useCallback((next: UserCertificate[]) => {
    setItems(next)
    saveUserCertificates(next)
  }, [])

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return
    setError(null)
    const next = [...items]
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        setError(t(certificatesPageUi.errTooLarge, lang))
        continue
      }
      if (next.length >= MAX_ITEMS) {
        setError(t(certificatesPageUi.errMaxItems, lang))
        break
      }
      try {
        const src = await readFileAsDataUrl(file)
        next.push({
          id: crypto.randomUUID(),
          src,
          title: file.name.replace(/\.[^/.]+$/, ''),
          createdAt: Date.now(),
        })
      } catch {
        setError(t(certificatesPageUi.errRead, lang))
      }
    }
    persist(next)
  }

  const remove = (id: string) => {
    persist(items.filter((x) => x.id !== id))
  }

  const updateTitle = (id: string, title: string) => {
    persist(items.map((x) => (x.id === id ? { ...x, title } : x)))
  }

  const onDragStart = (i: number) => setDragIndex(i)
  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault()
    setDropIndex(i)
  }
  const onDragEnd = () => {
    setDragIndex(null)
    setDropIndex(null)
  }
  const onDrop = (targetIndex: number) => {
    if (dragIndex === null || dragIndex === targetIndex) {
      onDragEnd()
      return
    }
    const n = [...items]
    const [row] = n.splice(dragIndex, 1)
    n.splice(targetIndex, 0, row)
    persist(n)
    onDragEnd()
  }

  const exportJson = () => {
    const blob = new Blob([exportCertificatesJson(items)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'my-certificates-backup.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const allSrc = items.map((x) => x.src)

  return (
    <div className="noise scan-line min-h-screen">
      <Navbar variant="certificates" />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <p className="font-mono text-xs text-cyber/60 tracking-[0.25em] mb-4">
          {t(certificatesPageUi.kicker, lang)}
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: '"Space Grotesk", system-ui' }}
        >
          {t(certificatesPageUi.title, lang)}
        </h1>
        <p className="text-white/45 text-sm leading-relaxed max-w-2xl mb-10">
          {t(certificatesPageUi.intro, lang)}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-white/60 hover:text-cyber hover:border-cyber/30 transition-colors font-mono"
          >
            <Home className="w-4 h-4" />
            {t(certificatesPageUi.backHome, lang)}
          </Link>
          <button
            type="button"
            onClick={exportJson}
            disabled={!items.length}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-white/60 hover:text-cyber hover:border-cyber/30 transition-colors font-mono disabled:opacity-30"
          >
            <Download className="w-4 h-4" />
            {t(certificatesPageUi.exportJson, lang)}
          </button>
        </div>

        <label
          className="block glass-card rounded-xl border border-dashed border-cyber/25 p-10 text-center cursor-pointer hover:border-cyber/40 transition-colors mb-12"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            void onFiles(e.dataTransfer.files)
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              void onFiles(e.target.files)
              e.target.value = ''
            }}
          />
          <Upload className="w-10 h-10 text-cyber/60 mx-auto mb-3" />
          <span className="text-white/70 text-sm block mb-1">{t(certificatesPageUi.dropHint, lang)}</span>
          <span className="text-white/35 text-xs font-mono">
            {t(certificatesPageUi.limits, lang).replace('{mb}', String(MAX_FILE_MB)).replace('{n}', String(MAX_ITEMS))}
          </span>
        </label>

        {error && <p className="text-amber-400/90 text-sm mb-6 font-mono">{error}</p>}

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-white/30 border border-white/5 rounded-xl">
            <ImageIcon className="w-12 h-12 mb-3 opacity-40" />
            <p className="text-sm font-mono">{t(certificatesPageUi.empty, lang)}</p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <li
                key={item.id}
                onDragOver={(e) => onDragOver(e, i)}
                onDragLeave={() => setDropIndex(null)}
                onDragEnd={onDragEnd}
                onDrop={() => onDrop(i)}
                className={`glass-card rounded-xl overflow-hidden border transition-colors ${
                  dropIndex === i && dragIndex !== null ? 'border-cyber/40 bg-cyber/[0.04]' : 'border-white/8'
                }`}
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                  <div
                    draggable
                    onDragStart={(e) => {
                      onDragStart(i)
                      e.dataTransfer.effectAllowed = 'move'
                      e.dataTransfer.setData('text/plain', String(i))
                    }}
                    className="text-white/25 cursor-grab active:cursor-grabbing p-1 touch-none"
                    title="Drag to reorder"
                    role="presentation"
                  >
                    <GripVertical className="w-4 h-4" />
                  </div>
                  <input
                    value={item.title}
                    onChange={(e) => updateTitle(item.id, e.target.value)}
                    className="flex-1 bg-transparent text-xs font-mono text-white/70 outline-none placeholder:text-white/25"
                    placeholder={t(certificatesPageUi.titlePlaceholder, lang)}
                  />
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    className="p-1.5 rounded text-white/30 hover:text-red-400 transition-colors"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => open(allSrc, i)}
                  className="block w-full aspect-[4/3] bg-black/30 group"
                >
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-contain group-hover:opacity-95 transition-opacity"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}
