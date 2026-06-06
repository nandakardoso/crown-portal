import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
  centered?: boolean
}

export function GoldDivider({ className, centered }: GoldDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-[1.5px] w-9 bg-crown-gold rounded-full opacity-60',
        centered && 'mx-auto',
        className
      )}
    />
  )
}
