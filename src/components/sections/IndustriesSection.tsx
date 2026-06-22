import { Palette } from 'lucide-react'
import { industries } from '@/data/industries'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function IndustriesSection() {
  return (
    <section id="industrias" className="section-dark py-28" style={{ background: '#0A0F1E' }} aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          dark
          badge={<div className="feature-badge mb-4"><Palette size={13} /> Por industria</div>}
          title={<span id="industries-heading">Soluciones para <span className="gradient-text">cada negocio</span></span>}
          subtitle="Cada industria tiene necesidades diferentes. Diseñamos para las tuyas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {industries.map((ind) => (
            <a
              key={ind.id}
              href="#ejemplos"
              className="glass-card p-6 card-hover block no-underline"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${ind.color}20` }}>
                <ind.Icon size={22} color={ind.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{ind.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{ind.benefit}</p>
              <span className="inline-block mt-4 text-sm font-semibold" style={{ color: ind.color }}>
                Ver ejemplo →
              </span>
            </a>
          ))}
        </div>

        <SectionCTA text="Cotizar para mi industria" />
      </div>
    </section>
  )
}
