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
    ],
  },
  {
    id: 'checklists',
    title: 'Checklists',
    description: 'Ferramentas práticas de aplicação dos conteúdos.',
    type: 'PDF',
    icon: 'CheckSquare',
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Modelos prontos para scripts, apresentações e comunicações.',
    type: 'TEMPLATE',
    icon: 'LayoutTemplate',
  },
  {
    id: 'ia-tools',
    title: 'Ferramentas de IA',
    description: 'Prompts e recursos selecionados para ampliar sua performance.',
    type: 'IA',
    icon: 'Cpu',
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
