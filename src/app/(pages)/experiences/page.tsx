import { Metadata } from 'next'
import { PageStructure } from './componentes/page-structure'

export const metadata: Metadata = {
  title: 'Experiencia',
}

export default function Experiences() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
        Experiência
      </h1>
      <div className="w-full h-px bg-zinc-600" />

      <PageStructure />
    </>
  )
}
