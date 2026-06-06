import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crown.targetinstitute.com.br'),
  title: {
    default: 'Crown — Programa de Mentoria Executiva | TARGET INSTITUTE',
    template: '%s | Crown',
  },
  description:
    'O programa de desenvolvimento para líderes que querem chegar ao topo. Mentoria executiva premium com os melhores gestores do Brasil.',
  keywords: ['mentoria executiva', 'liderança', 'gestão', 'crown', 'target institute', 'programa executivo'],
  authors: [{ name: 'TARGET INSTITUTE' }],
  creator: 'TARGET INSTITUTE',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://crown.targetinstitute.com.br',
    siteName: 'Crown — TARGET INSTITUTE',
    title: 'Crown — Programa de Mentoria Executiva',
    description: 'Mentoria executiva premium para líderes que querem chegar ao topo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crown — Programa de Mentoria Executiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crown — Programa de Mentoria Executiva',
    description: 'Mentoria executiva premium para líderes que querem chegar ao topo.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TARGET INSTITUTE',
  url: 'https://crown.targetinstitute.com.br',
  description: 'Programa de mentoria executiva premium Crown',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-crown-gold focus:text-crown-black focus:rounded-lg focus:font-semibold"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
