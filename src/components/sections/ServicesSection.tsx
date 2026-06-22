import { Layers } from 'lucide-react'
import { serviceCategories } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section id="servicios" className="section-dark py-28" style={{ background: '#0A0F1E' }} aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          dark
          badge={<div className="feature-badge mb-4"><Layers size={13} /> Nuestros servicios</div>}
          title={<span id="services-heading">Todo lo que tu negocio necesita para <span className="gradient-text">crecer online</span></span>}
          subtitle="No solo diseñamos páginas. Construimos sistemas que convierten visitas en clientes."
        />

        <div className="flex flex-col gap-16">
          {serviceCategories.map((category) => (
            <div key={category.id} className="reveal">
              <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.cards.map((card) => (
                  <ServiceCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionCTA />
      </div>
    </section>
  )
}
