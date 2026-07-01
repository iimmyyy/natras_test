import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

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
  title: 'NuTras Didactic — Industrial & Engineering Training Systems',
  description:
    'NuTras Didactic Co., Ltd. develops engineering training systems (pneumatics, mechanical alignment, hydrogen power) and distributes Lucas-Nülle training systems in Thailand.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans), sans-serif' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
