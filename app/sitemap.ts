import { MetadataRoute } from 'next'
import { LANGS } from '@/lib/i18n'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://greenzone-pc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map(lang => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: lang === 'en' ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(LANGS.map(l => [l, `${BASE_URL}/${l}`])),
    },
  }))
}
