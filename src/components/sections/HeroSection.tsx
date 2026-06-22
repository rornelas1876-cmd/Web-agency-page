import { ArrowRight, Check, MessageCircle, Calendar, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 pb-16" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Tu negocio necesita clientes.{' '}
              <span className="gradient-text">Tu página web debe trabajar</span> para conseguirlos.
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
              Diseñamos sitios web rápidos, profesionales y optimizados para que tus clientes te encuentren, confíen y te contacten.
            </p>

            <div className="flex flex-col gap-2.5 mb-10">
              {['Diseño profesional', 'Optimizada para Google', 'WhatsApp integrado', 'Lista en 5-7 días'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Check size={16} color="#22C55E" strokeWidth={3} /> {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <a
                href="#contacto"
                className="btn-primary text-base justify-center"
                style={{ minHeight: '48px' }}
                data-cta="hero-primary"
              >
                Quiero mi página web
              </a>
              <a
                href="#ejemplos"
                className="btn-secondary text-base justify-center"
                style={{ minHeight: '48px' }}
                data-cta="hero-secondary"
              >
                Ver ejemplos <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              {[
                { num: '200+', label: 'Proyectos realizados' },
                { num: '5-7', label: 'Días de entrega' },
                { num: '100%', label: 'Personalizado' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-number">{s.num}</div>
                  <div className="text-white/50 text-xs mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="float">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)', background: '#1E293B' }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#0F172A' }}>
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="flex-1 ml-2 h-5 rounded bg-white/10 flex items-center px-2">
                    <span className="text-white/40 text-xs">tunegocio.com</span>
                  </div>
                </div>
                <img
                  src="/previews/restaurant.png"
                  alt="Ejemplo de página web profesional para restaurante"
                  style={{ display: 'block', width: '100%', height: 340, objectFit: 'cover' }}
                />
                <div style={{ display: 'flex', background: '#1E293B', padding: '1rem 1.5rem', gap: '1.5rem' }}>
                  {[
                    { Icon: MessageCircle, label: 'WhatsApp' },
                    { Icon: Calendar, label: 'Reservas' },
                    { Icon: MapPin, label: 'Ubicación' },
                  ].map((f) => (
                    <span key={f.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600 }}>
                      <f.Icon size={14} /> {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
