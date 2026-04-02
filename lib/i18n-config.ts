// Shared language configuration (can be used in both server and client components)
export const languages = ["en", "zh"] as const
export type Language = typeof languages[number]

export const defaultLanguage: Language = "en"

export const languageNames: Record<Language, string> = {
  en: "English",
  zh: "中文",
}

export const baseUrl = "https://www.852featin.com"
