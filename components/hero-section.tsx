"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { 
  ArrowRight, 
  Globe, 
  Menu, 
  Moon, 
  Sun, 
  X, 
  Sparkles,
  CheckCircle2,
  Layers,
  MessageCircle
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "@/components/Main"

const copy = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Team", href: "#team" },
      { label: "Our Work", href: "#portfolio" },
    ],
    language: "العربية",
    contact: "Consult an Expert",
    eyebrow: "Global Standards · Cairo Operations",
    headingMain: "Architecting Digital Dominance",
    headingSub: "For Industry Leaders.",
    description: "Growl bridges the gap between elite full-stack web architecture, immersive brand engineering, and intelligent automation workflows. We turn complex business logic into high-velocity engines designed for predictable enterprise growth.",
    stats: [
      { label: "Deployment Velocity", value: "3.4x" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Conversion Lift", value: "+84%" }
    ],
    testimonial: '"This framework has completely transformed how our teams deploy architecture. We unlock engineering scalability by consolidating our workflow stack into one environment."',
    author: "Technical Operations Board",
    primaryCta: "Start Your Enterprise Project",
    secondaryCta: "Explore Architecture",
  },
  ar: {
    nav: [
      { label: "عن المنظومة", href: "#about" },
      { label: "الخدمات", href: "#services" },
      { label: "القدرات التشغيلية", href: "#capabilities" },
      { label: "الفريق القيادي", href: "#team" },
      { label: "أعمالنا", href: "#portfolio" },
    ],
    language: "English",
    contact: "استشارة الخبراء",
    eyebrow: "معايير عالمية · تنفيذ من القاهرة",
    headingMain: "هندسة الريادة الرقمية",
    headingSub: "للمؤسسات وقادة القطاعات.",
    description: "تدمج Growl أحدث تقنيات الويب الشامل، وهندسة العلامات التجارية المتقدمة، وأنظمة الأتمتة الذكية. نحول تعقيدات العمل إلى محركات برمجية عالية السرعة مصممة لتحقيق نمو مؤسسي مستدام.",
    stats: [
      { label: "سرعة النشر والتطوير", value: "3.4x" },
      { label: "استقرار الأنظمة", value: "99.99%" },
      { label: "معدل نمو التحويل", value: "+84%" }
    ],
    testimonial: '"لقد أحدثت هذه المنظومة تحولاً جذرياً في آلية نشر البرمجيات لدينا. نمتلك الآن القدرة على التوسع الهندسي عبر دمج كامل البنية التحتية في بيئة تشغيلية واحدة."',
    author: "مجلس العمليات التقنية",
    primaryCta: "ابدأ مشروعك المؤسسي",
    secondaryCta: "استكشف البنية التقنية",
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const reduceMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      dir={isRtl ? "rtl" : "ltr"} 
      className="relative isolate overflow-hidden bg-[#fafaf6] dark:bg-[#07050b] text-[#141414] dark:text-white transition-colors duration-500 min-h-screen flex flex-col justify-between py-6 sm:py-8"
    >
      {/* Enhanced Multi-Layer Mesh & Brand Gradient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#66489312_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_top,#66489318_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6648930a_1px,transparent_1px),linear-gradient(to_bottom,#6648930a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#d0fa2c04_1px,transparent_1px),linear-gradient(to_bottom,#d0fa2c04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        
        {/* Glowing Ambient Brand Orbs (#d0fa2c & #664893) */}
        <motion.div 
          animate={reduceMotion ? {} : { 
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] ltr:right-[12%] rtl:left-[12%] h-[500px] w-[500px] rounded-full bg-[#664893]/15 dark:bg-[#664893]/25 blur-[130px]" 
        />
        <motion.div 
          animate={reduceMotion ? {} : { 
            scale: [1, 1.25, 1],
            x: [0, -50, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] ltr:left-[8%] rtl:right-[8%] h-[600px] w-[600px] rounded-full bg-[#d0fa2c]/10 dark:bg-[#d0fa2c]/10 blur-[150px]" 
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Professional Frosted Navigation Bar with Logo Only */}
        <header className="flex h-20 items-center justify-between border border-[#664893]/25 dark:border-white/10 bg-white/85 dark:bg-[#0c0914]/80 backdrop-blur-3xl rounded-3xl px-6 sm:px-8 shadow-[0_12px_40px_0_rgba(102,72,147,0.1)] sm:h-22">
          
          {/* Brand Logo Only (No Text) */}
          <a href="#hero" className="group relative flex items-center focus:outline-none" aria-label="Growl Home">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-transparent p-1 overflow-hidden"
            >
              <Image 
                src="/images/growl-logo-bg.png" 
                alt="Growl Logo" 
                width={40} 
                height={40} 
                className="h-full w-full object-contain filter drop-shadow-sm" 
              />
            </motion.div>
          </a>

          {/* Desktop Nav Items with Perfect Spacing */}
          <nav className="hidden items-center gap-2 lg:gap-3 xl:gap-4 lg:flex" aria-label="Main navigation">
            {text.nav.map((item) => (
              <a key={item.href} href={item.href} className="relative rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#5c5a56] transition-all duration-300 hover:text-[#664893] dark:text-white/70 dark:hover:text-[#d0fa2c] hover:bg-[#664893]/5 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setLanguage(isRtl ? "en" : "ar")} className="hidden items-center gap-2 rounded-full border border-[#664893]/20 dark:border-white/10 bg-[#664893]/5 dark:bg-white/5 px-4 py-2 text-xs font-bold backdrop-blur-md transition-all hover:bg-[#664893]/10 dark:hover:bg-white/15 active:scale-95 sm:inline-flex text-[#141414] dark:text-white">
              <Globe className="h-3.5 w-3.5 text-[#664893] dark:text-[#d0fa2c]" /> {text.language}
            </button>
            <button onClick={toggleTheme} className="hidden h-10 w-10 place-items-center rounded-full border border-[#664893]/20 dark:border-white/10 bg-[#664893]/5 dark:bg-white/5 backdrop-blur-md transition-all hover:bg-[#664893]/10 dark:hover:bg-white/15 active:scale-95 sm:grid text-[#141414] dark:text-white">
              {theme === "light" ? <Sun className="h-4 w-4 text-[#664893]" /> : <Moon className="h-4 w-4 text-[#d0fa2c]" />}
            </button>
            <a 
              href="https://wa.me/201032347389" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden items-center gap-2 rounded-full bg-[#664893] dark:bg-[#d0fa2c] px-6 py-3 text-xs font-extrabold text-white dark:text-[#07050b] transition-all hover:opacity-90 active:scale-98 shadow-[0_0_25px_rgba(102,72,147,0.3)] dark:shadow-[0_0_25px_rgba(208,250,44,0.35)] border border-white/25 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              {text.contact}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#664893]/20 dark:border-white/10 bg-[#664893]/5 dark:bg-white/5 lg:hidden text-[#141414] dark:text-white">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Glass Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-x-5 top-24 z-50 overflow-hidden rounded-3xl border border-[#664893]/30 dark:border-white/15 bg-white/95 dark:bg-[#0c0914]/95 p-5 backdrop-blur-2xl shadow-2xl lg:hidden text-[#141414] dark:text-white">
              <div className="flex flex-col gap-1.5">
                {text.nav.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-black uppercase tracking-wide hover:bg-[#664893]/10 dark:hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 flex items-center justify-between border-t border-[#664893]/15 dark:border-white/10 pt-4">
                  <button onClick={() => { setLanguage(isRtl ? "en" : "ar"); setMobileOpen(false); }} className="flex items-center gap-2 text-sm font-bold">
                    <Globe className="h-4 w-4 text-[#664893] dark:text-[#d0fa2c]" /> {text.language}
                  </button>
                  <button onClick={() => { toggleTheme(); setMobileOpen(false); }} className="h-10 w-10 grid place-items-center rounded-full border border-[#664893]/20 dark:border-white/10">
                    {theme === "light" ? <Sun className="h-4 w-4 text-[#664893]" /> : <Moon className="h-4 w-4 text-[#d0fa2c]" />}
                  </button>
                </div>
                <a 
                  href="https://wa.me/201032347389" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setMobileOpen(false)} 
                  className="mt-4 flex items-center justify-center gap-2 w-full text-center rounded-2xl bg-[#664893] dark:bg-[#d0fa2c] py-3.5 text-sm font-extrabold text-white dark:text-[#07050b] shadow-lg border border-white/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  {text.contact}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Hero Content Section - Optimized Line Height & Spacing for Arabic / English */}
        <div className="mx-auto max-w-5xl py-20 lg:py-32 flex flex-col items-center text-center">
          
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-full flex flex-col items-center">
            
            {/* Professional Eyebrow Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#664893]/30 dark:border-[#d0fa2c]/30 bg-[#664893]/10 dark:bg-[#d0fa2c]/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#664893] dark:text-[#d0fa2c] shadow-[0_0_25px_rgba(102,72,147,0.15)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#664893] dark:bg-[#d0fa2c] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#664893] dark:bg-[#d0fa2c]" />
                </span>
                {text.eyebrow}
              </span>
            </motion.div>
            
            {/* Main Typographic Heading with Controlled Line Heights for Arabic/English */}
            <motion.h1 variants={itemVariants} className={`mt-10 text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black uppercase tracking-[-0.03em] max-w-4xl text-[#141414] dark:text-white ${isRtl ? "leading-[1.25] sm:leading-[1.2]" : "leading-[1.05]"}`}>
              {text.headingMain}
              <span className={`block mt-3 sm:mt-4 bg-gradient-to-r from-[#664893] to-[#8b5cf6] dark:from-[#d0fa2c] dark:to-[#a78bfa] bg-clip-text text-transparent ${isRtl ? "leading-[1.25]" : "leading-[1.1]"}`}>{text.headingSub}</span>
            </motion.h1>
            
            {/* Description Text with Adjusted Spacing & Leading */}
            <motion.p variants={itemVariants} className={`mt-8 sm:mt-10 max-w-2xl text-base sm:text-xl text-[#5f5d58] dark:text-[#b4b4c0] ${isRtl ? "leading-loose" : "leading-relaxed"}`}>
              {text.description}
            </motion.p>
            
            {/* Professional Enterprise CTAs */}
            <motion.div variants={itemVariants} className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/201032347389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-[#664893] dark:bg-[#d0fa2c] px-8 py-4 text-sm font-extrabold text-white dark:text-[#07050b] transition-all duration-300 hover:opacity-90 active:scale-98 shadow-[0_10px_35px_rgba(102,72,147,0.3)] dark:shadow-[0_10px_35px_rgba(208,250,44,0.35)] border border-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{text.primaryCta}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>

              <a href="#capabilities" className="group inline-flex items-center gap-2.5 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-[#664893]/30 dark:border-white/10 px-7 py-4 text-xs font-extrabold uppercase tracking-wider backdrop-blur-xl transition-all hover:border-[#664893] dark:hover:border-[#d0fa2c] shadow-lg active:scale-95 text-[#141414] dark:text-white">
                <Layers className="h-4 w-4 text-[#664893] dark:text-[#d0fa2c]" />
                <span>{text.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Frosted Glass Performance Metrics Cards */}
            <motion.div variants={itemVariants} className="mt-20 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">
              {text.stats.map((stat, idx) => (
                <div key={idx} className="relative rounded-3xl border border-[#664893]/20 dark:border-white/15 bg-white/50 dark:bg-white/[0.03] p-7 backdrop-blur-2xl shadow-[0_12px_40px_0_rgba(102,72,147,0.08)] text-center group hover:border-[#664893] dark:hover:border-[#d0fa2c] transition-all duration-300">
                  <div className="absolute top-4 right-4 text-[#664893]/50 dark:text-[#d0fa2c]/40 group-hover:text-[#664893] dark:group-hover:text-[#d0fa2c] transition-colors">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[#141414] dark:text-white">
                    {stat.value}
                  </span>
                  <span className="block mt-3 text-xs font-bold uppercase tracking-wider text-[#5f5d58] dark:text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Testimonial Quote Glass Card */}
            <motion.div variants={itemVariants} className="mt-16 max-w-2xl rounded-3xl border border-[#664893]/20 dark:border-white/15 bg-white/40 dark:bg-white/[0.02] p-8 backdrop-blur-2xl shadow-xl text-center">
              <p className={`text-sm font-medium italic text-[#5f5d58] dark:text-[#b4b4c0] ${isRtl ? "leading-loose" : "leading-relaxed"}`}>
                {text.testimonial}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#664893] dark:text-[#d0fa2c]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#664893] dark:text-[#d0fa2c]">
                  {text.author}
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}