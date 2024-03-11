import type { Metadata } from 'next'
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import './globals.css'
import { Sidebar } from './components/Sidebar'
import { twMerge } from 'tailwind-merge'

const font = JetBrainsMono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | My Portfolio',
    default: 'My Portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div
          className={twMerge(
            'min-h-screen antialiased text-zinc-900',
            'lg:grid lg:grid-cols-app',
            'dark:bg-zinc-900 dark:text-zinc-200',
          )}
        >
          <Sidebar />
          <main
            className={twMerge(
              'max-w-[100vw] px-4 pb-12 pt-24',
              'lg:col-start-2 lg:px-8 lg:pt-8',
            )}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
