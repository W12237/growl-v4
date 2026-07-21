"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import {
  type LucideIcon,
  ArrowUpRight,
  ArrowUpLeft,
  Code2,
  Gauge,
  Palette,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react"

interface LocalizedContent {
  title: string
  description: string
  cta: string
}

interface Service {
  icon: LucideIcon
  en: LocalizedContent
  ar: LocalizedContent
  href: string
  accent: string
  featured: boolean
}

const copy = {
  en: {
    badge: "Core Capabilities",
    titlePrefix: "Enterprise Architecture & ",
    titleHighlight: "Execution",
    subtitle: "We engineer scalable full-stack applications, automated operational workflows, and high-performance digital ecosystems designed for sustained market leadership.",
  },
  ar: {
    badge: "القدرات الأساسية",
    titlePrefix: "هندسة الأنظمة وحلول ",
    titleHighlight: "الأعمال",
    subtitle: "نصمم ونطور تطبيقات ويب متكاملة وقابلة للتوسع، وأنظمة أتمتة تشغيلية متقدمة، ومنظومات رقمية عالية الأداء لضمان ريادتك المستدامة في السوق.",
  },
}

const services: Service[] = [
  {
    icon: Zap,
    en: {
      title: "AI Automation Workflows",
      description: "Custom-engineered automation pipelines that eliminate operational friction and scale execution speed.",
      cta: "Explore Architecture",
    },
    ar: {
      title: "مسارات أتمتة الذكاء الاصطناعي",
      description: "خطوط أتمتة مخصصة تلغي الاحتكاك التشغيلي وترفع من سرعة وكفاءة التنفيذ المؤسسي.",
      cta: "استكشف البنية التقنية",
    },
    href: "/services/ai-automation",
    accent: "#B6FF2E",
    featured: true,
  },
  {
    icon: Palette,
    en: {
      title: "Immersive Brand Systems",
      description: "Strategic visual identities and design languages engineered to command industry authority.",
      cta: "Explore Identity",
    },
    ar: {
      title: "أنظمة الهوية المؤسسية",
      description: "هويات بصرية استراتيجية ولغات تصميم متقدمة تفرض حضوراً قوياً وتؤكد ريادتك في القطاع.",
      cta: "استكشف الهوية",
    },
    href: "/services/brand-identity",
    accent: "#8B5CF6",
    featured: false,
  },
  {
    icon: Code2,
    en: {
      title: "Full-Stack Web Architecture",
      description: "High-performance web applications built on modern frameworks with robust, secure backends.",
      cta: "Explore Engineering",
    },
    ar: {
      title: "تطوير الويب الشامل",
      description: "تطبيقات ويب فائقة الأداء مبنية على أحدث الأطر البرمجية مع بنى تحتية خلفية آمنة وصلبة.",
      cta: "استكشف الهندسة",
    },
    href: "/services/web-development",
    accent: "#3B82F6",
    featured: false,
  },
  {
    icon: ShoppingCart,
    en: {
      title: "Enterprise E-Commerce",
      description: "Scalable commercial engines designed for high-volume transactions and exceptional conversion lift.",
      cta: "Explore Commerce",
    },
    ar: {
      title: "منصات التجارة المؤسسية",
      description: "محركات تجارية قابلة للتوسع ومصممة لمعالجة حجم معاملات ضخم مع معدلات تحويل استثنائية.",
      cta: "استكشف التجارة",
    },
    href: "/services/ecommerce",
    accent: "#B6FF2E",
    featured: true,
  },
  {
    icon: Gauge,
    en: {
      title: "Performance Optimization",
      description: "Rigorous system tuning to ensure sub-second latency, flawless uptime, and core web vitals excellence.",
      cta: "Explore Optimization",
    },
    ar: {
      title: "تحسين الأداء التشغيلي",
      description: "ضبط هندسي دقيق للأنظمة لضمان سرعات استجابة فائقة، واستقرار تشغيلي تام، ومعايير أداء مثالية.",
      cta: "استكشف التحسين",
    },
    href: "/services/performance-optimization",
    accent: "#EC4899",
    featured: false,
  },
  {
    icon: Users,
    en: {
      title: "Strategic Technology Consulting",
      description: "Executive advisory to align technical roadmaps with long-term enterprise valuation objectives.",
      cta: "Explore Consulting",
    },
    ar: {
      title: "الاستشارات التقنية الاستراتيجية",
      description: "استشارات تنفيذية لمواءمة خارطة الطريق التقنية مع أهداف تقييم ونمو المؤسسة على المدى الطويل.",
      cta: "استكشف الاستشارات",
    },
    href: "/services/strategic-consulting",
    accent: "#10B981",
    featured: false,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const prefersReducedMotion = useReducedMotion()
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]

  return (
    <section
      ref={ref}
      id="services"
      dir={isRtl ? "rtl" : "ltr"}
      aria-labelledby="services-heading"
      className="relative py-24 md:py-32 bg-[#fafaf6] dark:bg-[#030305] text-[#141414] dark:text-white overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Grid & Neon/Purple Illumination Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181803_1px,transparent_1px),linear-gradient(to_bottom,#18181803_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <motion.div
          className="absolute top-1/4 ltr:left-[30%] rtl:right-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF2E]/10 dark:bg-[#B6FF2E]/5 rounded-full blur-[140px]"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        
        {/* Purple Touch Accent Glow */}
        <motion.div
          className="absolute top-2/3 ltr:right-[20%] rtl:left-[20%] w-[500px] h-[500px] bg-[#664893]/15 dark:bg-[#664893]/20 rounded-full blur-[150px]"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.25, 1], x: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-[#664893]/30 bg-[#664893]/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#8B5CF6] dark:text-[#a78bfa] shadow-[0_0_20px_rgba(102,72,147,0.15)] backdrop-blur-xl mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF2E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6FF2E]" />
            </span>
            {text.badge}
          </motion.div>

          <motion.h2
            id="services-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] uppercase leading-[1.08] text-[#141414] dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            {text.titlePrefix}
            <span className="block mt-1 bg-gradient-to-r from-[#B6FF2E] to-[#8B5CF6] bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[#5f5d58] dark:text-[#b4b4c0] leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {text.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon
            const localData = service[language === "ar" ? "ar" : "en"]
            const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight

            return (
              <motion.a
                key={localData.title}
                href={service.href}
                aria-label={`${localData.cta}: ${localData.title}`}
                variants={itemVariants}
                className="group relative block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF2E]"
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className={`relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 backdrop-blur-2xl ${
                    service.featured
                      ? "border-[#664893]/40 bg-gradient-to-b from-[#664893]/15 via-white/5 to-white/[0.02] dark:from-[#664893]/20 dark:via-white/[0.03] dark:to-white/[0.01] shadow-[0_8px_32px_0_rgba(102,72,147,0.15)]"
                      : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] hover:border-[#664893]/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-[#8B5CF6] transition-colors duration-300">
                        <Icon
                          aria-hidden="true"
                          className="w-6 h-6 text-[#141414] dark:text-white group-hover:text-[#8B5CF6] transition-colors duration-300"
                        />
                      </div>
                      {service.featured && (
                        <span className="inline-flex items-center rounded-full bg-[#664893]/20 border border-[#8B5CF6]/40 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#a78bfa]">
                          Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#141414] dark:text-white mb-3 group-hover:text-[#a78bfa] transition-colors duration-300">
                      {localData.title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-[#5f5d58] dark:text-[#b4b4c0] mb-8 font-medium">
                      {localData.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-6 border-t border-black/5 dark:border-white/5">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-[#141414] dark:text-white group-hover:text-[#a78bfa] transition-colors duration-300">
                      {localData.cta}
                    </span>
                    <ArrowIcon
                      aria-hidden="true"
                      className="w-4 h-4 transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 text-[#141414] dark:text-white group-hover:text-[#a78bfa]"
                    />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}