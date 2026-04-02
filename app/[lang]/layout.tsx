import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { languages, type Language } from "@/lib/i18n-config"

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!languages.includes(lang as Language)) {
    return {}
  }

  const baseUrl = "https://www.852featin.com"
  
  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        "zh-Hant": "/zh",
      },
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  if (!languages.includes(lang as Language)) {
    notFound()
  }

  return <>{children}</>
}
