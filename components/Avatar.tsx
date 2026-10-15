'use client'

import { useState } from 'react'

type AvatarProps = {
  frontImage?: string
  backImage?: string
  alt?: string
}

export default function Avatar({
  frontImage = '/avatar-1.jpg',
  backImage = '/avatar-2.jpg',
  alt = 'Niko Zen',
}: AvatarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto cursor-pointer group"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered((v) => !v)}
    >
      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-500/40 via-purple-500/30 to-amber-400/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-500/40 shadow-2xl bg-slate-900">
        <div
          className="absolute inset-0"
          style={{
            transformOrigin: 'left center',
            transform: isHovered ? 'rotateY(-90deg)' : 'rotateY(0deg)',
            transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isHovered ? '0ms' : '500ms',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={frontImage}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            transformOrigin: 'right center',
            transform: isHovered ? 'rotateY(0deg)' : 'rotateY(90deg)',
            transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isHovered ? '500ms' : '0ms',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={backImage}
            alt={`${alt} — ilustración`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <p className="mt-3 text-center text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
        hover para ver más
      </p>
    </div>
  )
}