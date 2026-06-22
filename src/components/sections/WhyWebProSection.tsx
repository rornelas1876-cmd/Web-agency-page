import { Check, Sparkles } from 'lucide-react'
import { whyWebProItems } from '@/data/why-webpro'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function WhyWebProSection() {
  return (
    <section className="section-light py-28 bg-white" aria-labelledby="why-webpro-heading">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <SectionHeader
              className="text-left mb-8"
              badge={
                <div className="feature-badge mb-4">
                  <Sparkles size={13} /> Nuestra diferencia
                </div>
              }
              title={<span id="why-webpro-heading">¿Por qué elegir <span className="gradient-text">WebPro</span>?</span>}
              subtitle="No somos otra agencia de plantillas. Diseñamos para que tu negocio consiga clientes."
            />
            <p className="text-gray-500 text-lg leading-relaxed -mt-8">
              Entendemos el mercado mexicano: WhatsApp, Google local, y negocios que necesitan resultados, no solo una página bonita.
            </p>
          </div>

          <div className="flex flex-col gap-4 reveal-right">
            {whyWebProItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 card-hover"
                style={{ background: '#FAFAFA' }}
              >
                <div className="check-icon flex-shrink-0">
                  <Check size={12} color="white" strokeWidth={3} />
                </div>
                <span className="font-semibold text-base" style={{ color: '#0A0F1E' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionCTA />
      </div>
    </section>
  )
}
