import type { Metadata } from "next"
import { AboutPageContent } from "@/components/about-page-content"
import { SitePageShell } from "@/components/site-page-shell"
import { languages } from "@/lib/i18n-config"

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  
  return {
    title: lang === "zh" 
      ? "關於我們 | 香港飛英科技"
      : "About Us | HK Feat In Technology",
    description: lang === "zh"
      ? "成立於香港，超過20年行業經驗。我們提供高品質精密手術器械，包括眼科、植髮和整形外科器械。"
      : "Established in Hong Kong with over 20 years of experience. High quality precision surgical instruments.",
    alternates: {
      canonical: `/${lang}/about-us`,
      languages: {
        en: "/en/about-us",
        "zh-Hant": "/zh/about-us",
      },
    },
  }
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return (
    <SitePageShell>
      <AboutPageContent />
    </SitePageShell>
  )
}
