'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { mentors } from '@/data/mentors'
import type { Mentor } from '@/types'

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      variants={revealItem}
      className="bg-crown-dark2 border border-crown-border-dim rounded-[18px] overflow-hidden hover:border-crown-gold transition-all duration-[280ms] flex flex-col"
    >
      {/* Foto */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-crown-gold/20 to-crown-rose2/20">
        {mentor.image && !imgError ? (
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif text-6xl text-crown-gold font-bold select-none">
              {getInitials(mentor.name)}
            </span>
          </div>
        )}
        {/* Gradiente sobre a foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-crown-dark2 via-crown-dark2/30 to-transparent" />
        {/* Nome e cargo sobre o gradiente */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl font-bold text-crown-white leading-tight drop-shadow">
            {mentor.name}
          </h3>
          <p className="text-crown-rose2 text-sm font-semibold mt-1 drop-shadow">
            {mentor.role} · {mentor.company}
          </p>
        </div>
      </div>

      {/* Bio + Tags */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="space-y-2">
          {mentor.bio.map((paragraph, i) => (
            <p key={i} className="text-crown-gray2 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {mentor.tags.map((tag) => (
            <span
              key={tag}
              className="bg-crown-gold/10 border border-crown-gold/20 text-crown-gold text-xs font-semibold rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function MentoresSection() {
  return (
    <section id="mentores" className="bg-crown-dark py-24">
      <div className="max-w-content mx-auto px-7">
        <SectionHeader
          label="MENTORES"
          title="Quem está à sua frente"
          centered
        />

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
