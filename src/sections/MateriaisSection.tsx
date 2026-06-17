'use client'

import { useState } from 'react'
import { ChevronRight, CheckCircle2, Star, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Target,
  Award,
  Monitor,
  CheckSquare,
  LayoutTemplate,
  Cpu,
  Images,
  CalendarDays,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { MateriaisDrawer } from '@/components/shared/MateriaisDrawer'
import { GravacoesDrawer } from '@/components/shared/GravacoesDrawer'
import { AgendaModal } from '@/components/shared/AgendaModal'
import { materials } from '@/data/materials'
import { galleryPhotos } from '@/data/gallery'
import { agendaItems as rawAgendaItems, resolveItem } from '@/data/agenda'
import type { Material } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Video,
  FileText,
  Users,
  CalendarDays,
  Target,
  Award,
  Monitor,
  CheckSquare,
  LayoutTemplate,
  Cpu,
  Images,
}

const TYPE_LABELS: Record<Material['type'], string> = {
  PDF: 'PDF',
  PPT: 'Apresentação',
  VIDEO: 'Vídeo',
  TEMPLATE: 'Template',
  IA: 'Inteligência Artificial',
}


function AgendaCard({ onOpen }: { onOpen: () => void }) {
  const today = new Date()
  const agendaItems = rawAgendaItems.map((r) => resolveItem(r, today))

  return (
    <motion.div
      variants={revealItem}
      onClick={onOpen}
      className="col-span-1 md:col-span-2 lg:col-span-3 cursor-pointer
                 bg-crown-dark3 rounded-[10px] border border-crown-border-dim
                 hover:border-crown-gold transition-all duration-[280ms] overflow-hidden"
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-crown-gold/10 border border-crown-gold/20
                          flex items-center justify-center flex-shrink-0">
            <CalendarDays size={18} className="text-crown-gold" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-crown-white leading-none">Agenda</h3>
            <p className="text-crown-gray3 text-xs mt-0.5">Cronograma dos encontros · EUA 20h | Brasil 21h</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-crown-gold text-sm font-semibold">
          <span>Ver completo</span>
          <ChevronRight size={15} />
        </div>
      </div>

      {/* Mini cronograma list */}
      <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-1">
        {agendaItems.map((item) => (
          <div
            key={item.date}
            className="flex items-center gap-2.5 py-2 border-b border-white/[0.04] last:border-0"
          >
            {/* Date */}
            <div className="flex-shrink-0 flex items-baseline gap-1 min-w-[68px]">
              <span className="text-crown-white font-bold text-sm font-sans">{item.day}</span>
              <span className="text-crown-gold text-xs font-semibold capitalize">{item.month}</span>
            </div>

            {/* Status / event */}
            <div className="flex-1 min-w-0">
              {item.concluded ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold
                                 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                                 rounded-full px-2 py-0.5">
                  <CheckCircle2 size={10} aria-hidden="true" />
                  Concluído
                </span>
              ) : item.displayEvent ? (
                <span className="text-crown-gray2 text-xs truncate flex items-center gap-1">
                  {item.special && <Star size={10} className="text-crown-gold fill-crown-gold/40 flex-shrink-0" aria-hidden="true" />}
                  {item.displayEvent}
                </span>
              ) : (
                <span aria-label="A definir">
                  <Clock size={12} className="text-crown-gray3" aria-hidden="true" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ── Normal material card ────────────────────────────────────────────────────

function MaterialCard({
  material,
  onClick,
  photoCount,
}: {
  material: Material
  onClick?: () => void
  photoCount?: number
}) {
  const IconComponent = iconMap[material.icon] ?? FileText
  const isClickable = !!onClick || !!material.href

  const inner = (
    <>
      <div className="w-10 h-10 rounded-lg bg-crown-rose/[0.06] border border-crown-rose-ink/30 flex items-center justify-center mb-4 flex-shrink-0">
        <IconComponent size={18} className="text-crown-rose2" />
      </div>
      <h3 className="font-serif text-base font-bold text-crown-white mb-1 leading-snug">
        {material.title}
      </h3>
      <p className="text-crown-gray2 text-sm leading-relaxed mb-3 flex-1">
        {material.description}
      </p>
      {material.files && material.files.length > 0 ? (
        <div className="flex items-center gap-1.5 mt-1 text-crown-gold text-sm font-semibold">
          <span>Ver arquivos disponíveis</span>
          <ChevronRight size={15} />
        </div>
      ) : material.href ? (
        <div className="flex items-center gap-1.5 mt-1 text-crown-gold text-sm font-semibold">
          <span>{photoCount != null ? `${photoCount} fotos disponíveis` : 'Ver fotos'}</span>
          <ChevronRight size={15} />
        </div>
      ) : (
        <span className="text-xs font-semibold bg-crown-gold/10 border border-crown-gold/20 text-crown-gold rounded-full px-3 py-1 inline-block self-start">
          {TYPE_LABELS[material.type] ?? material.type}
        </span>
      )}
    </>
  )

  const className = `bg-crown-dark3 rounded-[10px] p-6 border border-crown-border-dim hover:border-crown-gold transition-all duration-[280ms] flex flex-col ${isClickable ? 'cursor-pointer' : ''}`

  if (material.href && !material.href.startsWith('#')) {
    return (
      <motion.a
        variants={revealItem}
        href={material.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </motion.a>
    )
  }

  if (material.id === 'galeria-fotos') {
    return (
      <motion.div
        variants={revealItem}
        onClick={() => {
          document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })
          setTimeout(() => window.dispatchEvent(new CustomEvent('open-galeria-lightbox')), 400)
        }}
        className={className}
      >
        {inner}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={revealItem}
      onClick={onClick}
      className={className}
    >
      {inner}
    </motion.div>
  )
}

// ── Section ─────────────────────────────────────────────────────────────────

export function MateriaisSection() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [gravacoesOpen, setGravacoesOpen] = useState(false)
  const [agendaOpen, setAgendaOpen] = useState(false)

  const gravacoesMaterial = materials.find((m) => m.id === 'gravacoes')
  const gravacoesFiles = gravacoesMaterial?.files ?? []

  const normalMaterials = materials.filter((m) => m.id !== 'agenda')

  function handleCardClick(material: Material) {
    if (!material.files?.length) return
    if (material.id === 'gravacoes') {
      setGravacoesOpen(true)
    } else {
      setDrawerOpen(true)
    }
  }

  return (
    <section id="materiais" className="bg-crown-dark2 py-20">
      <div className="max-w-content mx-auto px-7">
        <SectionHeader
          title="O que você recebe"
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {normalMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onClick={material.files?.length ? () => handleCardClick(material) : undefined}
              photoCount={material.id === 'galeria-fotos' ? galleryPhotos.length : undefined}
            />
          ))}
          <AgendaCard onOpen={() => setAgendaOpen(true)} />
        </RevealStagger>
      </div>

      <MateriaisDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <GravacoesDrawer open={gravacoesOpen} onOpenChange={setGravacoesOpen} recordings={gravacoesFiles} />
      <AgendaModal open={agendaOpen} onOpenChange={setAgendaOpen} />
    </section>
  )
}
