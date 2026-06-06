'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm',
      'data-[state=open]:animate-fadeIn',
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = 'SheetOverlay'

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed right-0 top-0 z-50 h-full w-72 bg-crown-dark2 border-l border-white/5',
        'flex flex-col px-8 pt-16 pb-10',
        'data-[state=open]:animate-[slideInRight_0.32s_cubic-bezier(0.22,1,0.36,1)]',
        'focus:outline-none',
        className
      )}
      {...props}
    >
      <DialogPrimitive.Close className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-crown-gray3 hover:text-crown-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-full">
        <X className="h-5 w-5" />
        <span className="sr-only">Fechar menu</span>
      </DialogPrimitive.Close>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
SheetContent.displayName = 'SheetContent'

const SheetTitle = DialogPrimitive.Title

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle }
