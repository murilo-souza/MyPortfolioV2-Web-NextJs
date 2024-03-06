import { ProjectsFilterTabs } from '@/app/components/ProjectsFilterTabs'

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
