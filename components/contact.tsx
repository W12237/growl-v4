"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.link/65mf3i?text=${encodedMessage}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t.contactTitle}
        </h2>
        <p className="mt-4 text-lg text-gray-400">{t.contactSubtitle}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="group flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C6FF3A]/10 border border-[#C6FF3A]/20 transition-colors group-hover:bg-[#C6FF3A]/20">
              <Mail className="h-6 w-6 text-[#C6FF3A]" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#C6FF3A]/80">
                {t.contactEmail}
              </h3>
              <p className="mt-1 text-lg font-medium text-white">{t.contactEmailValue}</p>
            </div>
          </div>

          <div className="group flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C6FF3A]/10 border border-[#C6FF3A]/20 transition-colors group-hover:bg-[#C6FF3A]/20">
              <Phone className="h-6 w-6 text-[#C6FF3A]" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#C6FF3A]/80">
                {t.contactPhone}
              </h3>
              <p className="mt-1 text-lg font-medium text-white">{t.contactPhoneValue}</p>
            </div>
          </div>

          <div className="group flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C6FF3A]/10 border border-[#C6FF3A]/20 transition-colors group-hover:bg-[#C6FF3A]/20">
              <MapPin className="h-6 w-6 text-[#C6FF3A]" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#C6FF3A]/80">
                {t.contactAddress}
              </h3>
              <p className="mt-1 text-lg font-medium text-white">{t.contactAddressValue}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
          <Input
            type="text"
            placeholder={t.contactFormName}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C6FF3A]/50 focus:ring-[#C6FF3A]/50 transition-all"
          />
          <Input
            type="email"
            placeholder={t.contactFormEmail}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C6FF3A]/50 focus:ring-[#C6FF3A]/50 transition-all"
          />
          <Textarea
            placeholder={t.contactFormMessage}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C6FF3A]/50 focus:ring-[#C6FF3A]/50 transition-all"
          />
          <Button
            type="submit"
            className="w-full bg-[#C6FF3A] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(198,255,58,0.3)] font-bold rounded-xl py-6 transition-all"
          >
            {t.contactFormSend}
          </Button>
        </form>
      </div>
    </section>
  )
}