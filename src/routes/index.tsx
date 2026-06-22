import { createFileRoute } from '@tanstack/react-router'
import { useReveal } from '@/hooks/useReveal'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { ExamplesGallery } from '@/components/sections/ExamplesGallery'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CitiesSection } from '@/components/sections/CitiesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        <TrustBar />
        <ProblemSolutionSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <ExamplesGallery />
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <CitiesSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
    </>
  )
}
