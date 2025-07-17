import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "emay.me - Fast, Private Email Built on JMAP",
  description:
    "Experience a faster, more private email with emay.me, built on the modern JMAP protocol. Say goodbye to slow, bloated inboxes and hello to instant sync.",
  keywords:
    "emay.me, jmap, fast email, secure email, private email, email client, android email app, imap alternative, lightweight email",
  authors: [{ name: "emay.me" }],
  creator: "emay.me",
  publisher: "emay.me",
  robots: "index, follow",
  openGraph: {
    title: "emay.me - Fast, Private Email Built on JMAP",
    description: "Experience a faster, more private email with emay.me, built on the modern JMAP protocol.",
    url: "https://emay.me",
    siteName: "emay.me",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "emay.me - Fast, Private Email Built on JMAP",
    description: "Experience a faster, more private email with emay.me, built on the modern JMAP protocol.",
  },
  alternates: {
    canonical: "https://emay.me",
    languages: {
      en: "https://emay.me",
      es: "https://emay.me/es",
    },
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF2670",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://emay.me" />
        <link rel="alternate" hrefLang="en" href="https://emay.me" />
        <link rel="alternate" hrefLang="es" href="https://emay.me/es" />
        <link rel="alternate" hrefLang="x-default" href="https://emay.me" />
        <meta name="google-site-verification" content="your-verification-code" />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "emay.me",
              url: "https://emay.me",
              inLanguage: ["en", "es"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
