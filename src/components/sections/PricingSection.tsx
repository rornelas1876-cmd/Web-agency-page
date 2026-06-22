import { CreditCard, ShieldCheck, FileText } from 'lucide-react'
import { pricingTiers } from '@/data/pricing'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'
import { PricingCard } from '@/components/ui/PricingCard'

export function PricingSection() {
  return (
    <section id="precios" className="section-dark py-28" style={{ background: '#0A0F1E' }} aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          dark
          badge={<div className="feature-badge mb-4"><CreditCard size={13} /> Precios transparentes</div>}
          title={<span id="pricing-heading">Inversión que se paga sola <span className="gradient-text">desde el primer mes</span></span>}
          subtitle="Planes diseñados para el mercado mexicano. Sin contratos forzosos, sin sorpresas."
        />

        <div className="grid md:grid-cols-3 gap-8 items-start reveal">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/40 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={15} color="#22C55E" /> <strong className="text-white/60">Garantía de satisfacción</strong>
            </span>
            <span className="inline-flex items-center gap-1.5"><FileText size={15} /> Contrato claro y transparente</span>
            <span className="inline-flex items-center gap-1.5"><CreditCard size={15} /> Planes de pago disponibles</span>
          </div>
        </div>

        <SectionCTA text="Cotizar ahora" />
      </div>
    </section>
  )
}
