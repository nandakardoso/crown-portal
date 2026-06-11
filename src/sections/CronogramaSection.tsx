'use client'

import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, Star, Clock } from 'lucide-react'
import { RevealWrapper } from '@/components/shared/RevealWrapper'

interface CronogramaItem {
  date: string        // dd/mm/yyyy for comparison
  label: string       // display: "30 maio"
  month: string
  day: string
  event: string | null
  special?: boolean
  concluded?: boolean
}

const TODAY = new Date('2026-06-11')

function parseDate(dateStr: string): Date {
  const [d, m, y] = dateStr.split('/').map(Number)
  return new Date(y, m - 1, d)
}

const rawItems: Array<{
  date: string
  day: string
  month: string
  event: string | null
  special?: boolean
  blank?: boolean // if true, hide event name when future
}> = [
  { date: '30/05/2026', day: '30', month: 'maio',   event: 'Abertura da Mentoria',      special: true },
  { date: '08/06/2026', day: '08', month: 'junho',  event: null },
  { date: '15/06/2026', day: '15', month: 'junho',  event: 'Aula com Marcelo',           blank: true },
  { date: '22/06/2026', day: '22', month: 'junho',  event: null, blank: true },
  { date: '13/07/2026', day: '13', month: 'julho',  event: 'Encontro',                   blank: true },
  { date: '20/07/2026', day: '20', month: 'julho',  event: 'Aula com Cida',              blank: true },
  { date: '27/07/2026', day: '27', month: 'julho',  event: 'Encontro',                   blank: true },
  { date: '03/08/2026', day: '03', month: 'agosto', event: 'Aula com Cida',              blank: true },
  { date: '10/08/2026', day: '10', month: 'agosto', event: 'Encontro',                   blank: true },
  { date: '22/08/2026', day: '22', month: 'agosto', event: 'Entrega do Certificado',     special: true },
]

const items: CronogramaItem[] = rawItems.map((r) => {
  const d = parseDate(r.date)
  const isPast = d < TODAY
  return {
    date: r.date,
    label: `${r.day} ${r.month}`,
    day: r.day,
    month: r.month,
    special: r.special,
    concluded: isPast,
    event: isPast ? null : r.blank ? null : r.event,
  }
})

function CronogramaRow({ item, index }: { item: CronogramaItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center gap-4 py-3.5 px-5 rounded-xl
                 border border-white/[0.07] bg-white/[0.025]
                 hover:border-crown-gold/20 hover:bg-white/[0.04]
                 transition-all duration-300 group"
    >
      {/* Calendar icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-crown-gold/10 border border-crown-gold/20
                      flex items-center justify-center group-hover:bg-crown-gold/15 transition-colors duration-300">
        <CalendarDays size={18} className="text-crown-gold" />
      </div>

      {/* Date */}
      <div className="flex-shrink-0 w-24">
        <span className="text-crown-white font-serif font-bold text-base leading-none">
          {item.day}
        </span>
        <span className="text-crown-gold font-sans font-semibold text-sm ml-1.5 leading-none capitalize">
          {item.month}
        </span>
      </div>

      {/* Divider */}
      <div className="flex-shrink-0 w-px h-6 bg-white/10" />

      {/* Event name */}
      <div className="flex-1 min-w-0">
        {item.event ? (
          <span className="text-crown-gray1 text-sm font-medium">{item.event}</span>
        ) : null}
      </div>

      {/* Right badge */}
      <div className="flex-shrink-0 flex items-center gap-2">
        {item.concluded ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold
                           bg-emerald-500/10 border border-emerald-500/25 text-emerald-400
                           rounded-full px-3 py-1">
            <CheckCircle2 size={12} />
            Concluído
          </span>
        ) : item.special ? (
          <Star size={16} className="text-crown-gold fill-crown-gold/40" />
        ) : (
          <Clock size={14} className="text-crown-gray4" />
        )}
      </div>
    </motion.div>
  )
}

export function CronogramaSection() {
  return (
    <section id="cronograma" className="bg-crown-dark py-20">
      <div className="max-w-[700px] mx-auto px-7">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-crown-gold uppercase mb-3">
              CRONOGRAMA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-crown-white leading-tight">
              Próximos encontros
            </h2>
            <p className="mt-3 text-crown-gray2 text-sm">
              Horário: EUA 20h &nbsp;|&nbsp; Brasil 21h
            </p>
          </div>
        </RevealWrapper>

        {/* List */}
        <div className="flex flex-col gap-2.5">
          {items.map((item, i) => (
            <CronogramaRow key={item.date} item={item} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-crown-gray3 text-xs mt-8"
        >
          Nos vemos sempre às 20h (EUA) | 21h (Brasil)!
        </motion.p>
      </div>
    </section>
  )
}
