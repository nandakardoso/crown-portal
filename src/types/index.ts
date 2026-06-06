export interface Module {
  id: string
  title: string
  description: string
  icon: string // lucide icon name
}

export interface Mentor {
  id: string
  name: string
  role: string
  company: string
  bio: string[]
  tags: string[]
  image: string
}

export interface Differential {
  id: string
  title: string
  description: string
  icon: string
  highlight?: boolean
}

export interface MaterialFile {
  name: string
  href: string
  label: string
  password?: string
  date?: string
}

export interface Material {
  id: string
  title: string
  description: string
  type: 'PDF' | 'PPT' | 'VIDEO' | 'TEMPLATE' | 'IA'
  icon: string
  href?: string
  files?: MaterialFile[]
}

export interface Video {
  id: string
  sessionLabel: string
  date?: string
  title: string
  description: string
  youtubeId?: string
  href?: string
}

export interface GalleryPhoto {
  id: string
  src?: string
  alt: string
  category: 'abertura' | 'online' | 'networking' | 'formatura'
  caption: string
}

export type GalleryCategory = 'todos' | 'abertura' | 'online' | 'networking' | 'formatura'
