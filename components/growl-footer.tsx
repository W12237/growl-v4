"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function GrowlFooter() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  // Contact data
  const PHONE_E164 = "+201024252649"
  const PHONE_HUMAN = "+20 10 24252649"
  const EMAIL = "info@growl.cloud"
  const ADDRESS_LABEL = isRTL ? "The GrEEK Campus Downtown (الحرم اليوناني)" : "The GrEEK Campus Downtown (El GrEEK Campus)"
  const MAPS_URL = "https://maps.app.goo.gl/9R6XhJmF8X8X8X8X8" // Update with actual link

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/growlagency99?igsh=bXVnNHp1dnA3OGRx", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1D16gQk1Wi/", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { label: t.footerServices ?? (isRTL ? "الخدمات" : "Services"), href: "#services" },
    { label: t.footerPricing ?? (isRTL ? "الأسعار" : "Pricing"), href: "#pricing" },
    { label: t.footerTeam ?? (isRTL ? "الفريق" : "Team"), href: "#team" },
    { label: t.footerBlog ?? (isRTL ? "المدونة" : "Blog"), href: "#blog" },
    { label: t.footerContact ?? (isRTL ? "تواصل" : "Contact"), href: "#contact" },
  ]

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 py-14 sm:py-20">
        <div className={`grid gap-12 md:grid-cols-12 ${isRTL ? "text-right" : "text-left"}`}>
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-6">
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Image src="/icons/growl-ww.png" alt="Growl logo" width={32} height={32} className="brightness-110" />
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Growl</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              {t.footerAboutDesc ??
                (isRTL
                  ? "وكالة متكاملة للهوية البصرية والتسويق والأتمتة بالذكاء الاصطناعي. نبني التجارب الرقمية التي تنمّي عملك."
                  : "A 360° agency for brand identity, marketing, and AI automation. We build digital experiences that grow your business.")}
            </p>
            <div className={`flex gap-3 pt-2 ${isRTL ? "justify-end" : "justify-start"}`}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:border-[#C6FF3A]/50 hover:text-[#C6FF3A] hover:bg-[#C6FF3A]/5 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6FF3A]">
              {t.footerQuickLinks ?? (isRTL ? "روابط سريعة" : "Quick links")}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-[#C6FF3A] transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6FF3A]">
              {isRTL ? "تواصل معنا" : "Get in Touch"}
            </h3>
            <address className="not-italic space-y-5">
              <a
                href={`tel:${PHONE_E164}`}
                className="group flex items-start gap-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-1 rounded-md bg-white/5 p-1.5 group-hover:bg-[#C6FF3A]/10 group-hover:text-[#C6FF3A] transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">{isRTL ? "هاتف" : "Call us"}</span>
                  <span dir="ltr" className="font-medium">{PHONE_HUMAN}</span>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-1 rounded-md bg-white/5 p-1.5 group-hover:bg-[#C6FF3A]/10 group-hover:text-[#C6FF3A] transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">{isRTL ? "بريد" : "Email"}</span>
                  <span className="font-medium">{EMAIL}</span>
                </div>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="mt-1 rounded-md bg-white/5 p-1.5 group-hover:bg-[#C6FF3A]/10 group-hover:text-[#C6FF3A] transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">{isRTL ? "موقع" : "Location"}</span>
                  <span className="font-medium">{ADDRESS_LABEL}</span>
                </div>
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/5" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            {t.footerCopyright ?? (isRTL ? "© جميع الحقوق محفوظة." : "© All rights reserved.")}{" "}
            {new Date().getFullYear()} • <span className="text-white font-medium">Growl Agency</span>
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{isRTL ? "تم التطوير بواسطة" : "Built by"}</span>
            <div className="h-px w-8 bg-[#C6FF3A]/30"></div>
            <span className="text-[#C6FF3A] font-bold uppercase tracking-widest">Growl Labs</span>
          </div>
        </div>
      </div>
    </footer>
  )
}