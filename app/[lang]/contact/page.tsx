import type { Metadata } from "next"
import { ContactPageContent } from "@/components/contact-page-content"

export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  
  return {
    title: lang === "zh" 
      ? "聯絡我們 | 飛英科技"
      : "Contact Us | HK Feat In Technology",
    description: lang === "zh"
      ? "歡迎就產品諮詢、報價請求和目錄支援與我們聯繫。我們通常在24小時內回覆。"
      : "Get in touch for product consultation, quotation requests, and catalogue support. We usually reply within 24 hours.",
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        en: "/en/contact",
        "zh-Hant": "/zh/contact",
      },
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return <ContactPageContent />
}
