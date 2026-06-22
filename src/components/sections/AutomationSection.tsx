import { Bot } from 'lucide-react'
import { automationCards } from '@/data/automation'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function AutomationSection() {
  return (
    <section id="automatizacion" className="section-dark py-28" style={{ background: '#0F1A2E' }} aria-labelledby="automation-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          dark
          badge={
            <div className="feature-badge mb-4">
              <Bot size={13} /> Automatización inteligente
            </div>
          }
          title={
            <span id="automation-heading">
              Tu página no solo se ve bien.{' '}
              <span className="gradient-text">Trabaja por ti.</span>
            </span>
          }
          subtitle="Mientras tú atiendes clientes, tu sitio captura leads, responde y hace seguimiento automáticamente."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {automationCards.map((card) => (
            <div
              key={card.title}
              className="glass-card p-6 card-hover"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${card.color}20` }}
              >
                <card.Icon size={22} color={card.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <SectionCTA text="Quiero una página que trabaje por mí" />
      </div>
    </section>
  )
}
