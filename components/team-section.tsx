"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

interface LocalizedContent {
  badge: string
  titleMain: string
  titleSub: string
  description: string
  footerLabel: string
  footerText: string
  roles: Record<string, string>
}

const copy = {
  en: {
    badge: "Leadership & Architecture",
    titleMain: "The Minds Shaping",
    titleSub: "The Infrastructure.",
    description: "A specialized cross-functional assembly of operators engineering high-performance technical frameworks, scalable growth systems, and brand transformations.",
    footerLabel: "Operational Matrix",
    footerText: "System Architecture · Commercial Strategy · Executive Operations",
    roles: {
      "CEO": "Chief Executive Officer",
      "CTO": "Chief Technology Officer",
      "COO": "Chief Operating Officer",
      "Operations Manager": "Director of Operations"
    }
  },
  ar: {
    badge: "القيادة والهندسة التشغيلية",
    titleMain: "العقول المحركة",
    titleSub: "للبنية البرمجية.",
    description: "منظومة متكاملة من المتخصصين يعملون على هندسة الأنظمة التقنية عالية الأداء، وتطوير آليات النمو المؤسسي، وصياغة التحولات الاستراتيجية لهوية الشركات.",
    footerLabel: "المصفوفة التشغيلية",
    footerText: "هندسة الأنظمة · الاستراتيجيات التجارية · الإشراف التنفيذي",
    roles: {
      "CEO": "الرئيس التنفيذي",
      "CTO": "رئيس قطاع التكنولوجيا",
      "COO": "رئيس قطاع العمليات",
      "Operations Manager": "مدير العمليات التنفيذية"
    }
  }
}

const teamMembers = [
  {
    name: "Mohamed Rabie",
    roleKey: "CEO",
    image: "https://www.growl.cloud/icons/re3o.webp",
    glowColor: "group-hover:bg-[#b6ff2e]/5",
  },
  {
    name: "Wessam Ali",
    roleKey: "CTO",
    image: "https://www.growl.cloud/icons/wessam.webp",
    glowColor: "group-hover:bg-[#a78bfa]/5",
  },
  {
    name: "Mohamed Alaa",
    roleKey: "COO",
    image: "https://www.growl.cloud/icons/b4b4.webp",
    glowColor: "group-hover:bg-[#b6ff2e]/5",
  },
  {
    name: "Menna Hossam",
    roleKey: "Operations Manager",
    image: "https://www.growl.cloud/icons/mena.webp",
    glowColor: "group-hover:bg-[#a78bfa]/5",
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

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 })
  const reduceMotion = useReducedMotion()
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]

  return (
    <section 
      ref={sectionRef} 
      id="team" 
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#060606] py-24 text-white sm:py-32 transition-colors duration-500"
    >
      {/* Structural Minimal Tech Matrix Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* Sticky Left Header Panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div variants={reveal} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121212] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#a78bfa] shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6ff2e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#b6ff2e]" />
                </span>
                {text.badge}
              </span>
              
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                {text.titleMain}
                <span className="block bg-gradient-to-r from-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">{text.titleSub}</span>
              </h2>
              
              <p className="mt-5 max-w-sm text-base leading-relaxed text-[#a0a0a0]">
                {text.description}
              </p>
              
              <div className="mt-10 border-t border-white/5 pt-6 max-w-xs">
                <span className="block text-[10px] font-black uppercase tracking-[0.12em] text-white/40">
                  {text.footerLabel}
                </span>
                <p className="mt-2 text-xs font-medium text-white/60 leading-relaxed">
                  {text.footerText}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cards Flex Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                variants={reveal}
                custom={0.12 + index * 0.08}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative h-full"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -inset-2 rounded-[2rem] bg-transparent opacity-0 blur-2xl transition-all duration-500 ${member.glowColor} group-hover:opacity-100`} />

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/5 bg-[#111111] p-2.5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 focus-within:border-white/20"
                >
                  <div className="relative aspect-[4/4.8] overflow-hidden rounded-[1.4rem] bg-[#161616]">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${text.roles[member.roleKey]}`}
                      className="h-full w-full object-cover object-top grayscale filter transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    
                    {/* Shadow overlay block for maximum copy readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-85" />
                    
                    {/* Tiny responsive index marker */}
                    <span className="absolute top-3 rounded-md border border-white/10 bg-[#060606]/60 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-black tracking-widest text-[#b6ff2e] backdrop-blur-md ltr:right-3 rtl:left-3">
                      0{index + 1}
                    </span>
                    
                    {/* Inner Content Block */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform duration-500 group-hover:translate-y-[-2px]">
                      <p className="text-lg sm:text-xl font-black tracking-[-0.04em] text-white">
                        {member.name}
                      </p>
                      <p className="mt-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] text-[#a78bfa]">
                        {text.roles[member.roleKey]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}