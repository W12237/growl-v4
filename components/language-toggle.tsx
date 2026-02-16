"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800 hover:text-[#C6FF3A] hover:border-[#C6FF3A]/40 transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-950/95 border-gray-800">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer transition-colors ${
            language === "en" ? "bg-[#C6FF3A]/10 text-[#C6FF3A]" : "text-gray-200 hover:text-[#C6FF3A]"
          }`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ar")}
          className={`cursor-pointer transition-colors ${
            language === "ar" ? "bg-[#C6FF3A]/10 text-[#C6FF3A]" : "text-gray-200 hover:text-[#C6FF3A]"
          }`}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}