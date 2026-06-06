'use client'

import {
  Mic, BookOpen, User, Video, Globe, Layers, DollarSign, Users, Monitor
} from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealWrapper, RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { modules } from '@/data/modules'
import type { LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  Mic, BookOpen, User, Video, Globe, Layers, DollarSign, Users, Monitor,
}

export function ModulosSection() {
  return (
    <section id="modulos" aria-labelledby="modulos-title" className="py-24 bg-crown-dark2">
      <div className="max-w-content mx-auto px-7">
        <RevealWrapper>
          <SectionHeader
            titleAs="h2"
            title="9 Módulos de Alto Impacto"
          />
        </RevealWrapper>

        <RevealWrapper delay={0.1} className="mb-11">
          <p
            className="font-serif italic text-crown-gold opacity-85 leading-[1.6] max-w-2xl"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)' }}
          >
            Uma formação completa para mulheres que desejam comunicar-se no nível de sua ambição.
          </p>
        </RevealWrapper>

        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/[0.04] rounded-sm overflow-hidden"
          staggerDelay={0.06}
        >
          {modules.map(mod => {
            const Icon = ICONS[mod.icon] ?? Mic
            return (
              <motion.div
                key={mod.id}
                variants={revealItem}
                className="bg-crown-dark2 px-6 py-7 transition-colors duration-[280ms] hover:bg-crown-dark3"
              >
                <div className="w-[42px] h-[42px] rounded-full bg-crown-rose/12 flex items-center justify-center mb-4" aria-hidden="true">
                  <Icon className="w-[18px] h-[18px] text-crown-rose2" strokeWidth={1.8} />
                </div>
                <h3 className="font-sans font-bold text-[0.88rem] text-crown-gray1 leading-snug mb-2">
                  {mod.title}
                </h3>
                <p className="font-sans text-[0.78rem] text-crown-gray3 leading-[1.55]">{mod.description}</p>
              </motion.div>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
