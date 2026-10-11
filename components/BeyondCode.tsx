const items = [
  { emoji: '✍️', title: 'Escritor', detail: '2 libros terminados · 4 en proceso' },
  { emoji: '🖌️', title: 'Ilustrador', detail: 'Artista visual autodidacta' },
  { emoji: '🤹', title: 'Malabarista', detail: 'Desde la infancia' },
  { emoji: '👨‍🍳', title: 'Cocinero', detail: 'Nivel alto · Autodidacta' },
  { emoji: '🥋', title: 'Kung Fu Tradicional Chino', detail: '35+ años · Tai Chi Chuan · Pakua · Pikua Chuang · Tanglang Chuen' },
  { emoji: '🥷', title: 'Ninjutsu', detail: 'Arte marcial japonés tradicional' },
  { emoji: '♟️', title: 'Ajedrez', detail: 'Campeonatos interestatales' },
  { emoji: '🎸', title: 'Guitarra clásica', detail: '3 años de estudio' },
]

export default function BeyondCode() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-6 sm:mb-8">
        Más allá del código
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 hover:border-sky-500/50 transition"
          >
            <span className="text-2xl sm:text-3xl shrink-0">{i.emoji}</span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-100">{i.title}</p>
              <p className="text-sm text-slate-400 mt-1">{i.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}