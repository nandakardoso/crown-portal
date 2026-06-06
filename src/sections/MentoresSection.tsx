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

function MentorAvatar({ mentor }: { mentor: Mentor }) {
  const [imgError, setImgError] = useState(false)

  if (!mentor.image || imgError) {
    return (
      <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-crown-gold to-crown-rose2 flex items-center justify-center" aria-hidden="true">
        <span className="font-serif text-2xl text-crown-black font-bold select-none">
          {getInitials(mentor.name)}
        </span>
      </div>
    )
  }

  return (
    <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden relative">
      <Image
        src={mentor.image}
        alt={mentor.name}
        fill
        sizes="80px"
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <motion.div
      variants={revealItem}
      className="bg-crown-dark2 border border-crown-border-dim rounded-[18px] p-8 hover:border-crown-gold transition-all duration-[280ms] flex flex-col gap-5"
    >
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <MentorAvatar mentor={mentor} />
        <div>
          <h3 className="font-serif text-xl font-bold text-crown-white leading-tight">
            {mentor.name}
          </h3>
          <p className="text-crown-rose2 text-sm font-semibold mt-0.5">
            {mentor.role} · {mentor.company}
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        {mentor.bio.map((paragraph, i) => (
          <p key={i} className="text-crown-gray2 text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {mentor.tags.map((tag) => (
          <span
            key={tag}
            className="bg-crown-gold/10 border border-crown-gold/20 text-crown-gold text-xs font-semibold rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
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
