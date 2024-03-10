import { AnimatePresence, motion } from 'framer-motion'
import { Github, TestTube2, X } from 'lucide-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { CardProps } from '../ProjectsFilterTabs'

interface ModalProps {
  card: CardProps
  selectedId: string
  onClose: () => void
}

export function Modal({ card, onClose, selectedId }: ModalProps) {
  const StackArray = card.stacks.split(', ')
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="bg-black/30 fixed inset-0 z-40"
        onClick={onClose}
      >
        <motion.div
          layoutId={selectedId}
          className={twMerge(
            'bg-zinc-800 border border-zinc-700 p-2 flex flex-col gap-2 overflow-y-auto',
            'fixed inset-0 lg:top-8 lg:left-[35%] lg:right-[35%] lg:max-w-[450px] lg:max-h-[90vh] rounded-[10px] focus:outline-none',
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
          <motion.h3 className="text-2xl text-zinc-200 font-semibold">
            {card.title}
          </motion.h3>
          <motion.div className="flex flex-col gap-4 mb-8">
            <motion.p className="text-zinc-200">{card.description}</motion.p>

            <motion.h3 className="text-zinc-200 text-xl font-semibold">
              Principais Tecnologias
            </motion.h3>

            <motion.ul className="list-disc ml-5 text-zinc-200">
              {StackArray.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="flex items-center justify-between mt-auto">
            <motion.a
              href={card.repoUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-github px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
            >
              <Github />
              Repositório
            </motion.a>

            {card.testUrl && (
              <motion.a
                href={card.testUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-violet-600 px-7 py-2 lg:px-11 lg:py-3 text-zinc-200 rounded-md"
              >
                <TestTube2 />
                Testar
              </motion.a>
            )}
          </motion.div>

          <motion.button
            className="absolute top-5 right-5 outline-none"
            onClick={onClose}
          >
            <X className="h-7 w-7 text-zinc-200" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
