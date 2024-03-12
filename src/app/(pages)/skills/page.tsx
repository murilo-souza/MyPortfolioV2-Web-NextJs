import { SkillsFilterTabs } from '@/app/components/SkillsFilterTabs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Habilidades',
}

export default function Skills() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Habilidades
      </h1>
      <SkillsFilterTabs />
    </>
  )
}
