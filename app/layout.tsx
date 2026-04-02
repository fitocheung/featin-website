import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import JsonLd from "@/components/json-ld"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.852featin.com"),
  title: {
    default: "HK Feat In Technology | Hong Kong Surgical Instruments Supplier",
    template: "%s | HK Feat In Technology",
  },
  description: "HK Feat In Technology supplies high-quality surgical instruments including ophthalmic, hair transplant, ENT, and plastic surgery instruments. Established in Hong Kong with over 20 years of experience.",
  openGraph: {
    type: "website",
    locale: "en_HK",
    alternateLocale: ["zh-Hant"],
    url: "https://www.852featin.com",
    siteName: "HK Feat In Technology",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={cn("min-h-full flex flex-col antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
