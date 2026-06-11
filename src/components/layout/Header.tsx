'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileDrawer } from './MobileDrawer'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#problema', label: 'A Mentoria' },
  { href: '#mentores', label: 'Mentores' },
  { href: '#cronograma', label: 'Agenda' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#videos', label: 'Vídeos' },
  { href: '#materiais', label: 'Materiais' },
] as const

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-crown-black/90 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-content mx-auto px-7 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col leading-none mr-3">
              <span className="font-sans font-extrabold text-2xl tracking-[0.22em] text-crown-gray1 uppercase">
                TARGET
              </span>
              <span className="text-[0.65rem] tracking-[0.38em] text-crown-gray3 uppercase font-semibold border-t border-crown-gray4 pt-0.5 mt-0.5">
                INSTITUTE
              </span>
            </div>
            <div className="w-px h-10 bg-crown-gray4 mx-3 self-center" aria-hidden="true" />
            <div className="relative h-[56px] w-[100px] overflow-hidden">
              <Image
                src="/images/crown-logo.png"
                alt="Crown"
                fill
                className="object-contain scale-[1.35] origin-center"
                priority
                sizes="100px"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                type="button"
                onClick={() => handleNavClick(href)}
                className={cn(
                  'text-[0.85rem] font-medium transition-colors duration-[280ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-sm px-1',
                  activeSection === href.slice(1)
                    ? 'text-crown-white'
                    : 'text-crown-gray3 hover:text-crown-white'
                )}
              >
                {label}
              </button>
            ))}
            <Button asChild variant="rose" size="sm">
              <Link href="/inscrever-se">Inscrever-se</Link>
            </Button>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            className="md:hidden w-11 h-11 flex items-center justify-center text-crown-gray2 hover:text-crown-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-sm"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
        onLinkClick={handleNavClick}
      />
    </>
  )
}
