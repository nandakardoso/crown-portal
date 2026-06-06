'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export function HeroSection() {
  const scrollToProgram = () => {
    document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-svh flex items-center py-24 overflow-hidden border-b border-crown-gold/18"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(11%_0.006_12)]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,oklch(48%_0.20_12_/_0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_80%,oklch(72%_0.14_82_/_0.06),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-7 w-full">
        {/* Tag */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 bg-crown-rose/12 border border-crown-rose/32 text-crown-rose2 text-[0.68rem] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm mb-6">
            <span className="w-1 h-1 rounded-full bg-crown-rose2 shrink-0" aria-hidden="true" />
            Target Institute
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          id="hero-title"
          {...fadeUp(0.08)}
          className="font-serif font-black text-crown-white leading-none tracking-[-0.02em] mb-4"
          style={{ fontSize: 'clamp(3.2rem, 7vw, 5.5rem)' }}
        >
          Crown
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.16)}
          className="font-serif italic text-crown-gold mb-6 leading-snug"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.55rem)' }}
        >
          Mulheres que se Comunicam com Poder
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.22)}
          className="text-crown-gray2 text-[0.97rem] max-w-[560px] leading-[1.82] mb-8"
        >
          Uma mentoria premium para mulheres que desejam liderar, posicionar-se com autoridade
          e transformar sua comunicação em um ativo estratégico de crescimento.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          {...fadeUp(0.28)}
          className="max-w-[540px] px-6 py-4 bg-crown-gold/8 border border-crown-gold/22 rounded-sm mb-10"
        >
          <p className="font-sans text-[0.93rem] font-semibold text-crown-gray1 leading-relaxed">
            No mercado atual, competência sem posicionamento gera invisibilidade.
          </p>
        </motion.blockquote>

        {/* CTAs */}
        <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-3">
          <Button asChild variant="rose" size="lg">
            <Link href="/inscrever-se">Quero participar</Link>
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={scrollToProgram}>
            Conhecer o programa
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
