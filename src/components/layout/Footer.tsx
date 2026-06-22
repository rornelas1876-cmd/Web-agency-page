import { Calendar, MessageCircle } from 'lucide-react'
import { CALENDLY_URL, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site'

const FOOTER_SOLUTIONS = ['Restaurantes', 'Dentistas', 'Abogados', 'Talleres', 'Tiendas', 'Servicios locales']
const FOOTER_CITIES = ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Cancún', 'Puerto Vallarta', 'Tijuana']

export function Footer() {
  return (
    <footer style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 1.25rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>
                🚀
              </div>
              <span className="text-white font-bold">WebPro México</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Páginas web profesionales y automatizaciones para negocios mexicanos que quieren más clientes.
            </p>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Soluciones</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_SOLUTIONS.map((s) => (
                <li key={s}>
                  <a href="#industrias" className="text-white/35 hover:text-white/70 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Ciudades</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_CITIES.map((c) => (
                <li key={c}><span className="text-white/35 text-sm">{c}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                <Calendar size={14} /> Agendar llamada
              </a>
              <a href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href="#contacto" className="btn-primary mt-2" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }} data-cta="footer-cotizar">
                Cotizar
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2026 WebPro México. Todos los derechos reservados.</p>
          <p className="text-white/20 text-xs">Diseño web profesional para PYMES en México</p>
        </div>
      </div>
    </footer>
  )
}
