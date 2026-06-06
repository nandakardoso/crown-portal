'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealWrapper } from '@/components/shared/RevealWrapper'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
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

function PhotoCard({ photo, index }: { photo: GalleryPhoto; index: number }) {
  const isWide = index % 3 === 0

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.06 }}
          className={`relative overflow-hidden rounded-[10px] aspect-[4/3] bg-crown-dark3 cursor-pointer ${
            isWide ? 'col-span-2 md:col-span-2' : ''
          }`}
        >
          {photo.src ? (
            <>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
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
      </DialogTrigger>

      <DialogContent className="bg-crown-dark2 rounded-[18px] overflow-hidden p-0">
        <DialogTitle className="sr-only">{photo.alt}</DialogTitle>
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
        </div>
        <div className="p-5">
          <p className="font-serif text-base font-semibold text-crown-white">{photo.caption}</p>
          <p className="text-crown-gray3 text-sm mt-1 capitalize">{CATEGORY_LABELS[photo.category] ?? photo.category}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function GaleriaSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos')

  // Only render section if at least one photo has a real src
  const photosWithSrc = galleryPhotos.filter((p) => p.src)
  if (photosWithSrc.length === 0) return null

  const uniqueCategories = ['Todos', ...Array.from(new Set(galleryPhotos.map((p) => CATEGORY_LABELS[p.category] ?? p.category)))]

  const filtered =
    activeCategory === 'Todos'
      ? galleryPhotos
      : galleryPhotos.filter((p) => (CATEGORY_LABELS[p.category] ?? p.category) === activeCategory)

  const filteredWithSrc = filtered.filter((p) => p.src)

  return (
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
                onClick={() => setActiveCategory(cat)}
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

        {/* Photo grid or empty state */}
        {filteredWithSrc.length === 0 ? (
          <p className="text-center text-crown-gray3 text-sm py-12">
            Nenhuma foto disponível nesta categoria ainda.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filtered.map((photo, index) => (
              <PhotoCard key={photo.id} photo={photo} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
