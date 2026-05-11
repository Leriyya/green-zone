import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { LANGS, Lang, translations } from '@/lib/i18n'
import { LanguageProvider } from '@/context/LanguageContext'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://greenzone-pc.com'

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = translations[lang] ?? translations.en

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        ...Object.fromEntries(LANGS.map(l => [l, `${BASE_URL}/${l}`])),
        'x-default': `${BASE_URL}/en`,
      },
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params

  if (!LANGS.includes(lang)) notFound()

  return <LanguageProvider lang={lang}>{children}</LanguageProvider>
}
