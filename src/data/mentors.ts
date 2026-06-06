import type { Mentor } from '@/types'

export const mentors: Mentor[] = [
  {
    id: 'marcelo',
    name: 'Marcelo Gabana',
    role: 'Fundador',
    company: 'Target Institute USA',
    bio: [
      'Empresário, mentor e especialista em comunicação estratégica. Fundador da Target Institute, com formações no Brasil e nos Estados Unidos. Mais de 17 anos como mentor de comunicação estratégica e performance.',
      'Ajudou milhares de líderes e empresários a desenvolverem autoridade, posicionamento e influência por meio de um método que une conteúdo científico, inteligência emocional e performance.',
    ],
    tags: ['Comunicação Estratégica', 'Liderança', '17 anos'],
    image: '/images/foto-marcelo.png',
  },
  {
    id: 'cida',
    name: 'Cida Fernandes',
    role: 'Founder & CEO',
    company: 'Flow Group',
    bio: [
      'Empresária e estrategista de comunicação e negócios, com mais de 20 anos de experiência em mídia, marketing e desenvolvimento empresarial no Brasil e nos Estados Unidos.',
      'Traz para a Crown sua experiência em liderança feminina, comunicação poderosa e construção de autoridade para mulheres na vida e na carreira.',
    ],
    tags: ['Liderança Feminina', 'Negócios Internacionais', '20 anos'],
    image: '/images/foto-cida.png',
  },
]
