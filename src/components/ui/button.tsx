'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-content-center gap-2 rounded-full font-sans font-bold text-sm transition-all duration-[280ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold focus-visible:ring-offset-2 focus-visible:ring-offset-crown-black disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        rose: 'bg-crown-rose text-crown-white hover:bg-crown-rose2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_oklch(48%_0.20_12_/_0.38)]',
        outline: 'border border-crown-white/20 text-crown-white hover:border-crown-gold hover:text-crown-gold hover:-translate-y-0.5',
        gold: 'bg-crown-gold text-crown-black hover:bg-crown-gold2 hover:-translate-y-0.5',
        ghost: 'text-crown-gray2 hover:text-crown-white',
      },
      size: {
        sm: 'px-5 py-2 text-xs',
        md: 'px-8 py-3.5 text-sm',
        lg: 'px-10 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'rose',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
