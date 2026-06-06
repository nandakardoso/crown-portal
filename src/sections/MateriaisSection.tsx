'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
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
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { MateriaisDrawer } from '@/components/shared/MateriaisDrawer'
import { GravacoesDrawer } from '@/components/shared/GravacoesDrawer'
import { materials } from '@/data/materials'
import type { Material } from '@/types'

const iconMap: Record<string, React.ElementType> = {
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
}

const TYPE_LABELS: Record<Material['type'], string> = {
  PDF: 'PDF',
  PPT: 'Apresentação',
  VIDEO: 'Vídeo',
  TEMPLATE: 'Template',
  IA: 'Inteligência Artificial',
}

function MaterialCard({
  material,
  onClick,
}: {
  material: Material
  onClick?: () => void
}) {
  const IconComponent = iconMap[material.icon] ?? FileText
  const isClickable = !!onClick || !!material.href

  const inner = (
    <>
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-crown-rose/[0.06] border border-crown-rose-ink/30 flex items-center justify-center mb-4 flex-shrink-0">
        <IconComponent size={18} className="text-crown-rose2" />
      </div>

      {/* Name */}
      <h3 className="font-serif text-base font-bold text-crown-white mb-1 leading-snug">
        {material.title}
      </h3>

      {/* Description */}
      <p className="text-crown-gray2 text-sm leading-relaxed mb-3 flex-1">
        {material.description}
      </p>

      {/* Footer */}
      {material.files && material.files.length > 0 ? (
        <div className="flex items-center gap-1.5 mt-1 text-crown-gold text-sm font-semibold">
          <span>{material.files.length} arquivos disponíveis</span>
          <ChevronRight size={15} />
        </div>
      ) : material.href ? (
        <div className="flex items-center gap-1.5 mt-1 text-crown-gold text-sm font-semibold">
          <span>Ver fotos</span>
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

  if (material.href) {
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

export function MateriaisSection() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [gravacoesOpen, setGravacoesOpen] = useState(false)

  const gravacoesMaterial = materials.find((m) => m.id === 'gravacoes')
  const gravacoesFiles = gravacoesMaterial?.files ?? []

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
          label="MATERIAIS"
          title="O que você recebe"
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {materials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onClick={material.files?.length ? () => handleCardClick(material) : undefined}
            />
          ))}
        </RevealStagger>
      </div>

      <MateriaisDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <GravacoesDrawer open={gravacoesOpen} onOpenChange={setGravacoesOpen} recordings={gravacoesFiles} />
    </section>
  )
}
