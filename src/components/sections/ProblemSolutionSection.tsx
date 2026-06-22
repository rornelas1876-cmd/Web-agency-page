import { AlertTriangle, Check } from 'lucide-react'
import { problems, solutionChips } from '@/data/problems'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function ProblemSolutionSection() {
  return (
    <section className="section-light py-28 bg-white" aria-labelledby="problems-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          badge={
            <div className="feature-badge mb-4" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444' }}>
              <AlertTriangle size={13} /> El problema
            </div>
          }
          title={
            <>
              <span id="problems-heading">¿Tu negocio tiene alguno de estos problemas?</span>
            </>
          }
          subtitle="La mayoría de negocios mexicanos pierden clientes todos los días sin darse cuenta."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((item) => (
            <div key={item.title} className="card-hover reveal p-6 rounded-2xl border border-gray-100" style={{ background: '#FAFAFA' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15` }}>
                <item.Icon size={24} color={item.color} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0A0F1E' }}>{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal rounded-3xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #152035 100%)', color: 'white' }}>
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Nosotros <span className="gradient-text">lo solucionamos</span>
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Página web profesional + automatización inteligente = más clientes con menos esfuerzo
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {solutionChips.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/80 border border-white/15" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <Check size={15} color="#22C55E" /> {item}
              </span>
            ))}
          </div>
        </div>

        <SectionCTA />
      </div>
    </section>
  )
}
