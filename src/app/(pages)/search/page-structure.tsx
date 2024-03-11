'use client'

import { CardProps } from '@/app/components/ProjectsFilterTabs'
import { gql, useQuery } from '@apollo/client'
import { CardProject } from '@/app/components/CardProject'
import { SkeletonCard } from '@/app/components/Loader/skeleton-card'

interface PageStructureProps {
  query: string
}

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

export function PageStructure({ query }: PageStructureProps) {
  const { data, loading } = useQuery<{ cards: CardProps[] }>(GET_CARDS_QUERY, {
    fetchPolicy: 'cache-first',
  })

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {data?.cards
            .filter((item) =>
              item.stacks.toLowerCase().includes(query.toLowerCase()),
            )
            .map((card) => (
              <CardProject
                key={card.id}
                bannerUrl={card.bannerUrl}
                description={card.description}
                id={card.id}
                repoUrl={card.repoUrl}
                stacks={card.stacks}
                title={card.title}
                testUrl={card.testUrl}
                tag={card.tag}
              />
            ))}
        </>
      )}
    </div>
  )
}
