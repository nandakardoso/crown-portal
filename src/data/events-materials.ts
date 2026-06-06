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
]
