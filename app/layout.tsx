import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

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
  },
  twitter: {
    card: "summary_large_image",
    title: "emay.me - Fast, Private Email Built on JMAP",
    description: "Experience a faster, more private email with emay.me, built on the modern JMAP protocol.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FF2670",
    generator: 'v0.dev'
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
            }),
          }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "emay.me Android App",
              operatingSystem: "ANDROID",
              applicationCategory: "CommunicationApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              publisher: {
                "@type": "Organization",
                name: "emay.me",
                logo: {
                  "@type": "ImageObject",
                  url: "https://emay.me/emay-icon.svg",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
