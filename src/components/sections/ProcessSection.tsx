import { Route } from 'lucide-react'
import { processSteps } from '@/data/process'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function ProcessSection() {
  return (
    <section id="proceso" className="section-light py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          badge={<div className="feature-badge mb-4"><Route size={13} /> Proceso simple</div>}
          title={<span id="process-heading">Así <span className="gradient-text">trabajamos</span></span>}
          subtitle="Sin complicaciones. Tú nos cuentas tu negocio, nosotros hacemos el resto."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl border border-gray-100 card-hover text-center"
              style={{ background: '#FAFAFA' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}
              >
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(245,158,11,0.1)' }}>
                <step.Icon size={22} color="#F59E0B" />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0A0F1E' }}>{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.reassurance}</p>
            </div>
          ))}
        </div>

        <SectionCTA text="Cotizar mi proyecto" />
      </div>
    </section>
  )
}
