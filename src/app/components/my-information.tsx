'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ContactButton } from './contact-button'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { gql, useQuery } from '@apollo/client'
import { SkeletonMe } from './Loader/Home/skeleton-me'
import { SkeletonContact } from './Loader/Home/skeleton-contact'

interface MeProps {
  me: string
  eMail: string
  phone: string
  linkedInUrl: string
  gitHubUrl: string
  phoneToWhatsapp: string
}

const GET_MY_INFO_QUERY = gql`
  query MyQuery {
    information(where: { id: "cleanvw285uj00blrgj4dcli7" }) {
      me
      eMail
      phone
      linkedInUrl
      gitHubUrl
      phoneToWhatsapp
    }
  }
`

export function MyInformation() {
  const { data, loading } = useQuery<{ information: MeProps }>(
    GET_MY_INFO_QUERY,
    {
      fetchPolicy: 'cache-and-network',
    },
  )
  return (
    <div
      className={twMerge(
        'mt-5',
        'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:justify-center',
      )}
    >
      <div>
        <Image
          src="/me.png"
          width={486}
          height={501}
          quality={100}
          alt=""
          className="lg:hidden mb-3"
        />
        <h2 className="font-semibold text-2xl text-zinc-100">Sobre mim</h2>
        <br />
        {loading ? (
          <SkeletonMe />
        ) : (
          <p className="text-zinc-100 text-justify text-xl">
            {data?.information.me}
          </p>
        )}
      </div>
      <Image
        src="/me.png"
        width={486}
        height={501}
        quality={100}
        alt=""
        className="hidden lg:block"
      />

      <div className="mt-7">
        <h2 className="text-zinc-100 text-2xl font-semibold">
          Informações de contato
        </h2>
        <div className="lg:grid lg:grid-cols-2 flex flex-col mt-5 gap-5">
          {loading ? (
            <>
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
            </>
          ) : (
            <>
              <ContactButton
                redirectTo={data?.information.linkedInUrl ?? ''}
                icon={Linkedin}
                title="LinkedIn"
              />
              <ContactButton
                redirectTo={`mailto:${data?.information.eMail}`}
                icon={Mail}
                title={data?.information.eMail ?? ''}
              />
              <ContactButton
                redirectTo={data?.information.gitHubUrl ?? ''}
                icon={Github}
                title="GitHub"
              />
              <ContactButton
                redirectTo={`https://api.whatsapp.com/send?phone=${data?.information.phoneToWhatsapp}&app_absent=1`}
                icon={Phone}
                title={data?.information.phone ?? ''}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
