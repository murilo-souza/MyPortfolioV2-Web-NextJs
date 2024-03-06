'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'
import { useState } from 'react'
import { TabContent } from './tab-content'
import { CardProject } from '../card-project'
import { gql, useQuery } from '@apollo/client'

const GET_CARDS_QUERY = gql`
  query MyQuery {
    cards(first: 100, orderBy: testUrl_ASC) {
      bannerUrl
      id
      title
      description
      testUrl
      repoUrl
      stacks
      tag
    }
  }
`

export interface CardProps {
  bannerUrl: string
  title: string
  description: string
  repoUrl: string
  testUrl: string | null
  stacks: string
  tag: 'web' | 'mobile'
}

export function ProjectsFilterTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  const { data } = useQuery<{ cards: CardProps[] }>(GET_CARDS_QUERY, {
    fetchPolicy: 'cache-and-network',
  })

  console.log(data?.cards)
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
              title="Web"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Mobile"
              isSelected={currentTab === 'tab3'}
            />
          </Tabs.List>
          <TabContent value="tab1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data?.cards.map((card) => (
                <CardProject
                  key={card.title}
                  bannerUrl={card.bannerUrl}
                  title={card.title}
                  description={card.description}
                  repoUrl={card.repoUrl}
                  testUrl={card.testUrl}
                  stacks={card.stacks}
                  tag={card.tag}
                />
              ))}
            </div>
          </TabContent>
          <TabContent value="tab2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data?.cards
                .filter((card) => card.tag === 'web')
                .map((card) => (
                  <CardProject
                    key={card.title}
                    bannerUrl={card.bannerUrl}
                    title={card.title}
                    description={card.description}
                    repoUrl={card.repoUrl}
                    testUrl={card.testUrl}
                    stacks={card.stacks}
                    tag={card.tag}
                  />
                ))}
            </div>
          </TabContent>
          <TabContent value="tab3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data?.cards
                .filter((card) => card.tag === 'mobile')
                .map((card) => (
                  <CardProject
                    key={card.title}
                    bannerUrl={card.bannerUrl}
                    title={card.title}
                    description={card.description}
                    repoUrl={card.repoUrl}
                    testUrl={card.testUrl}
                    stacks={card.stacks}
                    tag={card.tag}
                  />
                ))}
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
