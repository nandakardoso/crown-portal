'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ChevronLeft, ChevronRight, Download, X } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealWrapper } from '@/components/shared/RevealWrapper'
import { galleryPhotos } from '@/data/gallery'
import type { GalleryPhoto } from '@/types'

const CATEGORY_LABELS: Record<string, string> = {
  todos: 'Todos',
  abertura: 'Abertura',
  online: 'Online',
  networking: 'Networking',
  formatura: 'Formatura',
}

function PhotoEmptyState({ caption }: { caption: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-crown-dark3 border-2 border-dashed border-crown-gold/30 rounded-[10px]">
      <Camera size={32} className="text-crown-gold/40" />
      <span className="text-crown-gray3 text-sm">Em breve</span>
      {caption && (
        <span className="text-crown-gray3/60 text-xs text-center px-3 leading-tight">
          {caption}
        </span>
      )}
    </div>
  )
}

function PhotoCard({ photo, index, onClick }: { photo: GalleryPhoto; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.05 }}
      onClick={photo.src ? onClick : undefined}
      className={`relative overflow-hidden rounded-[10px] aspect-[4/3] bg-crown-dark3 ${photo.src ? 'cursor-pointer' : ''}`}
    >
      {photo.src ? (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="256px"
            className="object-cover transition-transform duration-[400ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-[280ms] flex items-end p-3">
            <span className="text-crown-white text-xs font-semibold leading-tight">
              {photo.caption}
            </span>
          </div>
        </>
      ) : (
        <PhotoEmptyState caption={photo.caption} />
      )}
    </motion.div>
  )
}

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: GalleryPhoto[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const photo = photos[index]

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-crown-dark2 rounded-[18px] overflow-hidden w-full max-w-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fechar */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <X size={16} />
          </button>

          {/* Imagem */}
          <div className="relative aspect-[4/3] w-full bg-crown-dark3">
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            ) : (
              <PhotoEmptyState caption={photo.caption} />
            )}

            {/* Setas navegação sobre a foto */}
            <button
              onClick={onPrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-crown-gold hover:text-crown-black transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNext}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-crown-gold hover:text-crown-black transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>

            {/* Contador */}
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70 bg-black/50 rounded-full px-3 py-1">
              {index + 1} / {photos.length}
            </span>
          </div>

          {/* Rodapé */}
          <div className="p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-serif text-base font-semibold text-crown-white">{photo.caption}</p>
              <p className="text-crown-gray3 text-sm mt-0.5 capitalize">
                {CATEGORY_LABELS[photo.category] ?? photo.category}
              </p>
            </div>
            {photo.src && (
              <a
                href={photo.src}
                download
                className="flex-shrink-0 flex items-center gap-1.5 bg-crown-gold/10 hover:bg-crown-gold hover:text-crown-black border border-crown-gold/30 text-crown-gold text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200"
              >
                <Download size={13} />
                Baixar
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function GaleriaSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollStrip(dir: 'left' | 'right') {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 560 : -560, behavior: 'smooth' })
  }

  const photosWithSrc = galleryPhotos.filter((p) => p.src)
  if (photosWithSrc.length === 0) return null

  const uniqueCategories = ['Todos', ...Array.from(new Set(galleryPhotos.map((p) => CATEGORY_LABELS[p.category] ?? p.category)))]

  const filtered =
    activeCategory === 'Todos'
      ? galleryPhotos
      : galleryPhotos.filter((p) => (CATEGORY_LABELS[p.category] ?? p.category) === activeCategory)

  const filteredWithSrc = filtered.filter((p) => p.src)

  const lightboxPhotos = filteredWithSrc
  const canOpen = lightboxIndex !== null && lightboxPhotos.length > 0

  function openLightbox(photo: GalleryPhoto) {
    const idx = lightboxPhotos.findIndex((p) => p.id === photo.id)
    if (idx >= 0) setLightboxIndex(idx)
  }

  function prevPhoto() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length)
  }

  function nextPhoto() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % lightboxPhotos.length)
  }

  return (
    <>
      <section id="galeria" className="bg-crown-dark2 py-20">
        <div className="max-w-content mx-auto px-7">
          <SectionHeader
            label="GALERIA"
            title="Momentos do programa"
            centered
          />

          {/* Category filter */}
          <RevealWrapper>
            <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filtrar galeria por categoria">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                  aria-pressed={activeCategory === cat}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-[280ms] ${
                    activeCategory === cat
                      ? 'bg-crown-gold text-crown-black border border-crown-gold'
                      : 'bg-transparent border border-white/20 text-crown-gray2 hover:border-crown-gold hover:text-crown-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealWrapper>

          {/* Photo strip */}
          {filteredWithSrc.length === 0 ? (
            <p className="text-center text-crown-gray3 text-sm py-12">
              Nenhuma foto disponível nesta categoria ainda.
            </p>
          ) : (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-crown-dark2 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-crown-dark2 to-transparent" />

              <button
                onClick={() => scrollStrip('left')}
                aria-label="Rolar para esquerda"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-crown-dark2 border border-crown-gold/40 text-crown-gold flex items-center justify-center hover:bg-crown-gold hover:text-crown-black transition-all duration-200 shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollStrip('right')}
                aria-label="Rolar para direita"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-crown-dark2 border border-crown-gold/40 text-crown-gold flex items-center justify-center hover:bg-crown-gold hover:text-crown-black transition-all duration-200 shadow-xl"
              >
                <ChevronRight size={24} />
              </button>

              <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide -mx-7 px-7"
              >
                <div className="flex gap-3" style={{ width: 'max-content' }}>
                  {filtered.map((photo, index) => (
                    <div key={photo.id} className="w-80 flex-shrink-0">
                      <PhotoCard photo={photo} index={index} onClick={() => openLightbox(photo)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {canOpen && (
        <Lightbox
          photos={lightboxPhotos}
          index={lightboxIndex!}
          onClose={() => setLightboxIndex(null)}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  )
}
