export interface AgendaItem {
  date: string
  day: string
  month: string
  event: string | null
  special?: boolean
  blank?: boolean
}

export const agendaItems: AgendaItem[] = [
  { date: '30/05/2026', day: '30', month: 'Maio',   event: 'Abertura da Mentoria',                       special: true },
  { date: '08/06/2026', day: '08', month: 'Junho',  event: null },
  { date: '15/06/2026', day: '15', month: 'Junho',  event: null,                                          blank: true },
  { date: '22/06/2026', day: '22', month: 'Junho',  event: null,                                          blank: true },
  { date: '13/07/2026', day: '13', month: 'Julho',  event: null,                                          blank: true },
  { date: '20/07/2026', day: '20', month: 'Julho',  event: null,                                          blank: true },
  { date: '27/07/2026', day: '27', month: 'Julho',  event: null,                                          blank: true },
  { date: '03/08/2026', day: '03', month: 'Agosto', event: null,                                          blank: true },
  { date: '10/08/2026', day: '10', month: 'Agosto', event: null,                                          blank: true },
  { date: '22/08/2026', day: '22', month: 'Agosto', event: 'Entrega do Certificado · horário a definir', special: true },
]

export function parseAgendaDate(s: string): Date {
  const [d, m, y] = s.split('/').map(Number)
  return new Date(y, m - 1, d)
}

export function resolveItem(item: AgendaItem, today: Date) {
  const isPast = parseAgendaDate(item.date) < today
  return {
    ...item,
    concluded: isPast,
    displayEvent: isPast ? null : item.blank ? null : item.event,
  }
}
