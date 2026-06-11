import { RevealWrapper } from '@/components/shared/RevealWrapper'
import { ChevronRight } from 'lucide-react'

const outcomes = [
  'Comunicar-se com autoridade',
  'Influenciar com inteligência',
  'Posicionar-se estrategicamente',
  'Gerar percepção de liderança',
  'Fortalecer imagem pessoal e profissional',
  'Dominar ambientes presenciais e digitais',
]

export function OQueESection() {
  return (
    <section id="mentoria" aria-labelledby="oque-title" className="pb-20 bg-crown-dark">
      <div className="max-w-content mx-auto px-7">
        <RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] rounded-md overflow-hidden">
            {/* Left panel */}
            <div className="relative bg-crown-rose-deep border-b md:border-b-0 md:border-r border-crown-rose-ink px-10 py-14 flex flex-col justify-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-crown-gold to-transparent" aria-hidden="true" />
              <h2
                id="oque-title"
                className="font-serif font-bold text-crown-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                O que é a Mentoria Crown?
              </h2>
              <p className="font-sans text-[0.95rem] text-crown-gray2 italic leading-[1.65]">
                Comunicação não é dom.<br />É posicionamento estratégico.
              </p>
            </div>

            {/* Right panel */}
            <div className="bg-crown-dark2 px-12 py-14">
              <p className="text-[0.93rem] text-crown-gray2 leading-[1.8] mb-3">
                <strong className="text-crown-white">A CROWN</strong> é uma jornada premium de reposicionamento comunicacional
                para mulheres empresárias, líderes, executivas e profissionais que desejam desenvolver
                uma comunicação de alto impacto.
              </p>
              <p className="text-[0.93rem] text-crown-gray2 leading-[1.8] mb-6">A Crown prepara mulheres para:</p>
              <ul className="flex flex-col divide-y divide-white/5" role="list">
                {outcomes.map(item => (
                  <li key={item} className="flex items-center gap-4 py-3.5 text-[0.88rem] font-semibold text-crown-white">
                    <span className="w-[26px] h-[26px] shrink-0 rounded-full border border-crown-rose-sand/50 flex items-center justify-center" aria-hidden="true">
                      <ChevronRight className="w-2.5 h-2.5 text-crown-rose-sand" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
