import { cn } from '@/lib/utils'
import { GoldDivider } from './GoldDivider'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered,
  className,
  titleAs: Tag = 'h2',
}: SectionHeaderProps) {
  return (
    <header className={cn('mb-14', centered && 'text-center', className)}>
      {label && (
        <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-crown-gold opacity-85 mb-3">
          {label}
        </p>
      )}
      <GoldDivider centered={centered} className="mb-5" />
      <Tag
        className={cn(
          'font-serif font-bold leading-tight text-balance',
          'text-[clamp(1.8rem,3vw,2.6rem)]',
          'text-crown-white'
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={cn('mt-3 text-crown-gray2 text-[0.95rem] leading-relaxed max-w-[560px]', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </header>
  )
}
