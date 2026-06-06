'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { RevealStagger, revealItem } from '@/components/shared/RevealWrapper'
import { videos } from '@/data/videos'
import type { Video } from '@/types'

function VideoEmptyState() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-crown-dark3">
      <div className="w-14 h-14 rounded-full border border-crown-gold/50 flex items-center justify-center">
        {/* Play triangle */}
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path d="M2 1L18 11L2 21V1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-crown-gold" />
          <path d="M2 1L18 11L2 21V1Z" fill="currentColor" className="text-crown-gold/60" />
        </svg>
      </div>
      <span className="text-crown-gray3 text-sm">Em breve</span>
    </div>
  )
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-crown-gold/15 border border-crown-gold/40 flex items-center justify-center group-hover:bg-crown-gold/25 group-hover:scale-110 transition-all duration-[280ms]">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-0.5"
        >
          <path d="M1 1L13 8L1 15V1Z" fill="currentColor" className="text-crown-gold" />
        </svg>
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: Video }) {
  const thumbnailUrl = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : undefined

  return (
    <motion.div
      variants={revealItem}
      className="bg-crown-dark2 rounded-[18px] overflow-hidden border border-crown-border-dim hover:border-crown-gold transition-all duration-[280ms] group flex flex-col"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-crown-dark3 relative">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <VideoEmptyState />
        )}
        <PlayOverlay />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-crown-gold/70 text-xs font-semibold mb-2 uppercase tracking-wide">
          {video.sessionLabel}
        </p>
        <h3 className="font-serif text-base font-bold text-crown-white mb-1 leading-snug">
          {video.title}
        </h3>
        <p className="text-crown-gray3 text-sm leading-relaxed flex-1">
          {video.description}
        </p>
      </div>
    </motion.div>
  )
}

export function VideosSection() {
  // Only render section if at least one video has a real youtubeId
  const videosWithId = videos.filter((v) => v.youtubeId)
  if (videosWithId.length === 0) return null

  return (
    <section id="videos" className="bg-crown-dark py-[4.5rem]">
      <div className="max-w-content mx-auto px-7">
        <SectionHeader
          label="VÍDEOS"
          title="Ouça quem já passou por aqui"
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
