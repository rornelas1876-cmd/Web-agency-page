import { ArrowRight } from 'lucide-react'
import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site'

export function FinalCTASection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="final-cta-heading">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <div className="reveal">
          <h2 id="final-cta-heading" className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#0A0F1E', letterSpacing: '-0.02em' }}>
            Cada día sin página web,{' '}
            <span style={{ color: '#EF4444' }}>tus clientes eligen a otro</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Empieza hoy. Tu negocio merece una presencia digital que trabaje para conseguir clientes.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a href="#contacto" className="btn-primary-light justify-center" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', minHeight: '48px' }} data-cta="final-cotizar">
              Quiero mi página web <ArrowRight size={18} />
            </a>
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', minHeight: '48px' }}
              data-cta="final-whatsapp"
            >
              WhatsApp directo
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Sin contratos forzosos · Entrega en 5-7 días · 100% personalizado
          </p>
        </div>
      </div>
    </section>
  )
}
