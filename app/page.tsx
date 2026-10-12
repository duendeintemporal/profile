import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Languages from '@/components/Languages'
import BeyondCode from '@/components/BeyondCode'
import LearningAreas from '@/components/LearningAreas'
import ContactForm from '@/components/ContactForm'
import { supabase } from '@/lib/supabase'

async function getProjects() {
  'use cache'
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('featured', { ascending: false })
    .order('year', { ascending: false })
  return data ?? []
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400 mb-2">
          Proyectos
        </h2>
        <p className="text-slate-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Una selección de trabajos que combinan código, datos y creatividad.
        </p>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <Languages />
      <BeyondCode />
      <LearningAreas />
      <ContactForm />
    </main>
  )
}