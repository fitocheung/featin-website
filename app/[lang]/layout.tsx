"use client"

import { LanguageProvider } from "@/lib/language-context"
import { SiteNavigation } from "@/components/site-navigation"
import { SiteFooter } from "@/components/site-footer"
import { type ReactNode } from "react"

export default function LangLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        <SiteNavigation />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
