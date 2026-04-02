import type { Metadata } from "next"
import { HomeHero } from "@/components/home-hero"
import { SpecialtiesSection } from "@/components/specialties-section"
import { WhyChooseFit } from "@/components/why-choose-fit"
import { ContactCta } from "@/components/contact-cta"
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
      ? "香港飛英科技 | 手術器械供應商"
      : "HK Feat In Technology | Surgical Instruments Supplier",
    description: lang === "zh"
      ? "香港頂尖手術器械供應商，專營眼科、植髮、整形外科器械。20年行業經驗，全球醫療專業人員信賴。"
      : "Hong Kong's leading surgical instruments supplier. Specializing in ophthalmic, hair transplant, and plastic surgery instruments with over 20 years of experience.",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        "zh-Hant": "/zh",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "zh" ? "zh_HK" : "en_HK",
      alternateLocale: lang === "zh" ? ["en"] : ["zh-Hant"],
      url: `${baseUrl}/${lang}`,
      siteName: "HK Feat In Technology",
      title: lang === "zh" 
        ? "香港飛英科技 | 手術器械供應商"
        : "HK Feat In Technology | Surgical Instruments Supplier",
      images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  return (
    <>
      <HomeHero />
      <SpecialtiesSection />
      <WhyChooseFit />
      <ContactCta />
    </>
  )
}
