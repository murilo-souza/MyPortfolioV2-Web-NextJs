'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { CardProps } from '../ProjectsFilterTabs'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Modal } from './modal'

const item = {
  hidden: { opacity: 0.25 },
  visible: {
    opacity: 1,
  },
}

export function CardProject(card: CardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  return (
    <>
      <motion.div
        variants={item}
        layoutId={card.id}
        className="p-1 bg-zinc-800 border border-zinc-700 rounded-[10px] flex flex-col gap-3"
      >
        <Image
          src={card.bannerUrl}
          width={290}
          height={203}
          alt="project"
          className="w-full h-full rounded-md overflow-hidden object-cover"
        />

        <motion.h2 className="text-xl font-medium">{card.title}</motion.h2>

        <motion.button
          className={twMerge(
            'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-600 w-full mt-auto',
            'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
            'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
            'active:opacity-80',
          )}
          onClick={() => setSelectedId(card.id)}
        >
          Detalhes
        </motion.button>
      </motion.div>

      {selectedId && (
        <Modal
          card={card}
          onClose={() => setSelectedId(null)}
          selectedId={selectedId}
        />
      )}
    </>
  )
}
