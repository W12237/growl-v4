"use client"

import { ThemeProvider } from "@/components/Main"
import { LanguageProvider } from "@/components/language-provider"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ClickSpark
          sparkColor="#B6FF2E"
          sparkSize={14}
          sparkRadius={25}
          sparkCount={10}
          duration={500}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
      </LanguageProvider>
    </ThemeProvider>
  )
}
