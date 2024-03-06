import { MyInformation } from '@/app/components/my-information'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function Home() {
  return (
    <>
      <h1
        className={twMerge(
          'hidden',
          'lg:block lg:text-3xl lg:font-medium lg:text-zinc-900',
          'dark:text-zinc-100',
        )}
      >
        Inicio
        <div className="w-full h-px bg-zinc-600" />
      </h1>

      <MyInformation />
    </>
  )
}
