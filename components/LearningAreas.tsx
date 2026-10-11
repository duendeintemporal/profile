const areas = [
  'Telecomunicaciones',
  'Diseño Gráfico',
  'Informática (TSU)',
  'ISOs internacionales',
  'Encapsulado e indexado de datos',
  'Arquitectura de software',
  'Sistemas de recuperación de información',
  'Internet de las Cosas',
  'Electrónica',
  'Nanotecnología',
  'Hardware libre',
  'Acupuntura',
  'Shiatsu',
  'Música',
  'Idiomas',
  'Tantra',
]

export default function LearningAreas() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-6 sm:mb-8">
        Áreas de aprendizaje e interés
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {areas.map((a) => (
          <span
            key={a}
            className="rounded-full border border-slate-700 bg-slate-900/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400 transition"
          >
            {a}
          </span>
        ))}
      </div>
    </section>
  )
}