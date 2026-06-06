import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  { href: '/', label: 'Site principal' },
  { href: '#problema', label: 'A Mentoria' },
  { href: '#galeria', label: 'Galeria' },
  { href: '/inscrever-se', label: 'Inscrever-se' },
]

export function Footer() {
  return (
    <footer className="bg-crown-dark border-t border-white/[0.04] py-9">
      <div className="max-w-content mx-auto px-7 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <div className="relative h-14 w-14 shrink-0">
            <Image src="/images/crown-logo.png" alt="Crown" fill className="object-contain" sizes="56px" />
          </div>
          <div>
            <p className="text-[0.78rem] text-crown-gray3 leading-relaxed">
              Crown · Target Institute USA
              <br />
              MUST University · Florida
            </p>
          </div>
        </div>

        <nav aria-label="Links do rodapé" className="flex gap-6 flex-wrap">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[0.8rem] text-crown-gray3 hover:text-crown-gray1 transition-colors duration-[280ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold rounded-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
