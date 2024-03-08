'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'
import { useState } from 'react'
import { TabContent } from './tab-content'
import { SkillBadge } from '../skill-badge'
import { gql, useQuery } from '@apollo/client'

const GET_SKILL_QUERY = gql`
  query MyQuery {
    skills(first: 100, orderBy: skill_ASC) {
      id
      skill
      tag
    }
  }
`

interface SkillProps {
  id: string
  skill: string
  tag: 'front' | 'back' | 'service' | 'both'
}

export function SkillsFilterTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  const { data } = useQuery<{ skills: SkillProps[] }>(GET_SKILL_QUERY, {
    fetchPolicy: 'cache-and-network',
  })

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
              {data?.skills.map((item) => (
                <SkillBadge key={item.id} title={item.skill} />
              ))}
            </div>
          </TabContent>
          <TabContent value="tab2">
            <div className="flex flex-wrap gap-2">
              {data?.skills
                .filter((item) => item.tag === 'front' || item.tag === 'both')
                .map((item) => <SkillBadge key={item.id} title={item.skill} />)}
            </div>
          </TabContent>
          <TabContent value="tab3">
            <div className="flex flex-wrap gap-2">
              {data?.skills
                .filter((item) => item.tag === 'back' || item.tag === 'both')
                .map((item) => <SkillBadge key={item.id} title={item.skill} />)}
            </div>
          </TabContent>
          <TabContent value="tab4">
            <div className="flex flex-wrap gap-2">
              {data?.skills
                .filter((item) => item.tag === 'service')
                .map((item) => <SkillBadge key={item.id} title={item.skill} />)}
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
