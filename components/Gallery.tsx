'use client'

import { useState } from 'react'

type Artwork = {
  id: number
  src: string
  title: string
  description?: string
}

const artworks: Artwork[] = [
  { id: 1, src: '/art/illustration-01.jpg', title: 'Ilustración 01', description: 'Tinta y acuarela' },
  { id: 2, src: '/art/illustration-02.jpg', title: 'Ilustración 02' },
  { id: 3, src: '/art/illustration-03.jpg', title: 'Ilustración 03', description: 'Boceto digital' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<Artwork | null>(null)

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2">
        Ilustraciones
      </h2>
      <p className="text-slate-400 mb-8 text-sm sm:text-base">
        Trabajo visual realizado en paralelo al código.
      </p>

      <div className="columns-2 sm:columns-2 md:columns-3 gap-3 sm:gap-4">
        {artworks.map((art) => (
          <button
            key={art.id}
            onClick={() => setSelected(art)}
            className="mb-3 sm:mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40 hover:border-sky-500 transition group"
          >
            <img
              src={art.src}
              alt={art.title}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="p-2 sm:p-3 text-left">
              <p className="text-xs sm:text-sm font-medium text-slate-200 truncate">
                {art.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-3 text-center text-slate-200 text-sm sm:text-base">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}