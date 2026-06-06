'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const DD_PAISES = [
  { code: '+55', label: 'BR +55' },
  { code: '+1',  label: 'US +1'  },
  { code: '+351', label: 'PT +351' },
  { code: '+44', label: 'UK +44' },
  { code: '+34', label: 'ES +34' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
  { code: '+39', label: 'IT +39' },
  { code: '+54', label: 'AR +54' },
  { code: '+56', label: 'CL +56' },
  { code: '+52', label: 'MX +52' },
]

export function CtaSection() {
  const [form, setForm] = useState({ nome: '', dd: '+55', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.nome.trim() || !form.telefone.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

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
        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <Button asChild variant="rose" size="lg">
            <Link href="/inscrever-se">Quero minha vaga agora</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:contato@targetinstitute.com.br">Fale com nossa equipe</a>
          </Button>
        </div>

        {/* Formulário de contato */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-left">

          {/* Instagram */}
          <div className="flex justify-center mb-6">
            <a
              href="https://www.instagram.com/targetinstituteusa?igsh=Z3dxanllZTJ4aWpw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-crown-gray2 hover:text-crown-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              <span className="text-sm font-medium">@targetinstituteusa</span>
            </a>
          </div>

          {sent ? (
            <div className="text-center py-6">
              <p className="text-crown-white font-semibold text-lg mb-2">Mensagem enviada!</p>
              <p className="text-crown-gray2 text-sm">Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-crown-white font-semibold text-center mb-5">Fale com nossa equipe</p>

              {/* Nome */}
              <div>
                <label className="text-sm font-medium text-crown-gray1 block mb-1.5">
                  Nome <span className="text-crown-gold">*</span>
                </label>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full bg-white/[0.06] border border-white/[0.12] text-crown-gray1 placeholder:text-crown-gray4 text-sm rounded-lg px-4 h-11 focus:outline-none focus:border-crown-gold transition-colors"
                />
              </div>

              {/* Telefone com DD do país */}
              <div>
                <label className="text-sm font-medium text-crown-gray1 block mb-1.5">
                  Telefone <span className="text-crown-gold">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="dd"
                    value={form.dd}
                    onChange={handleChange}
                    className="bg-white/[0.06] border border-white/[0.12] text-crown-gray1 text-sm rounded-lg px-3 h-11 focus:outline-none focus:border-crown-gold transition-colors"
                  >
                    {DD_PAISES.map(p => (
                      <option key={p.code} value={p.code}>{p.label}</option>
                    ))}
                  </select>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="99999-9999"
                    required
                    inputMode="numeric"
                    className="flex-1 bg-white/[0.06] border border-white/[0.12] text-crown-gray1 placeholder:text-crown-gray4 text-sm rounded-lg px-4 h-11 focus:outline-none focus:border-crown-gold transition-colors"
                  />
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-sm font-medium text-crown-gray1 block mb-1.5">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre você e o que busca no programa..."
                  rows={4}
                  className="w-full bg-white/[0.06] border border-white/[0.12] text-crown-gray1 placeholder:text-crown-gray4 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-crown-gold transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="rose" size="lg" className="w-full" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          )}
        </div>

        {/* Fine print */}
        <p className="text-crown-gray3 text-sm mt-6">
          Próxima turma: vagas limitadas · Inscrições abertas
        </p>
      </div>
    </section>
  )
}
