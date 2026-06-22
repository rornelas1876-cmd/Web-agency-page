import { Building2 } from 'lucide-react'
import { clientLogoPlaceholders, googleReviews, testimonials } from '@/data/testimonials'
import { GoogleReviewCard } from '@/components/ui/GoogleReviewCard'

export function TrustBar() {
  const miniTestimonials = testimonials.slice(0, 2)

  return (
    <section className="trust-bar py-12 border-b border-gray-100 bg-white" aria-label="Prueba social">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-center text-sm font-semibold text-gray-500 mb-10 reveal max-w-2xl mx-auto">
          Negocios que ya están creciendo con una presencia digital profesional
        </p>

        {/* TODO: reemplazar con logos reales de clientes */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {clientLogoPlaceholders.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200"
              style={{ background: '#F1F5F9' }}
              title="TODO: reemplazar con logo real del cliente"
            >
              <Building2 size={16} color="#94A3B8" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 reveal">
          {/* Mini testimonials — TODO: testimonios reales verificados */}
          <div className="flex flex-col gap-4">
            {miniTestimonials.map((t) => (
              <div key={t.name} className="p-5 rounded-2xl border border-gray-100" style={{ background: '#FAFAFA' }}>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-3">&ldquo;{t.quote.slice(0, 120)}…&rdquo;</p>
                <div className="text-sm font-bold" style={{ color: '#0A0F1E' }}>{t.name}</div>
                <div className="text-gray-400 text-xs">{t.city}</div>
              </div>
            ))}
          </div>

          {/* Google review cards — TODO: testimonios reales verificados */}
          <div className="flex flex-col gap-4">
            {googleReviews.map((review) => (
              <GoogleReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
