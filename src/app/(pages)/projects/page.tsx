import { ProjectsFilterTabs } from '@/app/components/ProjectsFilterTabs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos',
}

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 h-11">
        Projetos
      </h1>
      <ProjectsFilterTabs />
    </>
  )
}
