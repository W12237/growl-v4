import type { Metadata } from "next"
import type React from "react"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import ClickSpark from "@/components/click-spark"
import { LanguageProvider } from "@/components/language-provider"
import { LenisProvider } from "@/components/lenis-provider"
import { ThemeProvider } from "@/components/Main"

import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Growl Agency | Digital Solutions, Strategy & Growth",
    template: "%s | Growl Agency",
  },
  description:
    "Growl Agency is a premier full-service marketing and tech agency engineering intelligent digital solutions, high-performance web platforms, Shopify integrations, and automated growth systems.",
  keywords: [
    "Growl Agency",
    "Digital Marketing Agency",
    "Web Development",
    "Shopify Integration",
    "Automation Workflows",
    "Brand Transformation",
    "Software Solutions",
  ],
  authors: [{ name: "Growl Agency" }],
  creator: "Growl Agency",
  publisher: "Growl Agency",
  metadataBase: new URL("https://www.growl.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.growl.cloud",
    title: "Growl Agency | Digital Solutions, Strategy & Growth",
    description:
      "Engineering high-performance technical frameworks, scalable growth systems, and elite brand transformations.",
    siteName: "Growl Agency",
    images: [
      {
        url: "/images/grwol-logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Growl Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growl Agency | Digital Solutions, Strategy & Growth",
    description:
      "Engineering high-performance technical frameworks, scalable growth systems, and elite brand transformations.",
    images: ["/images/grwol-logo-bg.png"],
  },
  icons: {
    icon: "/images/grwol-logo-bg.png",
    shortcut: "/images/grwol-logo-bg.png",
    apple: "/images/grwol-logo-bg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} min-h-screen bg-white antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <LenisProvider>
              <ClickSpark
                sparkColor="#B6FF2E"
                sparkSize={14}
                sparkRadius={25}
                sparkCount={10}
                duration={500}
                easing="ease-out"
              >
                {children}
              </ClickSpark>
            </LenisProvider>
          </LanguageProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}