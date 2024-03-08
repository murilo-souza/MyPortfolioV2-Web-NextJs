'use client'

import { KnowledgeCard } from '@/app/components/knowledge-card'
import { ContentWrapper } from './content-wrapper'
import { gql, useQuery } from '@apollo/client'
import { SkeletonCertification } from '@/app/components/Loader/skeleton-certification'

interface KnowledgeCardProps {
  title: string
  description: string
  startDate: string
  endDate: string
  college: string
  tag: 'acf' | 'ctc'
}

const GET_CERTIFICATIONS_QUERY = gql`
  query MyQuery {
    certifications(first: 100, orderBy: start_DESC) {
      college
      description
      start
      tag
      title
      startDate
      endDate
    }
  }
`

export function PageStructure() {
  const { data, loading } = useQuery<{ certifications: KnowledgeCardProps[] }>(
    GET_CERTIFICATIONS_QUERY,
    {
      fetchPolicy: 'cache-first',
    },
  )
  return (
    <div className="flex gap-10 mt-14">
      <ContentWrapper title="Formação Acadêmica">
        {loading ? (
          <>
            <SkeletonCertification />
            <SkeletonCertification />
          </>
        ) : (
          <>
            {data?.certifications
              .filter((item) => item.tag === 'acf')
              .map((certification) => (
                <KnowledgeCard
                  key={certification.title}
                  college={certification.college}
                  description={certification.description}
                  endDate={certification.endDate}
                  startDate={certification.startDate}
                  title={certification.title}
                />
              ))}
          </>
        )}
      </ContentWrapper>
      <div className="w-0.5 bg-zinc-700 " />
      <ContentWrapper title="Certificações">
        {loading ? (
          <>
            <SkeletonCertification />
            <SkeletonCertification />
            <SkeletonCertification />
          </>
        ) : (
          <>
            {data?.certifications
              .filter((item) => item.tag === 'ctc')
              .map((certification) => (
                <KnowledgeCard
                  key={certification.title}
                  college={certification.college}
                  description={certification.description}
                  endDate={certification.endDate}
                  startDate={certification.startDate}
                  title={certification.title}
                />
              ))}
          </>
        )}
      </ContentWrapper>
    </div>
  )
}
