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
    default: "Growl Agency",
    template: "%s | Growl Agency",
  },
  description:
    "Growl Agency creates intelligent digital solutions through strategy, design, technology, and automation.",
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