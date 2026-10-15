import FadeIn from './FadeIn'

type Book = {
  title: string
  cover: string
  url: string
  genre: string
  description: string
  status?: 'Completo' | 'En curso'
}

const books: Book[] = [
  {
    title: 'Título del Libro 1',
    cover: '/wattpad/book-1.jpg',
    url: 'https://www.wattpad.com/user/duendeintemporal',
    genre: 'Ficción',
    description: 'Breve descripción del libro. Temática, ambientación, lo que el lector encontrará.',
    status: 'Completo',
  },
  {
    title: 'Título del Libro 2',
    cover: '/wattpad/book-2.jpg',
    url: 'https://www.wattpad.com/user/duendeintemporal',
    genre: 'Poesía',
    description: 'Breve descripción del libro. Temática, ambientación, lo que el lector encontrará.',
    status: 'En curso',
  },
  {
    title: 'Cuando Hablan las Imagenes',
    cover: '/wattpad/book-3.jpg',
    url: 'https://www.wattpad.com/user/duendeintemporal',
    genre: 'Ensayo',
    description: 'Pequeños micro relatos basados en ilustraciones de artistas como Jean Girauld o Frank Frazetta, lienzos  breves de palabras narrados en imagenes o viceversa...',
    status: 'Completo',
  },
]

export default function WattpadSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2">
          Escritos en Wattpad
        </h2>
        <p className="text-slate-400 mb-8 text-sm sm:text-base max-w-2xl">
          Libros y textos publicados en mi perfil de Wattpad. Ficción, poesía y ensayo.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {books.map((book, i) => (
          <FadeIn key={book.title} delay={i * 0.1}>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-sky-500 transition"
            >
              <div className="aspect-[2/3] overflow-hidden bg-slate-800 relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {book.status && (
                  <span
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${
                      book.status === 'Completo'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    {book.status}
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-xs text-sky-400 uppercase tracking-wide mb-1">
                  {book.genre}
                </p>
                <h3 className="font-semibold text-slate-100 text-lg group-hover:text-sky-400 transition">
                  {book.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {book.description}
                </p>
                <p className="mt-3 text-xs text-sky-400 group-hover:text-sky-300">
                  Leer en Wattpad →
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-8 text-center">
          <a
            href="https://www.wattpad.com/user/duendeintemporal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-200 hover:border-sky-500 hover:text-sky-400 transition"
          >
            Ver todos mis libros en Wattpad →
          </a>
        </div>
      </FadeIn>
    </section>
  )
}