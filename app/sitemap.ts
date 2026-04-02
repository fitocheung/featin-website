import { MetadataRoute } from "next"
import { baseUrl, languages } from "@/lib/i18n-config"

export const dynamic = "force-static"

const routes = [
  { path: "", priority: 1.0, changefreq: "weekly" },
  { path: "products", priority: 0.9, changefreq: "weekly" },
  { path: "services", priority: 0.8, changefreq: "monthly" },
  { path: "about-us", priority: 0.8, changefreq: "monthly" },
  { path: "contact", priority: 0.7, changefreq: "monthly" },
  { path: "pdf-catalogue", priority: 0.9, changefreq: "weekly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${baseUrl}/${lang}${route.path ? `/${route.path}` : ""}`,
      lastModified: new Date(),
      changeFrequency: route.changefreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          languages.map((l) => [l, `${baseUrl}/${l}${route.path ? `/${route.path}` : ""}`])
        ),
      },
    }))
  )

  return staticPages
}
