import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function TestimonialsSection() {
  return (
    <section className="section-light py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          badge={
            <div className="feature-badge mb-4" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#16A34A' }}>
              <span className="inline-flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#16A34A" stroke="none" />)}
              </span>
              Resultados reales
            </div>
          }
          title={
            <span id="testimonials-heading">
              Negocios que ya <span className="gradient-text">transformaron sus ventas</span>
            </span>
          }
        />

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover p-7 rounded-2xl border border-gray-100" style={{ background: '#FAFAFA' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${t.color}15` }}>
                  <t.Icon size={22} color={t.color} />
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#0A0F1E' }}>{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.city}</div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: t.color }}>
                  {t.result}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex mt-4 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FACC15" stroke="none" />)}
              </div>
            </div>
          ))}
        </div>

        <SectionCTA />
      </div>
    </section>
  )
}
