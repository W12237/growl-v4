"use client"

import { useState, useRef } from "react"
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Loader2, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const copy = {
  en: {
    titleMain: "Ready to Scale?",
    placeholder: "Business email...",
    ctaActive: "Connecting...",
    ctaSuccess: "Dispatched",
    legalRights: "All rights engineered.",
  },
  ar: {
    titleMain: "جاهز للتوسع؟",
    placeholder: "البريد الإلكتروني للمنشأة...",
    ctaActive: "جاري الاتصال...",
    ctaSuccess: "تم الإرسال",
    legalRights: "جميع الحقوق محفوظة.",
  },
}

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "X / Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })
  const reduceMotion = useReducedMotion()
  const { language } = useLanguage()

  const isRtl = language === "ar"
  const text = copy[isRtl ? "ar" : "en"]
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status !== "idle") return
    
    setStatus("submitting")
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1200)
  }

  return (
    <footer
      ref={footerRef}
      id="contact"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative bg-[#050505] text-white border-t border-white/5 py-12 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* Minimalist Top Bar: Text Trigger + Input Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-black uppercase tracking-tight sm:text-3xl bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
          >
            {text.titleMain}
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full md:max-w-md"
          >
            <form onSubmit={handleSubmit} className="group flex items-center gap-2 border-b border-white/10 py-1.5 focus-within:border-[#b6ff2e] transition-colors duration-300">
              <input
                type="email"
                required
                value={email}
                disabled={status === "submitting"}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={text.placeholder}
                className="w-full bg-transparent border-none px-1 py-1 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-0 disabled:opacity-50 font-mono"
              />
              
              <button
                type="submit"
                disabled={status !== "idle"}
                className="p-2 text-white/40 hover:text-[#b6ff2e] disabled:pointer-events-none transition-colors duration-200"
                aria-label="Submit Form"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-focus-within:translate-x-0.5" />
                    </motion.div>
                  )}
                  {status === "submitting" && (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 className="h-4 w-4 animate-spin text-[#b6ff2e]" />
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      <CheckCircle2 className="h-4 w-4 text-[#b6ff2e]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Clean Base Layout Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          
          {/* Logo Identity */}
          <Link href="#hero" className="group text-lg font-black tracking-[-0.05em] focus:outline-none">
            GROWL<span className="inline-block text-[#b6ff2e] transition-transform duration-300 group-hover:scale-125">.</span>
          </Link>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-2 order-first sm:order-none">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full text-white/40 hover:text-[#b6ff2e] hover:bg-white/[0.03] transition-all duration-300 focus:outline-none focus:text-[#b6ff2e]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          {/* Copyright Metadata */}
          <p className="font-mono text-[10px] text-white/20 tracking-wide text-center sm:text-inline">
            &copy; 2026 GROWL. {text.legalRights}
          </p>

        </div>

      </div>
    </footer>
  )
}