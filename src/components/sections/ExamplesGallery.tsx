import { useState } from 'react'
import { Check, ImageIcon } from 'lucide-react'
import { industries } from '@/data/industries'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionCTA } from '@/components/layout/SectionCTA'

const exampleDetails: Record<string, { name: string; features: string[] }> = {
  restaurant: { name: 'La Hacienda', features: ['Menú digital', 'Reservaciones online', 'WhatsApp ordering', 'Google Maps'] },
  dentist: { name: 'Dra. García Dental', features: ['Reserva de citas', 'Recordatorios auto', 'Perfiles doctores', 'SEO local'] },
  lawyer: { name: 'Despacho Morales', features: ['Presentación pro', 'Citas online', 'Captación leads', 'Formularios'] },
  mechanic: { name: 'AutoTec Mecánica', features: ['Cotizaciones online', 'Catálogo servicios', 'WhatsApp', 'Zona de cobertura'] },
  store: { name: 'Tienda El Centro', features: ['Catálogo productos', 'WhatsApp ventas', 'Promociones', 'SEO local'] },
  local: { name: 'ServiPro Local', features: ['Google Maps', 'Formulario contacto', 'Reseñas', 'WhatsApp'] },
}

export function ExamplesGallery() {
  const [active, setActive] = useState(0)
  const ind = industries[active]
  const details = exampleDetails[ind.id] ?? { name: 'Tu Negocio', features: [] }

  return (
    <section id="ejemplos" className="section-light py-28" style={{ background: '#F8FAFC' }} aria-labelledby="examples-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          badge={<div className="feature-badge mb-4"><ImageIcon size={13} /> Ejemplos</div>}
          title={<span id="examples-heading">Así se ve una página <span className="gradient-text">profesional</span></span>}
          subtitle="Diseños personalizados para cada tipo de negocio — no plantillas genéricas."
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {industries.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`industry-tab-light inline-flex items-center gap-1.5 ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <item.Icon size={14} /> {item.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#0F172A' }}>
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 ml-2 h-5 rounded flex items-center px-2" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <span className="text-white/40 text-xs">{details.name.toLowerCase().replace(/\s+/g, '')}.com.mx</span>
              </div>
            </div>
            <img
              src={`/previews/${ind.id}.png`}
              alt={`Ejemplo de página web para ${ind.label}`}
              loading="lazy"
              className="w-full object-cover"
              style={{ height: 240, display: 'block' }}
            />
            <div style={{ background: 'white', padding: '1.25rem' }}>
              <div className="grid grid-cols-2 gap-2">
                {details.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                    <Check size={12} color={ind.color} /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="feature-badge mb-5" style={{ background: `${ind.color}18`, border: `1px solid ${ind.color}30`, color: ind.color }}>
              <ind.Icon size={13} /> {ind.label}
            </div>
            <h3 className="text-3xl font-black mb-4" style={{ color: '#0A0F1E' }}>{details.name}</h3>
            <p className="text-gray-500 text-lg mb-8">{ind.benefit}</p>
            <a href="#contacto" className="btn-primary-light" data-cta="examples-cotizar">
              Quiero algo así para mi negocio
            </a>
          </div>
        </div>

        <SectionCTA />
      </div>
    </section>
  )
}
