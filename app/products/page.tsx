import type { Metadata } from "next"
import { ProductsPageContent } from "@/components/products-page-content"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Products | FIT Surgical Instruments - Ophthalmic, Hair Transplant & Plastic Surgery",
  description: "Explore our range of precision surgical instruments. Ophthalmic tools, hair transplant equipment, and plastic surgery instruments. Download PDF catalogues and request quotations.",
  keywords: ["surgical instruments", "ophthalmic instruments", "hair transplant tools", "plastic surgery equipment", "Hong Kong medical instruments"],
  alternates: {
    canonical: "/products",
    languages: {
      "en": "/products",
      "zh-Hant": "/products",
    },
  },
  openGraph: {
    title: "Products | FIT Surgical Instruments",
    description: "Explore our range of precision surgical instruments. Ophthalmic tools, hair transplant equipment, and plastic surgery instruments.",
    url: "/products",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | FIT Surgical Instruments",
    description: "Explore our range of precision surgical instruments.",
  },
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Surgical Instruments - Ophthalmic, Hair Transplant & Plastic Surgery",
  "description": "High-quality surgical instruments from Hong Kong supplier with over 20 years of experience.",
  "url": "https://www.852featin.com/products",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Ophthalmic Surgical Instruments",
      "description": "Precision instruments for ophthalmic surgery including cataract surgery, LASIK, and other eye procedures.",
      "url": "https://www.852featin.com/products",
      "brand": {
        "@type": "Brand",
        "name": "HK Feat In Technology"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "HK Feat In Technology"
      },
      "category": "Medical Instruments"
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Hair Transplant Instruments",
      "description": "Professional hair transplant tools including FUE and FUT instruments for hair restoration procedures.",
      "url": "https://www.852featin.com/products",
      "brand": {
        "@type": "Brand",
        "name": "HK Feat In Technology"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "HK Feat In Technology"
      },
      "category": "Medical Instruments"
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Plastic Surgery Instruments",
      "description": "Comprehensive range of plastic and reconstructive surgery instruments for various procedures.",
      "url": "https://www.852featin.com/products",
      "brand": {
        "@type": "Brand",
        "name": "HK Feat In Technology"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "HK Feat In Technology"
      },
      "category": "Medical Instruments"
    },
    {
      "@type": "Product",
      "position": 4,
      "name": "ENT Surgical Instruments",
      "description": "Ear, nose, and throat surgical instruments for otolaryngology procedures.",
      "url": "https://www.852featin.com/products",
      "brand": {
        "@type": "Brand",
        "name": "HK Feat In Technology"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "HK Feat In Technology"
      },
      "category": "Medical Instruments"
    }
  ]
}

export default function ProductsPage() {
  return (
    <SitePageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductsPageContent />
    </SitePageShell>
  )
}
