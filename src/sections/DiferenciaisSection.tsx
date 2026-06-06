'use client'

import {
  Users, Star, Heart, Clock, Zap, Award
} from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealWrapper, RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { differentials } from '@/data/differentials'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = { Users, Star, Heart, Clock, Zap, Award }

export function DiferenciaisSection() {
  return (
    <section id="diferenciais" aria-labelledby="dif-title" className="py-20 bg-crown-dark">
      <div className="max-w-content mx-auto px-7">
        <RevealWrapper>
          <SectionHeader
            label="Por que a Crown é diferente"
            title="Uma Experiência de Transformação e Conexão"
            subtitle="Diferenciais que fazem a Crown ser única no mercado."
            titleAs="h2"
          />
        </RevealWrapper>

        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {differentials.map(d => {
            const Icon = ICONS[d.icon] ?? Star
            return (
              <motion.div
                key={d.id}
                variants={revealItem}
                className={cn(
                  'p-7 rounded-sm border transition-colors duration-[280ms]',
                  d.highlight
                    ? 'bg-crown-gold/5 border-crown-gold/18 hover:border-crown-gold/35'
                    : 'bg-crown-dark2 border-white/5 hover:border-crown-gold/18'
                )}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-[10px] flex items-center justify-center mb-[18px] border',
                    d.highlight
                      ? 'bg-crown-gold/8 border-crown-gold/30'
                      : 'bg-crown-rose/6 border-crown-rose2/28'
                  )}
                  aria-hidden="true"
                >
                  <Icon
                    className={cn('w-5 h-5', d.highlight ? 'text-crown-gold' : 'text-crown-rose2')}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={cn(
                    'font-sans font-bold text-[0.95rem] mb-2',
                    d.highlight ? 'text-crown-gold' : 'text-crown-white'
                  )}
                >
                  {d.title}
                </h3>
                <p className="font-sans text-[0.83rem] text-crown-gray3 leading-[1.65]">{d.description}</p>
              </motion.div>
            )
          })}
        </RevealStagger>

        <RevealWrapper delay={0.2} className="mt-10">
          <blockquote className="px-7 py-5 bg-crown-rose/7 border border-crown-rose/20 rounded-sm">
            <p className="font-sans text-[0.93rem] font-semibold italic text-crown-gray1">
              Você não crescerá apenas pelo que aprenderá. Crescerá também por quem estará ao seu lado.
            </p>
          </blockquote>
        </RevealWrapper>
      </div>
    </section>
  )
}
