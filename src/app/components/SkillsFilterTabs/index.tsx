'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'
import { useState } from 'react'
import { TabContent } from './tab-content'
import { SkillBadge } from '../skill-badge'

export function SkillsFilterTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="Todos"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Front-end"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Back-end"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Serviços"
              isSelected={currentTab === 'tab4'}
            />
          </Tabs.List>
          <TabContent value="tab1">
            <div className="flex flex-wrap gap-2">
              <SkillBadge title="HTML" />
              <SkillBadge title="CSS" />
              <SkillBadge title="JavaScript" />
              <SkillBadge title="TypeScript" />
              <SkillBadge title="ReactJS" />
              <SkillBadge title="NextJS" />
              <SkillBadge title="HTML" />
              <SkillBadge title="CSS" />
              <SkillBadge title="JavaScript" />
              <SkillBadge title="TypeScript" />
              <SkillBadge title="ReactJS" />
              <SkillBadge title="NextJS" />
              <SkillBadge title="TailwindCSS" />
              <SkillBadge title="Prisma" />
              <SkillBadge title="Git" />
              <SkillBadge title="GitHub" />
              <SkillBadge title="Figma" />
              <SkillBadge title="TailwindCSS" />
              <SkillBadge title="Prisma" />
              <SkillBadge title="Git" />
              <SkillBadge title="GitHub" />
              <SkillBadge title="Figma" />
            </div>
          </TabContent>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
