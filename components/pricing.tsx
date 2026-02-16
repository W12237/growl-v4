"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-gray-400" : "text-gray-100"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  const { language } = useLanguage()
  const t = translations[language]

  const plans = [
    {
      name: t.planEssential,
      price: t.planEssentialPrice,
      description: "Ideal for startups needing quick presence",
      features: [
        t.essentialFeature1,
        t.essentialFeature2,
        t.essentialFeature3,
        t.essentialFeature4,
        t.essentialFeature5,
        t.essentialFeature6,
      ],
      highlighted: false,
    },
    {
      name: t.planProfessional,
      price: t.planProfessionalPrice,
      description: "Best balance between features, performance, and value",
      features: [
        t.professionalFeature1,
        t.professionalFeature2,
        t.professionalFeature3,
        t.professionalFeature4,
        t.professionalFeature5,
        t.professionalFeature6,
        t.professionalFeature7,
        t.professionalFeature8,
        t.professionalFeature9,
      ],
      highlighted: true,
      badge: t.planRecommended,
    },
    {
      name: t.planEnterprise,
      price: t.planEnterprisePrice,
      description: "Built for enterprises demanding automation and scalability",
      features: [
        t.enterpriseFeature1,
        t.enterpriseFeature2,
        t.enterpriseFeature3,
        t.enterpriseFeature4,
        t.enterpriseFeature5,
        t.enterpriseFeature6,
        t.enterpriseFeature7,
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t.pricingTitle}
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          {t.pricingSubtitle}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <Card
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 h-full group-hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-white/[0.03] border-[#C6FF3A]/50 shadow-[0_0_40px_rgba(198,255,58,0.15)]"
                  : "bg-white/[0.02] border-white/10 hover:border-[#C6FF3A]/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C6FF3A] via-[#DFFF8A] to-[#C6FF3A]" />
              )}
              
              {plan.badge && (
                <div className="absolute top-6 right-6 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black bg-[#C6FF3A] shadow-[0_0_15px_rgba(198,255,58,0.4)]">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="space-y-3 pb-6 pt-8">
                <div className="text-sm font-bold uppercase tracking-widest text-[#C6FF3A]">
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 text-white">
                  <div className="text-5xl font-extrabold tracking-tighter">{plan.price}</div>
                  {plan.price.includes("$") && <span className="mb-1.5 text-gray-400 text-sm">/start</span>}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  asChild
                  className={`w-full rounded-xl font-bold py-6 transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-[#C6FF3A] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "bg-white/10 text-white hover:bg-[#C6FF3A] hover:text-black border border-white/10"
                  }`}
                >
                  <Link href="https://wa.link/65mf3i" target="_blank" rel="noopener noreferrer">
                    {t.contactNow}
                  </Link>
                </Button>

                <div className="h-px bg-white/10" />

                <ul className="grid gap-4">
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} text={feature} />
                  ))}
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Bilingual Support", desc: t.pricingNote1 },
          { label: "Delivery Timeline", desc: t.pricingNote2 },
          { label: "Hosting Domain", desc: t.pricingNote3 },
          { label: "Pricing", desc: t.pricingNote4 },
        ].map((note, i) => (
          <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.01] text-center">
            <p className="font-bold text-[#C6FF3A] text-xs uppercase tracking-widest mb-2">{note.label}</p>
            <p className="text-sm text-gray-400 leading-snug">{note.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}