import type { Metadata } from "next"
import { PdfCatalogueSection } from "@/components/pdf-catalogue"

export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  
  return {
    title: lang === "zh" 
      ? "PDF 目錄 | 飛英科技"
      : "PDF Catalogues | FIT Surgical Instruments",
    description: lang === "zh"
      ? "下載我們的完整產品目錄，包括眼科、植髮、整形外科和手術器械目錄。"
      : "Download our complete product catalogues including ophthalmic, hair transplant, plastic surgery, and general surgical instruments.",
    alternates: {
      canonical: `/${lang}/pdf-catalogue`,
      languages: {
        en: "/en/pdf-catalogue",
        "zh-Hant": "/zh/pdf-catalogue",
      },
    },
  }
}

export default async function PdfCataloguePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return <PdfCatalogueSection />
}
