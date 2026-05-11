'use client'

import { createContext, useContext } from 'react'
import { Lang, Translation, translations } from '@/lib/i18n'

type LanguageContextType = {
  lang: Lang
  t: Translation
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: translations.en,
})

export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
