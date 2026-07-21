"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Layers, Target, Cpu, TrendingUp, CheckCircle2 } from "lucide-react"

interface LocalizedStep {
  title: string
  description: string
  deliverables: string
  kpi: string
}

interface ProcessStep {
  number: string
  icon: typeof Layers
  en: LocalizedStep
  ar: LocalizedStep
  accent: string
  glowColor: string
}

const copy = {
  en: {
    badge: "Operational Framework",
    titleMain: "Our Deployment",
    titleSub: "Methodology.",
    subtitle: "A systematic, engineering-led pipeline engineered to transition complex objectives into predictable, scalable market infrastructure.",
    deliverablesLabel: "Deliverables",
    kpiLabel: "Key Performance Metric",
  },
  ar: {
    badge: "إطار العمل التشغيلي",
    titleMain: "منهجية التنفيذ",
    titleSub: "والانتشار الرقمي.",
    subtitle: "مسار عمل منهجي ومدروس هندسياً لتحويل الأهداف المعقدة إلى بنية تحتية مستدامة، قابلة للتوسع وموجهة بالكامل نحو تحقيق النتائج.",
    deliverablesLabel: "المخرجات والتقارير",
    kpiLabel: "مؤشر الأداء الرئيسي",
  },
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: Target,
    accent: "from-[#b6ff2e] to-[#d4ff7d]",
    glowColor: "group-hover:bg-[#b6ff2e]/10 dark:group-hover:bg-[#b6ff2e]/5",
    en: {
      title: "Discovery & Alignment",
      description: "Deep architecture auditing to unpack operational bottlenecks, competitive vectors, and technical dependencies.",
      deliverables: "Architecture brief, data-flow mapping",
      kpi: "Alignment & validation index",
    },
    ar: {
      title: "الاستكشاف والمواءمة الاستراتيجية",
      description: "تدقيق عميق للمتطلبات البرمجية لتحديد الاختناقات التشغيلية، وموجهات التنافسية، والارتباطات التقنية.",
      deliverables: "وثيقة هندسة النظام، مخطط تدفق البيانات",
      kpi: "مؤشر التقييم والمواءمة الأولية",
    },
  },
  {
    number: "02",
    icon: Layers,
    accent: "from-[#a78bfa] to-[#c084fc]",
    glowColor: "group-hover:bg-[#a78bfa]/10 dark:group-hover:bg-[#a78bfa]/5",
    en: {
      title: "Strategic Blueprinting",
      description: "Formulating technical scope, high-fidelity design definitions, and impact-to-effort development matrices.",
      deliverables: "Technical scope of work, UI design system",
      kpi: "Priority ROI allocation score",
    },
    ar: {
      title: "صياغة المخطط الهندسي",
      description: "تحديد النطاق التقني الدقيق، وبناء أنظمة التصميم واجهات المستخدم، ومصفوفات الجهد مقابل الأثر الاقتصادي.",
      deliverables: "وثيقة النطاق الفني، نظام الهوية البصرية (UI)",
      kpi: "معدل العائد المتوقع على الاستثمار",
    },
  },
  {
    number: "03",
    icon: Cpu,
    accent: "from-[#b6ff2e] to-[#829b4d]",
    glowColor: "group-hover:bg-[#b6ff2e]/10 dark:group-hover:bg-[#b6ff2e]/5",
    en: {
      title: "Engineering & Intelligent Core",
      description: "Full-stack client deployment layered with cognitive automation protocols and rigorous system integration.",
      deliverables: "Production codebase, LLM pipelines",
      kpi: "System efficiency & optimization rate",
    },
    ar: {
      title: "الهندسة البرمجية والأتمتة الذكية",
      description: "تطوير برمي متكامل (Full-Stack) مع دمج بروتوكولات الأتمتة الإدراكية وأنظمة الذكاء الاصطناعي الأساسية.",
      deliverables: "الشيفرة البرمجية الجاهزة، مسارات معالجة البيانات",
      kpi: "معدل كفاءة واستقرار النظام",
    },
  },
  {
    number: "04",
    icon: TrendingUp,
    accent: "from-[#a78bfa] to-[#6366f1]",
    glowColor: "group-hover:bg-[#a78bfa]/10 dark:group-hover:bg-[#a78bfa]/5",
    en: {
      title: "Deployment & Optimization",
      description: "Phased release execution followed by live telemetry tracking, UX calibration, and strategic scale adjustments.",
      deliverables: "Live production system, optimization metrics",
      kpi: "Conversion velocity & scaling matrix",
    },
    ar: {
      title: "الإطلاق والتحسين المستمر",
      description: "تنفيذ الإطلاق المرحلي الخاضع للرقابة يليه تتبع البيانات الحية، ومعايرة تجربة المستخدم، وضبط التوسع.",
      deliverables: "المنظومة الرقمية الحية، تقارير الأداء المستمر",
      kpi: "سرعة التحول ومصفوفة النمو القابل للتوسع",
    },
  },
]

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const reduceMotion = useReducedMotion()
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]

  return (
    <section
      ref={sectionRef}
      id="process"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#fafaf6] dark:bg-[#060606] py-20 text-[#141414] dark:text-white sm:py-32 transition-colors duration-500"
    >
      {/* Structural Minimal Tech Matrix Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181804_1px,transparent_1px),linear-gradient(to_bottom,#18181804_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#181818]/10 dark:via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* Section Typography Header Area */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 mb-16 sm:mb-24">
          <motion.div variants={reveal} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#181818]/10 dark:border-white/10 bg-white dark:bg-[#121212] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#4e4868] dark:text-[#a78bfa] shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6ff2e] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#b6ff2e]" />
              </span>
              {text.badge}
            </span>
            
            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.0] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              {text.titleMain}
              <span className="block bg-gradient-to-r from-[#4e4868] to-[#6d6494] dark:from-[#a78bfa] dark:to-[#c084fc] bg-clip-text text-transparent">{text.titleSub}</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={reveal} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            custom={0.08}
            className="flex items-end"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#5f5d58] dark:text-[#a0a0a0] max-w-2xl lg:mb-1">
              {text.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Process Cards Structural Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const localData = step[isRtl ? "ar" : "en"]

            return (
              <motion.article
                key={step.number}
                variants={reveal}
                custom={0.12 + index * 0.08}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative h-full"
              >
                {/* Background Micro Glow */}
                <div className={`absolute -inset-1.5 rounded-[2rem] bg-transparent opacity-0 blur-2xl transition-all duration-500 ${step.glowColor} group-hover:opacity-100`} />

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="relative h-full overflow-hidden rounded-[1.5rem] border border-[#181818]/10 dark:border-white/5 bg-white dark:bg-[#111111] p-5 sm:p-6 shadow-[0_12px_40px_-30px_rgba(24,24,24,0.1)] dark:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Premium Accent Gradient Line */}
                  <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${step.accent}`} />
                  
                  <div>
                    {/* Card Header Media */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] sm:text-xs font-black tracking-widest text-[#77736e] dark:text-[#555555] bg-[#181818]/5 dark:bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                        {step.number}
                      </span>
                      <span className="relative grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-xl border border-[#181818]/10 dark:border-white/10 bg-[#fafaf7] dark:bg-[#161616] text-[#4e4868] dark:text-[#a78bfa] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#181818] dark:group-hover:bg-white group-hover:text-[#b6ff2e] dark:group-hover:text-black">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.75} />
                      </span>
                    </div>

                    {/* Copy Content Block */}
                    <h3 className="mt-6 text-lg sm:text-xl font-black leading-tight tracking-[-0.04em] text-[#181818] dark:text-white">
                      {localData.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#63615d] dark:text-[#999999]">
                      {localData.description}
                    </p>
                  </div>

                  {/* Metadata Footer Area (Deliverables & KPI Bento Rows) */}
                  <div className="mt-6 space-y-3.5 border-t border-[#181818]/5 dark:border-white/5 pt-4">
                    <div className="group/item transition-colors duration-200">
                      <span className="block text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] text-[#4e4868] dark:text-[#a78bfa]">
                        {text.deliverablesLabel}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-[#2d2c29] dark:text-[#cccccc] line-clamp-1">
                        {localData.deliverables}
                      </span>
                    </div>

                    <div className="group/item transition-colors duration-200">
                      <span className="block text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] text-[#77736e] dark:text-[#666666]">
                        {text.kpiLabel}
                      </span>
                      <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-[#181818] dark:text-[#b6ff2e]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#b6ff2e]" strokeWidth={2.5} />
                        <span className="line-clamp-1 uppercase tracking-wide text-[11px] sm:text-xs">{localData.kpi}</span>
                      </div>
                    </div>
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