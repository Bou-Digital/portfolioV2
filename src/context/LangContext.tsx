import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang, type TranslationKey } from '../i18n/translations'

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (key) => key as string,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return (localStorage.getItem('portfolio-lang') as Lang) || 'fr'
    } catch {
      return 'fr'
    }
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('portfolio-lang', l) } catch {}
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [])

  const t = (key: TranslationKey): string =>
    (translations[lang] as Record<string, string>)[key] ?? key

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
