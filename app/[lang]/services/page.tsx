import type { Metadata } from "next"
import { ServicesPageContent } from "@/components/services-page-content"
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
      ? "服務 | 飛英科技"
      : "Services | FIT Surgical Instruments",
    description: lang === "zh"
      ? "專家諮詢、快速回覆和可靠的售後服務。定制器械、维修保養和全球運輸。"
      : "Expert consultation, fast response, and reliable after-sales support. Customization, repair, and worldwide shipping.",
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        en: "/en/services",
        "zh-Hant": "/zh/services",
      },
    },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return <ServicesPageContent />
}
