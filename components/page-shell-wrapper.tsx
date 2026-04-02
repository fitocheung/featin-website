"use client"

import { LanguageProvider } from "@/lib/language-context"
import { SitePageShell } from "@/components/site-page-shell"
import { type ReactNode } from "react"

export function PageShellWrapper({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SitePageShell>
        {children}
      </SitePageShell>
    </LanguageProvider>
  )
}
