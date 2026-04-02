"use client"

import { createContext, useContext, type ReactNode } from "react"
import { translations } from "./translations"
import { languages, type Language, defaultLanguage, languageNames } from "./i18n-config"

interface I18nContextValue {
  lang: Language
  t: typeof translations[Language]
  languages: readonly Language[]
  languageNames: typeof languageNames
  defaultLanguage: Language
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  t: translations["en"],
  languages,
  languageNames,
  defaultLanguage,
})

export function I18nProvider({ 
  children, 
  lang,
}: { 
  children: ReactNode
  lang: Language,
}) {
  const t = translations[lang]
  
  return (
    <I18nContext.Provider value={{ lang, t, languages, languageNames, defaultLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

export function useLanguage() {
  const { t, lang } = useI18n()
  return { t, lang }
}
