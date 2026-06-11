'use client'

import Image from 'next/image'
import { CheckCircle2, Clock, Star } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

const TODAY = new Date('2026-06-11')

function parseDate(s: string) {
  const [d, m, y] = s.split('/').map(Number)
  return new Date(y, m - 1, d)
}

const rawItems = [
  { date: '30/05/2026', day: '30', month: 'Maio',   event: 'Abertura da Mentoria', special: true },
  { date: '08/06/2026', day: '08', month: 'Junho',  event: null },
  { date: '15/06/2026', day: '15', month: 'Junho',  event: null },
  { date: '22/06/2026', day: '22', month: 'Junho',  event: null },
  { date: '13/07/2026', day: '13', month: 'Julho',  event: null },
  { date: '20/07/2026', day: '20', month: 'Julho',  event: null },
  { date: '27/07/2026', day: '27', month: 'Julho',  event: null },
  { date: '03/08/2026', day: '03', month: 'Agosto', event: null },
  { date: '10/08/2026', day: '10', month: 'Agosto', event: null },
  { date: '22/08/2026', day: '22', month: 'Agosto', event: 'Entrega do Certificado · horário a definir', special: true },
]

const items = rawItems.map((r) => ({
  ...r,
  concluded: parseDate(r.date) < TODAY,
}))

interface AgendaModalProps {
  open: boolean
  onOpenChange: (v: boolean) => void
}

export function AgendaModal({ open, onOpenChange }: AgendaModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-0 bg-transparent shadow-none overflow-visible">
        <DialogTitle className="sr-only">Cronograma dos próximos encontros</DialogTitle>

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, oklch(11% 0.006 12) 0%, oklch(8% 0.005 12) 100%)',
            border: '1px solid oklch(72% 0.14 82 / 0.2)',
            boxShadow: '0 32px 80px oklch(0% 0 0 / 0.7), 0 0 0 1px oklch(72% 0.14 82 / 0.08)',
          }}
        >
          {/* Top rose glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl"
               style={{ background: 'oklch(48% 0.20 12 / 0.18)' }} />

          {/* Content */}
          <div className="relative px-7 py-8">

            {/* Logo + title */}
            <div className="flex flex-col items-center mb-7">
              <div className="relative w-14 h-14 mb-3">
                <Image src="/images/crown-logo.png" alt="Crown" fill className="object-contain" sizes="56px" />
              </div>

              <p className="text-[10px] tracking-[0.28em] font-bold text-crown-gold uppercase mb-1">
                Cronograma
              </p>
              <h2 className="font-serif text-2xl font-bold text-crown-white leading-none mb-1">
                Crown
              </h2>
              <p className="text-[11px] tracking-[0.18em] text-crown-gray3 uppercase">
                dos próximos encontros
              </p>

              {/* Horário pill */}
              <div className="mt-4 flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5">
                <Clock size={12} className="text-crown-gold" />
                <span className="text-crown-gray2 text-xs font-medium">
                  Horário: EUA 20h &nbsp;|&nbsp; Brasil 21h
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold/20 to-transparent mb-6" />

            {/* List */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px"
                   style={{ background: 'linear-gradient(to bottom, oklch(48% 0.20 12 / 0.6), oklch(48% 0.20 12 / 0.1))' }} />

              <div className="flex flex-col gap-0">
                {items.map((item, i) => (
                  <div key={item.date} className="flex items-center gap-4 py-2.5 pl-1">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-[38px] flex items-center justify-center">
                      {item.concluded ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-emerald-400" />
                        </div>
                      ) : item.special ? (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center"
                             style={{ background: 'oklch(72% 0.14 82 / 0.15)', border: '1px solid oklch(72% 0.14 82 / 0.4)' }}>
                          <Star size={10} className="text-crown-gold fill-crown-gold/60" />
                        </div>
                      ) : (
                        <div className="w-3 h-3 rounded-full"
                             style={{ background: 'oklch(48% 0.20 12)', border: '2px solid oklch(58% 0.21 12 / 0.5)' }} />
                      )}
                    </div>

                    {/* Date */}
                    <div className="flex items-baseline gap-1.5 w-28 flex-shrink-0">
                      <span className="font-serif font-bold text-base text-crown-white">{item.day}</span>
                      <span className="text-crown-gold text-sm font-semibold">{item.month}</span>
                    </div>

                    {/* Separator */}
                    <div className="w-px h-4 bg-white/10 flex-shrink-0" />

                    {/* Event / status */}
                    <div className="flex-1">
                      {item.concluded ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                                         bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                                         rounded-full px-2.5 py-0.5">
                          <CheckCircle2 size={10} />
                          Concluído
                        </span>
                      ) : item.event ? (
                        <span className="text-crown-gray1 text-sm font-medium">{item.event}</span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold/20 to-transparent mt-6 mb-4" />

            {/* Footer */}
            <div className="flex justify-center">
              <div className="relative w-10 h-10 opacity-30">
                <Image src="/images/crown-logo.png" alt="Crown" fill className="object-contain" sizes="40px" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
