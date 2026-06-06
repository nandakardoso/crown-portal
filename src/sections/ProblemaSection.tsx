'use client'

import { motion } from 'framer-motion'
import { RevealWrapper, RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { GoldDivider } from '@/components/shared/GoldDivider'

const problems = [
  { title: 'Comunicação de Valor', description: 'Não conseguem comunicar seu valor com clareza nos ambientes que importam.' },
  { title: 'Insegurança de Posicionamento', description: 'Sentem insegurança ao se posicionar em ambientes de autoridade.' },
  { title: 'Presença Executiva', description: 'Não dominam sua presença em reuniões, vídeos ou apresentações.' },
  { title: 'Percepção de Liderança', description: 'Possuem conhecimento, mas não geram percepção de liderança.' },
  { title: 'Imagem Estratégica', description: 'Não utilizam sua imagem e comunicação como ferramentas estratégicas de crescimento.' },
]

export function ProblemaSection() {
  return (
    <section id="problema" aria-labelledby="problema-title" className="py-20 bg-crown-dark2">
      <div className="max-w-content mx-auto px-7">
        <RevealWrapper className="max-w-2xl mb-10">
          <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-crown-gold opacity-85 mb-3">
            O problema que ninguém nomeia
          </p>
          <GoldDivider className="mb-5" />
          <h2
            id="problema-title"
            className="font-serif font-bold text-crown-white leading-tight text-balance mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}
          >
            Por que mulheres brilhantes continuam sendo subestimadas?
          </h2>
          <p className="text-crown-gray2 text-[0.95rem] leading-[1.78] mb-2">
            No ambiente atual, não basta ser competente. É preciso saber comunicar valor,
            transmitir autoridade e posicionar-se estrategicamente.
          </p>
          <p className="text-crown-gray2 text-[0.95rem] leading-[1.78]">
            <strong className="text-crown-white">Mulheres extremamente qualificadas perdem espaço diariamente porque:</strong>
          </p>
        </RevealWrapper>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={revealItem}
              className="bg-crown-dark3 border border-white/[0.07] border-t-[1.5px] border-t-crown-roseink rounded-sm p-6 transition-colors duration-[280ms] hover:bg-crown-rosedeep/50 hover:border-t-crown-rose"
            >
              <h3 className="font-sans font-bold text-[0.9rem] text-crown-white mb-2">{p.title}</h3>
              <p className="font-sans text-[0.83rem] text-crown-gray2 leading-[1.65]">{p.description}</p>
            </motion.div>
          ))}
        </RevealStagger>

        <RevealWrapper delay={0.3} className="mt-6">
          <p
            className="font-serif italic text-crown-gold opacity-88 leading-[1.65]"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
          >
            &ldquo;Sua comunicação influencia diretamente seu faturamento, sua liderança e sua autoridade.&rdquo;
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
