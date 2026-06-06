'use client'

import Link from 'next/link'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
}

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  links: readonly NavLink[]
  activeSection: string
  onLinkClick: (href: string) => void
}

export function MobileDrawer({ open, onClose, links, activeSection, onLinkClick }: MobileDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

        <nav aria-label="Menu mobile" className="flex flex-col gap-0 mt-2">
          {links.map(({ href, label }) => (
            <button
              key={href}
              type="button"
              onClick={() => onLinkClick(href)}
              className={cn(
                'text-left text-base font-medium py-4 border-b border-white/5 transition-colors duration-[280ms]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-sm',
                activeSection === href.slice(1)
                  ? 'text-crown-white'
                  : 'text-crown-gray2 hover:text-crown-white'
              )}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          <Button asChild variant="rose" size="md" className="w-full justify-center">
            <Link href="/inscrever-se" onClick={onClose}>
              Inscrever-se
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
