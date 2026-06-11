'use client'

import Image from 'next/image'
import { CheckCircle2, Clock, Star } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { agendaItems, resolveItem } from '@/data/agenda'

interface AgendaModalProps {
  open: boolean
  onOpenChange: (v: boolean) => void
}

export function AgendaModal({ open, onOpenChange }: AgendaModalProps) {
  const today = new Date()
  const items = agendaItems.map((r) => resolveItem(r, today))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-0 bg-transparent shadow-none overflow-visible">
        <DialogTitle className="sr-only">Cronograma dos próximos encontros</DialogTitle>

        <div className="relative rounded-2xl overflow-hidden bg-crown-dark border border-crown-border">
          {/* Top rose glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: 'oklch(48% 0.20 12 / 0.18)' }}
          />

          <div className="relative px-7 py-8">
            {/* Logo + título */}
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
              <div className="mt-4 flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5">
                <Clock size={12} className="text-crown-gold" aria-hidden="true" />
                <span className="text-crown-gray2 text-xs font-medium">
                  EUA 20h&nbsp;|&nbsp;Brasil 21h
                </span>
              </div>
            </div>

            <div className="h-px bg-crown-border mb-6" />

            {/* Lista */}
            <div className="relative">
              <div
                className="absolute left-[19px] top-3 bottom-3 w-px pointer-events-none"
                aria-hidden="true"
                style={{ background: 'linear-gradient(to bottom, oklch(48% 0.20 12 / 0.6), oklch(48% 0.20 12 / 0.1))' }}
              />

              <div className="flex flex-col">
                {items.map((item) => (
                  <div key={item.date} className="flex items-center gap-4 py-2.5 pl-1">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-[38px] flex items-center justify-center">
                      {item.concluded ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-emerald-400" aria-hidden="true" />
                        </div>
                      ) : item.special ? (
                        <div className="w-5 h-5 rounded-full bg-crown-gold/15 border border-crown-gold/40 flex items-center justify-center">
                          <Star size={10} className="text-crown-gold fill-crown-gold/60" aria-hidden="true" />
                        </div>
                      ) : (
                        <div
                          className="w-3 h-3 rounded-full bg-crown-rose border-2 border-crown-rose2/50"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Data */}
                    <div className="flex items-baseline gap-1.5 w-28 flex-shrink-0">
                      <span className="font-sans font-bold text-base text-crown-white">{item.day}</span>
                      <span className="text-crown-gold text-sm font-semibold">{item.month}</span>
                    </div>

                    <div className="w-px h-4 bg-white/10 flex-shrink-0" aria-hidden="true" />

                    {/* Evento / status */}
                    <div className="flex-1">
                      {item.concluded ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-2.5 py-0.5">
                          <CheckCircle2 size={10} aria-hidden="true" />
                          Concluído
                        </span>
                      ) : item.displayEvent ? (
                        <span className="text-crown-gray1 text-sm font-medium">{item.displayEvent}</span>
                      ) : (
                        <span className="sr-only">A definir</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-crown-border mt-6 mb-4" />

            <div className="flex justify-center">
              <div className="relative w-10 h-10 opacity-25" aria-hidden="true">
                <Image src="/images/crown-logo.png" alt="" fill className="object-contain" sizes="40px" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
