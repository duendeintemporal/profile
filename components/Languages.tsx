const languages = [
  { flag: '🇪🇸', name: 'Español', level: 'Nativo' },
  { flag: '🇬🇧', name: 'Inglés', level: 'Casi nativo' },
  { flag: '🇧🇷', name: 'Portugués', level: 'Básico (cursos)' },
  { flag: '🇮🇹', name: 'Italiano', level: 'Básico (cursos)' },
  { flag: '🇩🇪', name: 'Alemán', level: 'Básico (cursos)' },
  { flag: '🇷🇺', name: 'Ruso', level: 'Básico (cursos)' },
  { flag: '🇯🇵', name: 'Japonés', level: 'Básico (cursos)' },
  { flag: '🇨🇳', name: 'Chino', level: 'Básico (cursos)' },
  { flag: '🇰🇷', name: 'Coreano', level: 'Básico (cursos)' },
  { flag: '🇫🇷', name: 'Francés', level: 'Básico (cursos)' },
  { flag: '🇸🇦', name: 'Árabe', level: 'Básico (cursos)' },
]

export default function Languages() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-6 sm:mb-8">
        Idiomas
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {languages.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/40 p-3 sm:p-4"
          >
            <span className="text-xl sm:text-2xl">{l.flag}</span>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base text-slate-100 truncate">
                {l.name}
              </p>
              <p className="text-xs sm:text-sm text-slate-400">{l.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}