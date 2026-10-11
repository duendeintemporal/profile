type Project = {
  slug: string
  title: string
  short_description: string
  year: number
  role: string
  stack: string[]
  repo_url: string | null
  demo_url: string | null
  featured: boolean
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 transition hover:border-sky-500 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-100 group-hover:text-sky-400 transition">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
          {project.year}
        </span>
      </div>

      <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
        {project.short_description}
      </p>

      <p className="mt-3 text-xs sm:text-sm text-sky-400/80 italic">
        {project.role}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 pt-3 border-t border-slate-800">
        {project.repo_url && (
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sky-400 hover:text-sky-300"
          >
            → Código
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-400 hover:text-emerald-300"
          >
            → Demo
          </a>
        )}
        <a
          href={`/projects/${project.slug}`}
          className="ml-auto text-sm text-slate-300 hover:text-white"
        >
          Ver más →
        </a>
      </div>
    </article>
  )
}