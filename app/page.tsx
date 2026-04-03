import { defaultLanguage } from "@/lib/i18n-config"

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLanguage}`} />
      </head>
      <body>
        <p>Redirecting to <a href={`/${defaultLanguage}`}>/{defaultLanguage}</a>...</p>
      </body>
    </html>
  )
}
