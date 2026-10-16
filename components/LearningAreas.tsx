import FadeIn from './FadeIn'

type AreaGroup = {
  title: string
  emoji: string
  items: string[]
}

const groups: AreaGroup[] = [
  {
    title: 'Desarrollo & Arquitectura',
    emoji: '⚙️',
    items: [
      'Deep JavaScript',
      'TypeScript',
      'Java',
      'Rust',
      'C',
      'C#',
      'Python',
      'COBOL',
      'Bash',
      'Arquitectura de software',
      'Sistemas de recuperación de información',
      'ISOs internacionales',
      'Encapsulado e indexado de datos',
      'Hardware libre',
      'Electrónica',
      'Telecomunicaciones',
    ],
  },
  {
    title: 'IA & Machine Learning',
    emoji: '🤖',
    items: [
      'Machine Learning',
      'IA Engineering',
      'Agentes IA',
      'IA Prompts',
      'IA Roles',
      'IA Types',
      'M2M — Machine to Machine',
      'DeepSeek IA tools',
      'Online IA tools',
    ],
  },
  {
    title: 'Ciencia & Tecnología',
    emoji: '🔬',
    items: [
      'Internet de las Cosas',
      'Nanotecnología',
      'Informática (TSU)',
      'Diseño Gráfico',
    ],
  },
  {
    title: 'Artes & Bienestar',
    emoji: '🧘',
    items: [
      'Música',
      'Idiomas',
      'Acupuntura',
      'Shiatsu',
      'Tantra',
    ],
  },
]

export default function LearningAreas() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-2">
          Áreas de aprendizaje e interés
        </h2>
        <p className="text-slate-400 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl">
          Un recorrido autodidacta que cruza tecnología, ciencia, arte y bienestar.
        </p>
      </FadeIn>

      <div className="space-y-8 sm:space-y-10">
        {groups.map((group, gi) => (
          <FadeIn key={group.title} delay={gi * 0.08}>
            <div>
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-200 mb-4">
                <span className="text-xl sm:text-2xl">{group.emoji}</span>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}