import type { Metadata } from "next"
import { ProductsPageContent } from "@/components/products-page-content"
import { baseUrl } from "@/lib/i18n-config"

export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  
  return {
    title: lang === "zh" 
      ? "產品 | 飛英科技手術器械"
      : "Products | FIT Surgical Instruments",
    description: lang === "zh"
      ? "探索我們的精密手術器械系列。眼科工具、植髮設備和整形外科器械。下載 PDF 目錄並索取報價。"
      : "Explore our range of precision surgical instruments. Ophthalmic tools, hair transplant equipment, and plastic surgery instruments.",
    alternates: {
      canonical: `/${lang}/products`,
      languages: {
        en: "/en/products",
        "zh-Hant": "/zh/products",
      },
    },
  }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return <ProductsPageContent />
}
