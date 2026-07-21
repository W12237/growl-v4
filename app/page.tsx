import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#181818] transition-colors duration-300 dark:bg-[#1a1a1a] dark:text-white">

      <div id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TeamSection />
        <PortfolioSection />
      </div>

      <Footer />
    </main>
  )
}