import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-0.5 text-[0.68rem] font-semibold tracking-wide transition-colors',
  {
    variants: {
      variant: {
        gold: 'bg-crown-gold/8 border border-crown-gold/20 text-crown-gold',
        rose: 'bg-crown-rose/10 border border-crown-rose/25 text-crown-rose2',
        dim: 'bg-crown-white/5 border border-crown-white/10 text-crown-gray3',
      },
    },
    defaultVariants: { variant: 'gold' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
