'use client'

import Image from 'next/image'
import { Button } from './button'
import * as Dialog from '@radix-ui/react-dialog'
import { twMerge } from 'tailwind-merge'
import { Github, TestTube2 } from 'lucide-react'

export function CardProject() {
  return (
    <Dialog.Root>
      <div className="p-1 bg-zinc-800 border border-zinc-700 rounded-[10px] flex flex-col gap-3">
        <Image
          src="/cover.png"
          width={290}
          height={203}
          quality={100}
          alt="project"
          className="w-full"
        />

        <h2 className="text-xl font-medium">Ignite Shop</h2>

        <Dialog.Trigger asChild>
          <Button variant="primary" className="w-full">
            Detalhes
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 bottom-0">
            <Dialog.Content
              className={twMerge(
                'bg-zinc-800 border border-zinc-700 p-2 flex flex-col gap-2 overflow-y-auto',
                'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] lg:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[10px] focus:outline-none',
              )}
            >
              <Image
                src="/cover.png"
                width={330}
                height={243}
                quality={100}
                alt="project"
                className="w-full"
              />
              <Dialog.Title className="text-2xl text-zinc-200 font-semibold">
                Ignite Shop
              </Dialog.Title>
              <Dialog.Description className="flex flex-col gap-2">
                <p className="text-zinc-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  leo nunc, sagittis ultrices tempus eget, scelerisque non
                  sapien. Etiam ac maximus neque, et viverra odio.
                </p>

                <h3 className="text-zinc-200 text-xl font-semibold">
                  Principais Tecnologias
                </h3>

                <ul className="list-disc ml-5 text-zinc-200">
                  <li>Next js</li>
                  <li>Next js</li>
                  <li>Next js</li>
                  <li>Next js</li>
                </ul>
              </Dialog.Description>

              <div className="flex items-center justify-between mt-3">
                <a
                  href=""
                  className="flex items-center justify-center gap-2 bg-github px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
                >
                  <Github />
                  Repositório
                </a>

                <a
                  href=""
                  className="flex items-center justify-center gap-2 bg-violet-600 px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
                >
                  <TestTube2 />
                  Testar
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  )
}
