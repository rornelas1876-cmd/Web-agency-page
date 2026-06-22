import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, CheckCircle2, Home, MessageCircle, Rocket } from 'lucide-react'
import { CALENDLY_URL, whatsappUrl } from '@/data/site'

export const Route = createFileRoute('/gracias')({
  component: GraciasPage,
  head: () => ({
    meta: [
      { title: '¡Gracias! — WebPro México' },
      { name: 'description', content: 'Recibimos tu solicitud. Te contactamos pronto con tu cotización personalizada.' },
    ],
  }),
})

function GraciasPage() {
  return (
    <div className="hero-bg min-h-screen flex items-center justify-center px-5 py-24">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}>
          <CheckCircle2 size={40} color="#22C55E" />
        </div>

        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
          ¡Solicitud recibida!
        </h1>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Gracias por contactarnos. Te escribimos por WhatsApp en menos de 24 horas con tu cotización personalizada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center" style={{ fontSize: '1rem', padding: '1rem 2rem', minHeight: '48px' }}>
            <Calendar size={18} /> Agendar llamada de 30 min
          </a>
          <a
            href={whatsappUrl('Hola, acabo de llenar el formulario para cotizar mi página web.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
            style={{ fontSize: '1rem', padding: '1rem 2rem', minHeight: '48px' }}
          >
            <MessageCircle size={18} /> Confirmar por WhatsApp
          </a>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors">
          <Home size={16} /> Volver al inicio
        </Link>

        <div className="mt-16 flex items-center justify-center gap-2 text-white/30 text-xs">
          <Rocket size={14} /> WebPro México
        </div>
      </div>
    </div>
  )
}
