'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from '../Tabs/tab-item'
import { useState } from 'react'
import { TabContent } from '../Tabs/tab-content'
import { CardProject } from '../CardProject'
import { gql, useQuery } from '@apollo/client'
import { ContentWrapper } from './content-wrapper'
import { SkeletonCard } from '../Loader/skeleton-card'

const GET_CARDS_QUERY = gql`
  query MyQuery {
    cards(first: 100, orderBy: createdAt_DESC) {
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
  id: string
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

  const { data, loading } = useQuery<{ cards: CardProps[] }>(GET_CARDS_QUERY, {
    fetchPolicy: 'cache-first',
  })

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700 sticky top-0">
            <TabItem
              disabled={loading}
              value="tab1"
              title="Todos"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              disabled={loading}
              value="tab2"
              title="Web"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              disabled={loading}
              value="tab3"
              title="Mobile"
              isSelected={currentTab === 'tab3'}
            />
          </Tabs.List>
          <TabContent value="tab1">
            <ContentWrapper>
              {loading ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : (
                <>
                  {data?.cards.map((card) => (
                    <CardProject
                      id={card.id}
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
                </>
              )}
            </ContentWrapper>
          </TabContent>
          <TabContent value="tab2">
            <ContentWrapper>
              {data?.cards
                .filter((card) => card.tag === 'web')
                .map((card) => (
                  <CardProject
                    id={card.id}
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
            </ContentWrapper>
          </TabContent>
          <TabContent value="tab3">
            <ContentWrapper>
              {data?.cards
                .filter((card) => card.tag === 'mobile')
                .map((card) => (
                  <CardProject
                    id={card.id}
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
            </ContentWrapper>
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
