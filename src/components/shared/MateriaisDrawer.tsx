'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X, Download, FileText, Presentation, Video, LayoutTemplate } from 'lucide-react'
import { cn } from '@/lib/utils'
import { eventsMaterials } from '@/data/events-materials'
import type { EventMaterialFile } from '@/data/events-materials'

const TYPE_ICON: Record<EventMaterialFile['type'], React.ElementType> = {
  PDF: FileText,
  PPT: Presentation,
  VIDEO: Video,
  TEMPLATE: LayoutTemplate,
}

const TYPE_LABEL: Record<EventMaterialFile['type'], string> = {
  PDF: 'PDF',
  PPT: 'Apresentação',
  VIDEO: 'Vídeo',
  TEMPLATE: 'Template',
}

interface MateriaisDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MateriaisDrawer({ open, onOpenChange }: MateriaisDrawerProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm data-[state=open]:animate-fadeIn" />

        {/* Panel */}
        <DialogPrimitive.Content
          className={cn(
            'fixed right-0 top-0 z-50 h-full w-full max-w-[480px]',
            'bg-crown-dark border-l border-white/[0.06]',
            'flex flex-col',
            'data-[state=open]:animate-[slideInRight_0.32s_cubic-bezier(0.22,1,0.36,1)]',
            'focus:outline-none'
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
            <div>
              <DialogPrimitive.Title className="font-serif text-xl font-bold text-crown-white">
                Materiais de Apoio
              </DialogPrimitive.Title>
              <p className="text-crown-gray3 text-sm mt-0.5">
                Documentos organizados por encontro
              </p>
            </div>
            <DialogPrimitive.Close className="w-10 h-10 flex items-center justify-center text-crown-gray3 hover:text-crown-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </DialogPrimitive.Close>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {eventsMaterials.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                <FileText size={32} className="text-crown-gray4" />
                <p className="text-crown-gray3 text-sm">Nenhum material disponível ainda.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {eventsMaterials.map((event) => (
                  <div key={event.id}>
                    {/* Event header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex flex-col">
                        <span className="text-crown-gold text-xs font-semibold tracking-[0.1em] uppercase">
                          {event.label}
                        </span>
                        <span className="text-crown-white font-serif font-bold text-lg leading-tight">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-crown-gold/20 ml-2" />
                    </div>

                    {/* Files */}
                    <ul className="flex flex-col gap-2">
                      {event.materials.map((file) => {
                        const Icon = TYPE_ICON[file.type] ?? FileText
                        return (
                          <li key={file.href}>
                            <a
                              href={file.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 bg-crown-dark2 border border-crown-border-dim hover:border-crown-gold rounded-[10px] px-5 py-4 transition-all duration-[280ms] group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-crown-rose/[0.08] border border-crown-rose-ink/30 flex items-center justify-center flex-shrink-0 group-hover:bg-crown-gold/10 group-hover:border-crown-gold/30 transition-all duration-[280ms]">
                                <Icon size={16} className="text-crown-rose2 group-hover:text-crown-gold transition-colors duration-[280ms]" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <p className="text-crown-gray1 text-sm font-medium group-hover:text-crown-white transition-colors leading-snug truncate">
                                  {file.name}
                                </p>
                                <span className="text-crown-gray3 text-xs mt-0.5 inline-block">
                                  {TYPE_LABEL[file.type]}
                                </span>
                              </div>

                              <Download
                                size={15}
                                className="text-crown-gray4 group-hover:text-crown-gold transition-colors flex-shrink-0"
                              />
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-white/[0.06]">
            <p className="text-crown-gray4 text-xs text-center">
              Novos materiais são adicionados após cada encontro.
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
