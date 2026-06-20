'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { strings, Lang } from '@/lib/i18n'

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof strings['en']
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: strings.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, setLang, t: strings[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
