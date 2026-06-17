export interface EventMaterialFile {
  name: string
  href: string
  type: 'PDF' | 'PPT' | 'VIDEO' | 'TEMPLATE'
}

export interface EventDay {
  id: string
  label: string
  date: string
  materials: EventMaterialFile[]
}

export const eventsMaterials: EventDay[] = [
  {
    id: 'encontro-1',
    label: '1º Encontro',
    date: '30/03/2026',
    materials: [
      {
        name: 'Apresentação do Encontro',
        href: '/materiais/crown-apresentacao-30-maio.pdf',
        type: 'PPT',
      },
      {
        name: 'Material Pós Evento',
        href: '/materiais/crown-material-pos-evento-30-maio.pdf',
        type: 'PDF',
      },
    ],
  },
  {
    id: 'encontro-2',
    label: '2º Encontro',
    date: '08/06/2026',
    materials: [
      {
        name: 'Apresentação — O Poder da Voz',
        href: '/materiais/crown-apresentacao-08-junho.pdf',
        type: 'PPT',
      },
      {
        name: 'Material Pós Evento',
        href: '/materiais/crown-material-pos-evento-08-junho.pdf',
        type: 'PDF',
      },
      {
        name: 'Gravação da Aula (Zoom) — Código: 6kbvj32',
        href: 'https://us06web.zoom.us/rec/share/EgmepqtN6hDAU1xatcRAlQmu7I2xtXWQpiCO3E3vTiwY-x_1ZKeaiFn8YXPlhs8H.6qfgLc1naOuRT9ZF',
        type: 'VIDEO',
      },
    ],
  },
  {
    id: 'encontro-3',
    label: '3º Encontro',
    date: '15/06/2026',
    materials: [
      {
        name: 'Apresentação — Storytelling e Modulação de Voz',
        href: '/materiais/crown-apresentacao-15-junho.pdf',
        type: 'PPT',
      },
      {
        name: 'Material Pós Evento',
        href: '/materiais/crown-material-pos-evento-15-junho.pdf',
        type: 'PDF',
      },
      {
        name: 'Gravação da Aula (Zoom) — Código: 9j9gpB%V',
        href: 'https://us06web.zoom.us/rec/share/7WWb1hjLDfhOOBQaDjz25_TnwOsLMqVhvYfkgbw-lDzkLhUykdDHSFptzZ4_GIVS.UTLQLogdUwoK9Kq9',
        type: 'VIDEO',
      },
    ],
  },
]
