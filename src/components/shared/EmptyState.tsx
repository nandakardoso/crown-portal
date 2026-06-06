import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  caption: string
  className?: string
}

export function PhotoEmptyState({ caption, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'w-full min-h-[200px] flex flex-col items-center justify-center gap-2 p-6',
        'bg-crown-dark3 border border-dashed border-crown-gold/[0.14]',
        'group-hover:border-crown-gold/30 transition-colors duration-[280ms]',
        className
      )}
    >
      <ImageIcon className="w-7 h-7 text-crown-white opacity-20" strokeWidth={1.5} />
      <p className="text-[0.75rem] font-semibold text-crown-gray3 text-center leading-snug">{caption}</p>
      <span className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-crown-gold opacity-55">
        Em breve
      </span>
    </div>
  )
}

export function VideoEmptyState() {
  return (
    <div className="w-full aspect-video bg-crown-dark3 flex flex-col items-center justify-center gap-3">
      <div className="w-13 h-13 rounded-full bg-crown-gold/15 border border-crown-gold/40 flex items-center justify-center opacity-50">
        <svg className="w-5 h-5 fill-crown-gold ml-0.5" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
      <p className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-crown-gray4">Em breve</p>
    </div>
  )
}
