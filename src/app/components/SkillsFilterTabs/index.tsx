'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'
import { useState } from 'react'
import { TabContent } from './tab-content'

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
              value="tab3"
              title="Serviços"
              isSelected={currentTab === 'tab3'}
            />
          </Tabs.List>
          <TabContent value="tab1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4"></div>
          </TabContent>
          <TabContent value="tab2">
            <h1>Hel11ws1lo</h1>
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
