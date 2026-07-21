"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { ArrowUpRight, ArrowUpLeft, Briefcase, Layers } from "lucide-react"

interface LocalizedProject {
  title: string
  category: string
  description: string
}

interface Project {
  slug: string
  accent: string
  tags: string[]
  en: LocalizedProject
  ar: LocalizedProject
}

const copy = {
  en: {
    badge: "Case Studies",
    titleMain: "Engineered Solutions,",
    titleSub: "Proven Impact.",
    subtitle: "A curated collection of production environments, structural brand systems, and automated pipelines architected for high-growth enterprises.",
    ctaLabel: "Analyze Case Study",
  },
  ar: {
    badge: "دراسات الحالة وأعمالنا",
    titleMain: "منظومات برمجية تحقق",
    titleSub: "نتائج استثنائية.",
    subtitle: "مجموعة مختارة من البيئات البرمجية الحية، وهندسة العلامات التجارية، ومسارات الأتمتة المصممة خصيصاً للمؤسسات سريعة النمو.",
    ctaLabel: "تحليل دراسة الحالة",
  },
}

const projects: Project[] = [
  {
    slug: "ecommerce-transformation",
    accent: "from-[#b6ff2e] to-[#a8e61a]",
    tags: ["Shopify Plus", "Next.js", "AI Pipelines"],
    en: {
      title: "Enterprise E-Commerce Engine",
      category: "Digital Commerce",
      description: "Overhauling architecture to support high-throughput checkout layers unified with predictive cross-selling models.",
    },
    ar: {
      title: "منصة تجارة إلكترونية متكاملة للمؤسسات",
      category: "التجارة الرقمية",
      description: "إعادة بناء كاملة للبنية التحتية لدعم عمليات الدفع عالية الكثافة مدمجة بنماذج التوصية والتنبؤ الذكي.",
    },
  },
  {
    slug: "fintech-telemetry-dashboard",
    accent: "from-[#4e4868] to-[#6b5f8a]",
    tags: ["React", "WebSockets", "gRPC Core"],
    en: {
      title: "Real-Time Telemetry Matrix",
      category: "Web Engineering",
      description: "High-frequency analytics interface displaying distributed ledger updates and market analytics with sub-millisecond latency.",
    },
    ar: {
      title: "لوحة تحكم وتحليل البيانات اللحظية",
      category: "هندسة الويب المتقدمة",
      description: "واجهة تحليلية عالية التردد تعرض تحديثات البيانات وحسابات السوق بزمن استجابة أقل من الميلي ثانية.",
    },
  },
  {
    slug: "brand-identity-architecture",
    accent: "from-[#b6ff2e] to-[#9dd91f]",
    tags: ["Visual Design", "Design Systems", "Guidelines"],
    en: {
      title: "Brand Engineering Framework",
      category: "Identity Systems",
      description: "Formulating a strict visual architecture and scalable brand asset system for an emerging logistics operator.",
    },
    ar: {
      title: "هندسة الهوية ونظم التصميم البصري",
      category: "الأنظمة الهيكلية للهوية",
      description: "صياغة بنية مرئية صارمة ونظام أصول رقمية قابل للتوسع بالكامل لشركة خدمات لوجستية ناشئة.",
    },
  },
  {
    slug: "cognitive-crm-automation",
    accent: "from-[#4e4868] to-[#3d4456]",
    tags: ["Automations", "Node.js", "LLM Fine-Tune"],
    en: {
      title: "Cognitive Automation Suite",
      category: "Intelligent Systems",
      description: "Custom internal workspace deploying autonomous agents to handle qualification pipelines and CRM context Sync.",
    },
    ar: {
      title: "منظومة الأتمتة الإدراكية وإدارة العملاء",
      category: "الأنظمة والحلول الذكية",
      description: "مساحة عمل داخلية مخصصة لتشغيل وكلاء ذكاء اصطناعي ذاتيين لإدارة مسارات التأهيل ومزامنة البيانات.",
    },
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 })
  const reduceMotion = useReducedMotion()
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#f7f7f3] dark:bg-[#090909] py-20 text-[#181818] dark:text-white sm:py-28 lg:py-36 transition-colors duration-500"
    >
      {/* Absolute Background Structural Lines Layout */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10rem] h-[45rem] w-[45rem] rounded-full border border-[#4e4868]/10 dark:border-[#a78bfa]/5 ltr:right-[-15rem] rtl:left-[-15rem]" />
        <div className="absolute bottom-[-10rem] h-[35rem] w-[35rem] rounded-full border border-[#4e4868]/10 dark:border-[#a78bfa]/5 ltr:left-[-10rem] rtl:right-[-10rem]" />
        <div className="absolute bottom-0 left-[8%] h-px w-[84%] bg-[#181818]/8 dark:bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* Section Unified Typography Header */}
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 mb-16 sm:mb-24">
          <motion.div variants={reveal} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#181818]/10 dark:border-white/10 bg-white dark:bg-[#121212] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4e4868] dark:text-[#a78bfa] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b6ff2e] ring-4 ring-[#b6ff2e]/25" />
              {text.badge}
            </span>
            
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl">
              {text.titleMain}
              <span className="block text-[#4e4868] dark:text-[#a78bfa]">{text.titleSub}</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={reveal} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            custom={0.1}
            className="flex items-end"
          >
            <p className="text-base sm:text-lg leading-relaxed text-[#5f5d58] dark:text-[#a0a0a0] max-w-2xl lg:mb-2">
              {text.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Portfolio Cards Bento Matrix Grid Layout */}
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => {
            const localData = project[isRtl ? "ar" : "en"]

            return (
              <motion.article
                key={project.slug}
                variants={reveal}
                custom={0.15 + index * 0.08}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative"
              >
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="relative h-full overflow-hidden rounded-[1.5rem] border border-[#181818]/10 dark:border-white/10 bg-white dark:bg-[#121212] p-6 shadow-[0_18px_45px_-35px_rgba(24,24,24,0.45)] dark:shadow-[0_18px_45px_-35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_32px_65px_-28px_rgba(24,24,24,0.35)] dark:hover:shadow-[0_32px_65px_-28px_rgba(0,0,0,0.55)] flex flex-col justify-between sm:p-8"
                >
                  {/* Structural Ambient Branding Accents */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
                  <div className="absolute -top-16 h-36 w-36 rounded-full bg-[#f5f5f0] dark:bg-[#1a1a19] transition-transform duration-500 group-hover:scale-125 ltr:-right-16 rtl:-left-16" />

                  <div>
                    {/* Component Card Header Block */}
                    <div className="relative flex items-center justify-between gap-5">
                      <span className="inline-block rounded-md border border-[#181818]/10 dark:border-white/10 bg-[#fafaf7] dark:bg-[#1c1c1a] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4e4868] dark:text-[#a78bfa]">
                        {localData.category}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#181818]/10 dark:border-white/10 bg-[#fafaf7] dark:bg-[#1c1c1a] text-[#4e4868] dark:text-[#a78bfa] transition-all duration-300 group-hover:bg-[#181818] dark:group-hover:bg-white group-hover:text-[#b6ff2e] dark:group-hover:text-black">
                        <ArrowIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                    </div>

                    {/* Copy Typography Layout */}
                    <h3 className="relative mt-8 text-2xl font-black leading-[1.1] tracking-[-0.04em] text-[#181818] dark:text-white sm:text-[1.6rem]">
                      {localData.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-[#63615d] dark:text-[#a0a0a0] sm:text-base max-w-xl">
                      {localData.description}
                    </p>
                  </div>

                  {/* Operational Tags Block Footer */}
                  <div className="relative mt-8 flex flex-wrap gap-2 border-t border-[#181818]/10 dark:border-white/10 pt-5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center gap-1.5 rounded-md bg-[#181818]/5 dark:bg-white/5 px-2.5 py-1 text-xs font-semibold text-[#3e3d39] dark:text-[#d1d1d1]"
                      >
                        <Layers className="h-3 w-3 text-[#4e4868] dark:text-[#a78bfa]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}