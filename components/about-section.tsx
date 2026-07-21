"use client"

import { ArrowUpRight, ArrowUpLeft, Check, Layers3, Cpu, PenTool, Rocket, type LucideIcon } from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"

interface LocalizedContent {
  title: string
  description: string
  items: string[]
}

type Capability = {
  number: string
  en: LocalizedContent
  ar: LocalizedContent
  accent: string
  glowColor: string
  icon: LucideIcon
}

const copy = {
  en: {
    badge: "What we do",
    titleMain: "Built around",
    titleSub: "your growth.",
    description: "Specialist thinking, joined up as one team. We shape every part of the digital experience around the outcomes that matter.",
    cta: "Discuss your project",
  },
  ar: {
    badge: "ماذا نقدم لعملائنا",
    titleMain: "بنينا خبراتنا",
    titleSub: "من أجل نموك.",
    description: "تفكير متخصص متكامل كفريق عمل واحد. نصيغ كل جزء من التجربة الرقمية حول تحقيق النتائج التي تهم عملك الفعلي.",
    cta: "ناقش مشروعك معنا",
  },
}

const capabilities: Capability[] = [
  {
    number: "01",
    icon: Layers3,
    en: {
      title: "Custom POS Systems",
      description: "Reliable operational tools that bring checkout, stock, branches, taxes, and reporting into one clear workflow.",
      items: ["Cloud-ready infrastructure", "Receipts, taxes & barcodes", "Live inventory reporting"],
    },
    ar: {
      title: "أنظمة نقاط البيع المخصصة",
      description: "أدوات تشغيلية موثوقة تجمع عمليات الدفع، والمخزون، والفروع، والضرائب، والتقارير في سير عمل واحد واضح.",
      items: ["بنية تحتية جاهزة للسحاب", "إيصالات، ضرائب ورموز شريطية", "تقارير حية ومباشرة للمخزون"],
    },
    accent: "from-[#b6ff2e] to-[#8b5cf6]",
    glowColor: "group-hover:bg-[#b6ff2e]/10 dark:group-hover:bg-[#b6ff2e]/5",
  },
  {
    number: "02",
    icon: Cpu,
    en: {
      title: "CRM & Back-Office",
      description: "A connected workspace for leads, delivery, customer conversations, invoicing, and leadership visibility.",
      items: ["Lead capture & pipelines", "Tasks, deals & follow-up", "Invoices & KPI dashboards"],
    },
    ar: {
      title: "إدارة العملاء والمكاتب الخلفية",
      description: "مساحة عمل متصلة لإدارة العملاء المحتملين، والتسليم، ومحادثات العملاء، والفواتير، ورؤية القيادة.",
      items: ["جلب العملاء ومراحل البيع", "المهام، الصفقات والمتابعة", "الفواتير ولوحات قياس الأداء"],
    },
    accent: "from-[#8b5cf6] to-[#664893]",
    glowColor: "group-hover:bg-[#8b5cf6]/10 dark:group-hover:bg-[#8b5cf6]/5",
  },
  {
    number: "03",
    icon: PenTool,
    en: {
      title: "Creative & Copywriting",
      description: "A distinct voice and visual system that makes every campaign, landing page, and social touchpoint feel connected.",
      items: ["Campaign creative", "Conversion-focused copy", "Content operations"],
    },
    ar: {
      title: "الإبداع وكتابة المحتوى",
      description: "صوت ونظام مرئي مميز يجعل كل حملة، وصفحة هبوط، ونقطة اتصال اجتماعية تبدو مترابطة ومقنعة.",
      items: ["إبداع الحملات الإعلانية", "نصوص تركز على زيادة المبيعات", "إدارة العمليات والمحتوى"],
    },
    accent: "from-[#b6ff2e] to-[#8b5cf6]",
    glowColor: "group-hover:bg-[#8b5cf6]/10 dark:group-hover:bg-[#8b5cf6]/5",
  },
  {
    number: "04",
    icon: Rocket,
    en: {
      title: "Digital Launches",
      description: "From the first strategic decision to post-launch optimisation, we build momentum across the full customer journey.",
      items: ["Strategy & roadmap", "Go-to-market execution", "Measurement & optimisation"],
    },
    ar: {
      title: "الإطلاقات الرقمية",
      description: "من أول قرار استراتيجي إلى تحسين ما بعد الإطلاق، نبني زخمًا عبر رحلة العميل الكاملة.",
      items: ["الاستراتيجية وخارطة الطريق", "تنفيذ دخول السوق واستهدافه", "القياس والتحسين المستمر"],
    },
    accent: "from-[#8b5cf6] to-[#b6ff2e]",
    glowColor: "group-hover:bg-[#8b5cf6]/10 dark:group-hover:bg-[#8b5cf6]/5",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

function CapabilityCard({ 
  capability, 
  index, 
  isInView, 
  language 
}: { 
  capability: Capability; 
  index: number; 
  isInView: boolean; 
  language: "en" | "ar"
}) {
  const reduceMotion = useReducedMotion()
  const localData = capability[language === "ar" ? "ar" : "en"]
  const Icon = capability.icon

  return (
    <motion.article
      variants={reveal}
      custom={0.15 + index * 0.08}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative h-full"
    >
      {/* Background Micro Glow */}
      <div className={`absolute -inset-2 rounded-[2rem] bg-transparent opacity-0 blur-2xl transition-all duration-500 ${capability.glowColor} group-hover:opacity-100`} />

      <motion.div
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative h-full overflow-hidden rounded-[1.75rem] border border-[#181818]/10 dark:border-white/5 bg-white dark:bg-[#111111] p-6 shadow-[0_12px_40px_-30px_rgba(24,24,24,0.1)] dark:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 focus-within:border-[#8b5cf6]/30 dark:focus-within:border-[#8b5cf6]/30 sm:p-8"
      >
        {/* Accent Edge Line */}
        <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${capability.accent}`} />

        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#77736e] dark:text-[#8b5cf6] bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/10 px-2.5 py-1 rounded-md">{capability.number}</span>
          
          <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-[#181818]/10 dark:border-white/10 bg-[#fafaf7] dark:bg-[#161616] text-[#8b5cf6] dark:text-[#a78bfa] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#8b5cf6] dark:group-hover:bg-[#8b5cf6] group-hover:text-white dark:group-hover:text-white">
            <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[360deg]" strokeWidth={1.75} />
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-black leading-tight tracking-[-0.05em] text-[#181818] dark:text-white group-hover:text-[#8b5cf6] dark:group-hover:text-[#a78bfa] transition-colors">{localData.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#63615d] dark:text-[#999999]">{localData.description}</p>

        <ul className="mt-6 space-y-3 border-t border-[#181818]/5 dark:border-white/5 pt-5">
          {localData.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wide text-[#3e3d39] dark:text-[#cccccc]">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-md bg-[#8b5cf6]/20 dark:bg-[#8b5cf6]/15 text-[#664893] dark:text-[#a78bfa] border border-[#8b5cf6]/30">
                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
              </span>
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 })
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight

  return (
    <section 
      ref={sectionRef} 
      id="capabilities" 
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fafaf6] dark:bg-[#060606] py-24 text-[#141414] dark:text-white sm:py-32 transition-colors duration-500"
    >
      {/* Structural Minimal Grid & Purple Ambient Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181804_1px,transparent_1px),linear-gradient(to_bottom,#18181804_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        <div className="absolute top-1/3 ltr:right-10 rtl:left-10 h-96 w-96 rounded-full bg-[#664893]/10 dark:bg-[#664893]/15 blur-[120px]" />
        <div className="absolute bottom-10 ltr:left-10 rtl:right-10 h-80 w-80 rounded-full bg-[#b6ff2e]/10 dark:bg-[#b6ff2e]/5 blur-[100px]" />
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 dark:via-[#8b5cf6]/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* Sticky Left Header Panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div variants={reveal} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 dark:border-[#8b5cf6]/30 bg-[#664893]/10 dark:bg-[#664893]/15 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#8b5cf6] dark:text-[#a78bfa] shadow-sm backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6ff2e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#b6ff2e]" />
                </span>
                {text.badge}
              </span>
              
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                {text.titleMain}
                <span className="block mt-2 bg-gradient-to-r from-[#8b5cf6] to-[#b6ff2e] bg-clip-text text-transparent">{text.titleSub}</span>
              </h2>
              
              <p className="mt-5 max-w-sm text-base leading-relaxed text-[#5f5d58] dark:text-[#a0a0a0]">
                {text.description}
              </p>
              
              <a href="#contact" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#141414] dark:text-white focus:outline-none">
                <span className="border-b border-[#8b5cf6] pb-0.5 transition-colors group-hover:text-[#8b5cf6]">
                  {text.cta}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#8b5cf6]/30 dark:border-[#8b5cf6]/30 bg-[#664893]/10 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#8b5cf6] dark:group-hover:bg-[#8b5cf6] group-hover:text-white dark:group-hover:text-white group-hover:scale-105">
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Cards Flex Grid */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.number}
                capability={capability}
                index={index}
                isInView={isInView}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}