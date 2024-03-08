'use client'

import { gql, useQuery } from '@apollo/client'
import { ContentWrapper } from '../../certifications/components/content-wrapper'
import { KnowledgeCard } from '@/app/components/knowledge-card'

interface KnowledgeCardProps {
  title: string
  description: string
  startDate: string
  endDate: string
  company: string
}

const GET_EXPERIENCES_QUERY = gql`
  query MyQuery {
    experiences(orderBy: start_DESC) {
      company
      endDate
      start
      startDate
      title
      description
    }
  }
`

export function PageStructure() {
  const { data } = useQuery<{ experiences: KnowledgeCardProps[] }>(
    GET_EXPERIENCES_QUERY,
    {
      fetchPolicy: 'cache-and-network',
    },
  )

  return (
    <div className="mt-14">
      <ContentWrapper title="Experiência profissional">
        <div className="grid grid-cols-2 gap-5">
          {data?.experiences.map((experience) => (
            <KnowledgeCard
              key={experience.title}
              college={experience.company}
              description={experience.description}
              endDate={experience.endDate}
              startDate={experience.startDate}
              title={experience.title}
            />
          ))}
        </div>
      </ContentWrapper>
    </div>
  )
}
