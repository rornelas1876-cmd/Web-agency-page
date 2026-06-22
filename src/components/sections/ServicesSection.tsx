import { Layers } from 'lucide-react'
import { serviceCategories } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

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
                  <div
                    key={card.title}
                    className="glass-card p-6 card-hover"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(245,158,11,0.12)' }}>
                      <card.Icon size={20} color="#F59E0B" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-4">{card.title}</h4>
                    <div className="flex flex-col gap-3 text-sm">
                      <div>
                        <span className="text-red-400 font-bold text-xs uppercase tracking-wide">Problema</span>
                        <p className="text-white/55 mt-1 leading-relaxed">{card.problem}</p>
                      </div>
                      <div>
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-wide">Solución</span>
                        <p className="text-white/55 mt-1 leading-relaxed">{card.solution}</p>
                      </div>
                      <div>
                        <span className="text-green-400 font-bold text-xs uppercase tracking-wide">Resultado</span>
                        <p className="text-white/75 mt-1 leading-relaxed font-medium">{card.result}</p>
                      </div>
                    </div>
                  </div>
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
