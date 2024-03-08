'use client'

import Image from 'next/image'
import { Button } from './button'
import * as Dialog from '@radix-ui/react-dialog'
import { twMerge } from 'tailwind-merge'
import { Github, TestTube2, X } from 'lucide-react'
import { CardProps } from './ProjectsFilterTabs'
import { motion } from 'framer-motion'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function CardProject(card: CardProps) {
  const StackArray = card.stacks.split(', ')

  return (
    <Dialog.Root modal>
      <motion.div
        variants={item}
        className="p-1 bg-zinc-800 border border-zinc-700 rounded-[10px] flex flex-col gap-3"
      >
        <Image
          src={card.bannerUrl}
          width={290}
          height={203}
          quality={100}
          alt="project"
          className="w-full h-full rounded-md overflow-hidden object-cover"
        />

        <h2 className="text-xl font-medium">{card.title}</h2>

        <Dialog.Trigger asChild>
          <Button variant="primary" className="w-full mt-auto">
            Detalhes
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 bottom-0 z-40">
            <Dialog.Content
              className={twMerge(
                'bg-zinc-800 border border-zinc-700 p-2 flex flex-col gap-2 overflow-y-auto',
                'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[100vw] h-[100vh] lg:max-w-[450px] lg:max-h-[90vh] translate-x-[-50%] translate-y-[-50%] rounded-[10px] focus:outline-none',
              )}
            >
              <Image
                src={card.bannerUrl}
                width={330}
                height={243}
                quality={100}
                alt="project"
                className="w-full rounded-md"
              />
              <Dialog.Title className="text-2xl text-zinc-200 font-semibold">
                {card.title}
              </Dialog.Title>
              <Dialog.Description className="flex flex-col gap-4 mb-8">
                <p className="text-zinc-200">{card.description}</p>

                <h3 className="text-zinc-200 text-xl font-semibold">
                  Principais Tecnologias
                </h3>

                <ul className="list-disc ml-5 text-zinc-200">
                  {StackArray.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </Dialog.Description>

              <div className="flex items-center justify-between mt-auto">
                <a
                  href={card.repoUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-github px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
                >
                  <Github />
                  Repositório
                </a>

                {card.testUrl && (
                  <a
                    href={card.testUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-violet-600 px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
                  >
                    <TestTube2 />
                    Testar
                  </a>
                )}
              </div>
              <Dialog.Close asChild>
                <button className="absolute top-5 right-5 outline-none">
                  <X className="h-7 w-7 text-zinc-200" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </motion.div>
    </Dialog.Root>
  )
}
