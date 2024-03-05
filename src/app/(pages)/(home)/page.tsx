import { ContactButton } from '@/app/components/contact-button'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <>
      <h1
        className={twMerge(
          'hidden',
          'lg:block lg:text-3xl lg:font-medium lg:text-zinc-900',
          'dark:text-zinc-100',
        )}
      >
        Inicio
        <div className="w-full h-px bg-zinc-600" />
      </h1>

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
          <p className="text-zinc-100 text-justify text-xl">
            Olá! 👋 Sou Murilo Leme de Souza, um desenvolvedor front-end com
            experiência sólida em criar experiências web e mobile incríveis.
            Minhas habilidades abrangem um conjunto diversificado de
            tecnologias, permitindo-me construir aplicações robustas e
            escaláveis. Também tenho conhecimento com algumas tecnologias
            Back-end.
            <br />
            <br />
            Estou empenhado em criar experiências excepcionais para os usuários,
            utilizando meu conhecimento em tecnologias modernas e práticas de
            desenvolvimento ágeis. Sou motivado por desafios e estou sempre
            buscando aprender e evoluir na minha jornada profissional.
          </p>
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
            <ContactButton
              redirectTo="https://www.linkedin.com/in/murilo-leme-de-souza/"
              icon={Linkedin}
              title="LinkedIn"
            />
            <ContactButton
              redirectTo="mailto:murilo.l.souza232@gmail.com"
              icon={Mail}
              title="murilo.l.souza232@gmail.com"
            />
            <ContactButton
              redirectTo="https://github.com/murilo-souza"
              icon={Github}
              title="GitHub"
            />
            <ContactButton
              redirectTo="https://api.whatsapp.com/send?phone=5515991042412&app_absent=1"
              icon={Phone}
              title="+55 (15) 99104-2412"
            />
          </div>
        </div>
      </div>
    </>
  )
}
