import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, CheckCircle2, Home, MessageCircle, Rocket } from 'lucide-react'

export const Route = createFileRoute('/gracias')({
  component: GraciasPage,
  head: () => ({
    meta: [
      { title: '¡Gracias! — WebPro México' },
      { name: 'description', content: 'Recibimos tu solicitud. Te contactamos pronto con el demo de tu negocio.' },
    ],
  }),
})

const CALENDLY_URL = 'https://calendly.com/rornelas1876/30min'

function GraciasPage() {
  return (
    <div className="hero-bg ambient-orbs min-h-screen flex items-center justify-center px-5 py-24">
      <div className="max-w-xl w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)' }}>
          <CheckCircle2 size={36} color="#22C55E" />
        </div>

        <h1 className="display-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          ¡Solicitud recibida!
        </h1>
        <p className="text-white/55 text-base lg:text-lg mb-10 leading-relaxed font-light">
          Gracias por contactarnos. Revisaremos la información de tu negocio y te escribimos en menos de 24 horas con tu demo personalizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
          >
            <Calendar size={17} /> Agendar llamada de 30 min
          </a>
          <a
            href="https://wa.me/5213315534380?text=Hola%2C%20acabo%20de%20llenar%20el%20formulario%20para%20un%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
          >
            <MessageCircle size={17} /> Confirmar por WhatsApp
          </a>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-white/45 hover:text-white/75 text-sm font-medium transition-colors">
          <Home size={15} /> Volver al inicio
        </Link>

        <div className="mt-16 flex items-center justify-center gap-2 text-white/25 text-xs">
          <Rocket size={13} /> WebPro México
        </div>
      </div>
    </div>
  )
}
