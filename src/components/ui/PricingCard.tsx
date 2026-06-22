import { Star, Rocket } from 'lucide-react'
import type { PricingTier } from '@/data/pricing'

type PricingCardProps = {
  tier: PricingTier
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
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
            <div
              className="check-icon"
              style={tier.featured ? { background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' } : undefined}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="white">
                <polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
  )
}
