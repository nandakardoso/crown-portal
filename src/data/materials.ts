import type { Material } from '@/types'

export const materials: Material[] = [
  {
    id: 'materiais-apoio',
    title: 'Materiais de Apoio',
    description: 'Documentos e apresentações oficiais do programa Crown.',
    type: 'PDF',
    icon: 'BookOpen',
    files: [
      {
        name: 'Apresentação — 30 de Maio',
        href: '/materiais/crown-apresentacao-30-maio.pdf',
        label: 'Apresentação',
      },
      {
        name: 'Material Pós Evento — 30 de Maio',
        href: '/materiais/crown-material-pos-evento-30-maio.pdf',
        label: 'PDF',
      },
      {
        name: 'Inteligência Artificial como aliada no universo feminino',
        href: 'https://www.canva.com/design/DAHNViOH0r0/ru0X9eiogP_HwwXJdINbpw/edit',
        label: 'Canva',
      },
    ],
  },
  {
    id: 'gravacoes',
    title: 'Gravações',
    description: 'Acesso às sessões online gravadas para revisão.',
    type: 'VIDEO',
    icon: 'Video',
    files: [
      {
        name: 'Gravação — 1º Encontro',
        href: 'https://zoom.us/media/share/B45D1B8C-1B85-48BA-BBFE-CADA6EAD0348?module=recording&product=video-center&channelId=4DbQ1tD-TPeAXHvReN9b7w',
        label: 'Zoom',
        date: '30/03/2026',
      },
      {
        name: 'Gravação — 2º Encontro (Código: 6kbvj32)',
        href: 'https://us06web.zoom.us/rec/share/EgmepqtN6hDAU1xatcRAlQmu7I2xtXWQpiCO3E3vTiwY-x_1ZKeaiFn8YXPlhs8H.6qfgLc1naOuRT9ZF',
        label: 'Zoom',
        date: '08/06/2026',
      },
      {
        name: 'Gravação — 3º Encontro',
        href: 'https://zoom.us/media/share/AFA00F1E-231C-479F-819A-DE39E5DA69A7?module=recording&product=video-center&channelId=4DbQ1tD-TPeAXHvReN9b7w',
        label: 'Zoom',
        date: '15/06/2026',
      },
      {
        name: 'Gravação — 4º Encontro',
        href: 'https://us06web.zoom.us/rec/share/GgwAB_NjnDC93hFgdNMU12T5eNmhrlUJeZIdKDKJ50bqrVR8kmXUsX_ZaZ_2ONdJ.W3wp1AvG3oHLJ0OT',
        label: 'Zoom',
        date: '22/06/2026',
      },
    ],
  },
  {
    id: 'agenda',
    title: 'Agenda',
    description: 'Cronograma completo dos encontros da mentoria com datas e status.',
    type: 'PDF',
    icon: 'CalendarDays',
    href: '#cronograma',
  },
  {
    id: 'galeria-fotos',
    title: 'Galeria de Fotos',
    description: 'Fotos oficiais dos encontros.',
    type: 'PDF',
    icon: 'Images',
    href: '#galeria',
  },
]
