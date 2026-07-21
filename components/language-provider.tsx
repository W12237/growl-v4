"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    team: "Team",
    portfolio: "Portfolio",
    process: "Process",
    contact: "Contact",
    chatWithUs: "Chat With Us",
    exploreServices: "Explore Services",
    
    heroTitle: "GROWL",
    heroSubtitle: "Intelligent Digital Solutions",
    heroDescription: "We don't believe in one-size-fits-all solutions. You bring the request — we bring the mix of tools that will actually work.",
    
    servicesTitle: "Services That Deliver",
    servicesDesc: "We specialize in creating tailored solutions that transform businesses through intelligent design and technology.",
    ourExpertise: "OUR EXPERTISE",
    whatWeBuild: "What We Build",
    capabilities: "CAPABILITIES",
    buildDesc: "Complete solutions for every stage of your journey. From custom systems to full-cycle launches.",
    
    ourProcessTitle: "Our Process",
    processDesc: "A 6-step framework designed to deliver results at every stage of your journey.",
    howWeWork: "HOW WE WORK",
    
    ourTeam: "Meet Our Team",
    teamDesc: "Talented professionals passionate about creating exceptional digital experiences.",
    
    ourPortfolio: "Our Work",
    portfolioDesc: "Showcase of innovative projects and successful client partnerships.",
    viewProject: "View Project",
    
    lightMode: "Light",
    darkMode: "Dark",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "عن",
    team: "الفريق",
    portfolio: "أعمالنا",
    process: "العملية",
    contact: "اتصل",
    chatWithUs: "تحدث معنا",
    exploreServices: "استكشف الخدمات",
    
    heroTitle: "غرول",
    heroSubtitle: "حلول رقمية ذكية",
    heroDescription: "نحن لا نؤمن بحل واحد يناسب الجميع. تحضر الطلب - نحن نأتي بمزيج الأدوات التي تعمل بالفعل.",
    
    servicesTitle: "خدمات تحقق النتائج",
    servicesDesc: "نتخصص في إنشاء حلول مخصصة تحول الشركات من خلال التصميم والتكنولوجيا الذكية.",
    ourExpertise: "خبراتنا",
    whatWeBuild: "ما نبنيه",
    capabilities: "القدرات",
    buildDesc: "حلول شاملة لكل مرحلة من رحلتك. من الأنظمة المخصصة إلى الإطلاقات الشاملة.",
    
    ourProcessTitle: "عملية العمل",
    processDesc: "إطار عمل من 6 خطوات مصمم لتحقيق النتائج في كل مرحلة من رحلتك.",
    howWeWork: "كيف نعمل",
    
    ourTeam: "قابل فريقنا",
    teamDesc: "متخصصون موهوبون شغوفون بإنشاء تجارب رقمية استثنائية.",
    
    ourPortfolio: "أعمالنا",
    portfolioDesc: "عرض المشاريع المبتكرة والشراكات الناجحة مع العملاء.",
    viewProject: "عرض المشروع",
    
    lightMode: "فاتح",
    darkMode: "مظلم",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    const initialLang = stored || "en"
    
    setLanguageState(initialLang)
    setMounted(true)
    document.documentElement.lang = initialLang
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr"
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  if (!mounted) return <>{children}</>

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

export function useTranslation() {
  const { language } = useLanguage()
  return translations[language]
}
