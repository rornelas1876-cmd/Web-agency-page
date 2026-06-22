import { HelpCircle } from 'lucide-react'
import { faqItems } from '@/data/faq'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function FAQSection() {
  return (
    <section id="preguntas" className="section-light py-28 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          badge={
            <div className="feature-badge mb-4">
              <HelpCircle size={13} /> Preguntas frecuentes
            </div>
          }
          title={<span id="faq-heading">Resolvemos tus <span className="gradient-text">dudas</span></span>}
          subtitle="Las preguntas que todos los dueños de negocio hacen antes de invertir en su página web."
        />

        <FAQAccordion items={faqItems} />
        <SectionCTA text="Tengo otra pregunta — cotizar" />
      </div>
    </section>
  )
}
