import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

async function ProjectDetail({ slug }: { slug: string }) {
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!project) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <a href="/" className="text-sm text-sky-400 hover:text-sky-300">
        ← Volver
      </a>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
            {project.year}
          </span>
          {project.featured && (
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-400 border border-sky-500/30">
              Destacado
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 leading-tight">
          {project.title}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-sky-400 italic">
          {project.role}
        </p>
      </header>

      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
        {project.description}
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack?.map((tech: string) => (
            <span
              key={tech}
              className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {(project.repo_url || project.demo_url) && (
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-sky-600 px-5 py-3 text-center text-white font-medium hover:bg-sky-500 transition"
            >
              Ver código
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-center text-slate-200 hover:border-sky-500 transition"
            >
              Ver demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="h-8 bg-slate-800 rounded animate-pulse mb-4" />
          <div className="h-4 bg-slate-800 rounded animate-pulse mb-2" />
          <div className="h-4 bg-slate-800 rounded animate-pulse w-2/3" />
        </div>
      }
    >
      <ProjectDetail slug={slug} />
    </Suspense>
  )
}