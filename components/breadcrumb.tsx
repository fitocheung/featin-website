"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { translations } from "@/lib/translations"

interface BreadcrumbItem {
  labelKey: string
  href: string
}

const routeLabels: Record<string, { en: string; zh: string }> = {
  "": { en: "Home", zh: "主頁" },
  products: { en: "Products", zh: "產品" },
  services: { en: "Services", zh: "服務" },
  "about-us": { en: "About Us", zh: "關於我們" },
  contact: { en: "Contact", zh: "聯絡我們" },
  "pdf-catalogue": { en: "PDF Catalogues", zh: "PDF 目錄" },
}

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const lang = segments[0] === "zh" ? "zh" : "en"
  const t = translations[lang]

  const items: BreadcrumbItem[] = [
    { labelKey: "navHome", href: `/${lang}` },
  ]

  segments.slice(1).forEach((segment) => {
    const label = routeLabels[segment]
    if (label) {
      items.push({
        labelKey: segment === "" ? "navHome" : segment.replace(/-/g, "") || "navHome",
        href: `/${lang}/${segment === "" ? "" : segment}`,
      })
    }
  })

  return (
    <nav aria-label="Breadcrumb" className="container py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground">
                {routeLabels[segments[index]]?.[lang] || segments[index]}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {routeLabels[segments[index]]?.[lang] || segments[index]}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
