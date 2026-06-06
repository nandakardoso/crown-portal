---
target: src/app/page.tsx
total_score: 20
p0_count: 2
p1_count: 1
timestamp: 2026-06-05T01-19-35Z
slug: src-app-page-tsx
---
## Design Health Score — Crown Portal Homepage

| # | Heurística | Score | Problema-chave |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Nav sem indicador visual de seção ativa; sem scroll progress |
| 2 | Match System / Real World | 3 | Linguagem adequada; "Quem está à sua frente" ambíguo |
| 3 | User Control and Freedom | 2 | Sem back-to-top; filtros da galeria sem transição de estado |
| 4 | Consistency and Standards | 2 | 4 seções com container/padding diferentes; 4 valores de border-radius divergentes |
| 5 | Error Prevention | 2 | Imagens de mentores não renderizadas; filtro de galeria vazia sem mensagem |
| 6 | Recognition Rather Than Recall | 3 | Nav sem link direto para Módulos ou Diferenciais |
| 7 | Flexibility and Efficiency | 2 | Sem filtro de vídeos, sem expandir módulos, sem atalho para preço |
| 8 | Aesthetic and Minimalist Design | 2 | 9 módulos + 6 diferenciais + 10 materiais no mesmo ritmo visual; sem respiro editorial |
| 9 | Error Recovery | 1 | Botão "consultor" sem href/onClick; /inscrever-se pode ser 404 |
| 10 | Help and Documentation | 1 | Nenhuma FAQ, nenhum preço, nenhuma data de turma, nenhuma política de risco |
| **Total** | | **20/40** | **Acceptable** |

## Anti-Patterns Verdict

Parcialmente AI-generated. Stack técnica cuidadosa (OKLCH, tipografia calibrada, RevealWrapper sofisticado), mas estrutura narrativa segue template canônico de landing page de curso online. Três sinais: ProblemaSection com 5 cards de dor em grid, DiferenciaisSection sem tensão visual, CtaSection com copy de webinar + quebra de gênero.

Scan determinístico: [] — nenhum anti-pattern CSS detectado automaticamente.

## Overall Impression

Fundação técnica real. Falta a camada editorial que transforma "plataforma premium escura com gold" em Crown. Dois P0s quebram conversão antes de qualquer refinamento estético.

## What's Working

1. RevealWrapper com cubic-bezier(0.22,1,0.36,1) e once:true — sofisticado e performático
2. HeroSection — tipografia clamp + italic gold + blockquote com border sutil
3. Header acessível — IntersectionObserver, aria-expanded, focus-visible, skip link

## Priority Issues

[P0] CtaSection: copy "gestores" (masculino numa mentoria feminina) + botão consultor sem href/onClick
[P0] MentoresSection: campo image ignorado (iniciais em vez de foto) + container px-6/max-w-6xl divergente
[P1] GaleriaSection e VideosSection: placeholders "Em breve" visíveis sem conteúdo real
[P2] 4 seções com container diferente do padrão (max-w-6xl px-6 vs max-w-content px-7)
[P2] Ausência total de preço, formato, carga horária, próxima turma no CTA

## Persona Red Flags

Jordan: /inscrever-se pode ser 404; sem preço/data visível
Sam: filtros sem aria-pressed; RevealWrapper com opacity:0 inicial; PhotoCard sem role=button
Casey: CTA do header hidden md:flex — invisível no mobile
Marcela (executiva Crown): informação de decisão completamente ausente (preço, formato, turma)

## Minor Observations

- OQueESection sem id — não linkável pelo nav
- HeroSection: "Conhecer o programa" navega para #problema (semanticamente errado)
- Footer sem link de verificação do certificado MUST University
- 9 módulos sem duração, formato ou ordem numérica

## Questions to Consider

1. Crown vende exclusividade ou transformação? Volume de conteúdo exibido é lógica de Hotmart, não de produto exclusivo.
2. Fotos de mentores existem em mentors.ts mas não são renderizadas — débito técnico ou produto publicado antes de estar pronto?
3. O que acontece após "Quero minha vaga agora"? A rota /inscrever-se existe?
