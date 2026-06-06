import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section
      id="inscricao"
      className="bg-crown-rose-deep py-24 border-t border-crown-rose-ink"
    >
      <div className="max-w-2xl mx-auto px-7 text-center">
        {/* Label */}
        <p className="text-crown-rose2 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
          VAGAS LIMITADAS
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-crown-white leading-tight mb-6 [text-wrap:balance]">
          Pronta para ocupar o lugar que é seu entre as grandes líderes do Brasil?
        </h2>

        {/* Paragraph */}
        <p className="text-crown-gray2 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          O programa Crown é para quem já chegou longe e sabe que pode ir mais longe ainda.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="rose" size="lg">
            <Link href="/inscrever-se">Quero minha vaga agora</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:contato@targetinstitute.com.br">Falar com um consultor</a>
          </Button>
        </div>

        {/* Fine print */}
        <p className="text-crown-gray3 text-sm mt-6">
          Próxima turma: vagas limitadas · Inscrições abertas
        </p>
      </div>
    </section>
  )
}
