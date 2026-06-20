import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/components/LangContext'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'NUTRAS DIDACTIC — Engineering Teaching Systems',
  description: 'Didactic training systems for university engineering faculties. Built to international standards.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
