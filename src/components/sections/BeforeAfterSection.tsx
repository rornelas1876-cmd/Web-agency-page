import { ArrowDown } from 'lucide-react'
import { beforeItems, afterItems } from '@/data/before-after'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

export function BeforeAfterSection() {
  return (
    <section className="section-dark py-28" style={{ background: '#0A0F1E' }} aria-labelledby="before-after-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          dark
          title={<span id="before-after-heading">La diferencia que <span className="gradient-text">sí se nota</span></span>}
          subtitle="Una página web profesional transforma cómo te ven tus clientes — y cuántos te contactan."
        />

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center reveal">
          {/* Before */}
          <div className="rounded-3xl p-8 border border-red-500/20" style={{ background: 'rgba(239,68,68,0.06)' }}>
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-6">De esto...</div>
            <h3 className="text-xl font-black text-white mb-6">Sitio web que espanta clientes</h3>
            <div className="flex flex-col gap-4">
              {beforeItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(239,68,68,0.15)' }}>
                    <item.Icon size={18} color="#EF4444" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>
              <ArrowDown size={24} color="white" className="lg:rotate-[-90deg]" />
            </div>
          </div>

          {/* After */}
          <div className="rounded-3xl p-8 border border-green-500/20" style={{ background: 'rgba(34,197,94,0.06)' }}>
            <div className="text-green-400 text-xs font-bold uppercase tracking-widest mb-6">A esto...</div>
            <h3 className="text-xl font-black text-white mb-6">Sitio web que consigue clientes</h3>
            <div className="flex flex-col gap-4">
              {afterItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,197,94,0.15)' }}>
                    <item.Icon size={18} color="#22C55E" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionCTA text="Quiero transformar mi negocio" />
      </div>
    </section>
  )
}
