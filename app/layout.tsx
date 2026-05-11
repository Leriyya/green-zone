import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { headers } from 'next/headers'
import type { Lang } from '@/lib/i18n'
import './globals.scss'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GreenZone PC — Ultimate Gaming Builds',
  description: 'Custom gaming PC builds engineered for dominance. Next-gen rigs built for those who refuse to compromise.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') as Lang) ?? 'en'

  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
