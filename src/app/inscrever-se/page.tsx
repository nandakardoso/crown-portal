'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const DD_OPTIONS = [
  '11','12','13','14','15','16','17','18','19',
  '21','22','24','27','28',
  '31','32','33','34','35','37','38',
  '41','42','43','44','45','46',
  '47','48','49',
  '51','53','54','55',
  '61','62','63','64','65','66','67','68','69',
  '71','73','74','75','77','79',
  '81','82','83','84','85','86','87','88','89',
  '91','92','93','94','95','96','97','98','99',
]

type FormData = {
  nome: string
  email: string
  dd: string
  telefone: string
  linkedin: string
  empresa: string
  cargo: string
  whatsapp: boolean
}

type Errors = Partial<Record<keyof FormData, string>>

export default function InscreverSePage() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    dd: '11',
    telefone: '',
    linkedin: '',
    empresa: '',
    cargo: '',
    whatsapp: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate(): Errors {
    const e: Errors = {}
    if (!form.nome.trim()) e.nome = 'Nome é obrigatório'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'E-mail inválido'
    if (!form.telefone.trim() || !/^\d{8,9}$/.test(form.telefone.replace(/\D/g, '')))
      e.telefone = 'Telefone inválido'
    if (form.linkedin && !/linkedin\.com/.test(form.linkedin))
      e.linkedin = 'Insira um link do LinkedIn válido'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-crown-black flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-20">
          <div className="w-16 h-16 rounded-full bg-crown-gold/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-crown-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-bold text-crown-white mb-4">Inscrição recebida!</h1>
          <p className="text-crown-gray2 leading-relaxed mb-8">
            Obrigada, <span className="text-crown-gold font-medium">{form.nome.split(' ')[0]}</span>. Nossa equipe entrará em contato em breve pelo e-mail <span className="text-crown-white">{form.email}</span>.
          </p>
          <Button asChild variant="outline">
            <Link href="/">Voltar ao site</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-crown-black">
      {/* Header simples */}
      <div className="border-b border-white/[0.06] px-7 py-5 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-16">
            <Image src="/images/crown-logo.png" alt="Crown" fill className="object-contain" sizes="64px" />
          </div>
          <span className="text-crown-gray3 text-sm group-hover:text-crown-gray1 transition-colors">← Voltar</span>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-crown-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Inscrição — Crown
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-crown-white leading-tight mb-4">
            Reserve sua vaga
          </h1>
          <p className="text-crown-gray2 text-base leading-relaxed">
            Preencha o formulário abaixo. Nossa equipe analisará seu perfil e entrará em contato em até 48h.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Nome */}
          <Field label="Nome completo" error={errors.nome} required>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Amanda Cardoso"
              className={inputClass(!!errors.nome)}
              autoComplete="name"
            />
          </Field>

          {/* Email */}
          <Field label="E-mail" error={errors.email} required>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="amanda@empresa.com.br"
              className={inputClass(!!errors.email)}
              autoComplete="email"
            />
          </Field>

          {/* Telefone com DD */}
          <Field label="Telefone / WhatsApp" error={errors.telefone} required>
            <div className="flex gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-crown-gray3 text-sm pointer-events-none">+55</span>
                <select
                  name="dd"
                  value={form.dd}
                  onChange={handleChange}
                  className="appearance-none bg-crown-dark2 border border-crown-border-dim text-crown-gray1 text-sm rounded-lg pl-10 pr-7 h-11 focus:outline-none focus:border-crown-gold transition-colors"
                >
                  {DD_OPTIONS.map(dd => (
                    <option key={dd} value={dd}>{dd}</option>
                  ))}
                </select>
              </div>
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="99999-9999"
                className={inputClass(!!errors.telefone) + ' flex-1'}
                autoComplete="tel"
                inputMode="numeric"
              />
            </div>
          </Field>

          {/* WhatsApp permission */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                name="whatsapp"
                checked={form.whatsapp}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${form.whatsapp ? 'bg-crown-gold border-crown-gold' : 'border-crown-border-dim bg-crown-dark2 group-hover:border-crown-gray3'}`}>
                {form.whatsapp && (
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-crown-gray2 leading-snug">
              Autorizo o contato via WhatsApp para informações sobre o programa Crown
            </span>
          </label>

          {/* LinkedIn */}
          <Field label="LinkedIn" error={errors.linkedin}>
            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/amanda-cardoso"
              className={inputClass(!!errors.linkedin)}
            />
          </Field>

          {/* Empresa e Cargo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Empresa atual" error={errors.empresa}>
              <input
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Nome da empresa"
                className={inputClass(!!errors.empresa)}
              />
            </Field>
            <Field label="Cargo atual" error={errors.cargo}>
              <input
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
                placeholder="CEO, Diretora, Gerente..."
                className={inputClass(!!errors.cargo)}
              />
            </Field>
          </div>

          {/* Aviso LGPD */}
          <p className="text-crown-gray3 text-xs leading-relaxed border-t border-white/[0.06] pt-5">
            Seus dados são tratados com confidencialidade e utilizados exclusivamente para contato sobre o programa Crown, em conformidade com a LGPD.
          </p>

          {/* Submit */}
          <Button
            type="submit"
            variant="rose"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar inscrição'}
          </Button>
        </form>
      </div>
    </main>
  )
}

function inputClass(hasError: boolean) {
  return `w-full bg-crown-dark2 border ${hasError ? 'border-red-500' : 'border-crown-border-dim'} text-crown-gray1 placeholder:text-crown-gray4 text-sm rounded-lg px-4 h-11 focus:outline-none focus:border-crown-gold transition-colors`
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-crown-gray1">
        {label}
        {required && <span className="text-crown-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  )
}
