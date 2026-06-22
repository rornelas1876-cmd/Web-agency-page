import { CreditCard, ShieldCheck, FileText, Star, Rocket } from 'lucide-react'
import { pricingTiers } from '@/data/pricing'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

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
            <div key={tier.id} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
              {tier.ribbon && (
                <div className="ribbon inline-flex items-center gap-1">
                  <Star size={11} fill="white" /> {tier.ribbon}
                </div>
              )}
              <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.featured ? 'text-yellow-400' : 'text-white/40'}`}>
                {tier.name}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{tier.tagline}</h3>
              <div className="mb-1 mt-4">
                <span className="text-4xl font-black text-white">{tier.setup}</span>
                <span className="text-white/45 text-sm"> MXN setup</span>
              </div>
              <div className="text-white/40 text-sm mb-8">+ {tier.monthly}</div>
              <div className="flex flex-col gap-3 mb-8">
                {tier.features.map((f) => (
                  <div key={f} className="check-item">
                    <div className="check-icon" style={tier.featured ? { background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' } : undefined}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="white"><polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className={`text-sm ${tier.featured ? 'text-white/80 font-medium' : 'text-white/65'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={`#contacto?plan=${tier.id}`}
                className={`${tier.featured ? 'btn-primary' : 'btn-secondary'} w-full justify-center`}
                style={{ minHeight: '48px' }}
                data-cta={`pricing-${tier.id}`}
              >
                {tier.featured && <Rocket size={18} />}
                {tier.cta}{tier.featured ? '' : ' →'}
              </a>
            </div>
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
