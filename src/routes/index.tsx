import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

/* ── Scroll reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Industries data ── */
const industries = [
  {
    id: 'restaurant',
    label: '🍽️ Restaurantes',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #7F1D1D, #DC2626)',
    name: 'La Hacienda',
    tagline: 'Cocina Mexicana Auténtica',
    description: 'Reserva tu mesa en línea · Menú digital con QR · Pedidos por WhatsApp',
    features: ['Menú digital', 'Reservaciones online', 'WhatsApp ordering', 'QR menu', 'Google Maps', 'Reseñas', 'Promociones', 'Follow-up automático'],
    emoji: '🫕',
  },
  {
    id: 'hotel',
    label: '🏨 Hoteles / Villas',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
    name: 'Villa del Mar',
    tagline: 'Tu paraíso en la costa',
    description: 'Reserva directa · Galería de habitaciones · Paquetes especiales',
    features: ['Página de reservas', 'Galería de cuartos', 'Paquetes', 'Calendario', 'Automatización', 'WhatsApp', 'SEO local', 'Reviews'],
    emoji: '🏖️',
  },
  {
    id: 'dentist',
    label: '🦷 Clínicas / Dentistas',
    color: '#14B8A6',
    gradient: 'linear-gradient(135deg, #0F766E, #0D9488)',
    name: 'Dra. García Dental',
    tagline: 'Tu sonrisa, nuestra misión',
    description: 'Cita en 2 clics · Recordatorios automáticos · Perfiles del equipo',
    features: ['Reserva de citas', 'Catálogo de servicios', 'Perfiles doctores', 'Reseñas', 'Recordatorios auto', 'Follow-up', 'SEO local', 'WhatsApp'],
    emoji: '😁',
  },
  {
    id: 'lawyer',
    label: '⚖️ Abogados',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #3B0764, #6D28D9)',
    name: 'Despacho Morales & Asociados',
    tagline: 'Defensa legal experta',
    description: 'Consulta inicial online · Áreas de práctica · Captación automática',
    features: ['Presentación pro', 'Páginas de servicio', 'Citas online', 'Captación leads', 'Follow-up auto', 'SEO local', 'Seguridad', 'Formularios'],
    emoji: '🏛️',
  },
  {
    id: 'realestate',
    label: '🏠 Bienes Raíces',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #78350F, #D97706)',
    name: 'Inmobiliaria Vistas del Valle',
    tagline: 'Encuentra tu propiedad ideal',
    description: 'Catálogo de propiedades · Mapas · Contacto WhatsApp automático',
    features: ['Listado propiedades', 'Galerías de fotos', 'Mapas integrados', 'Formularios', 'WhatsApp auto', 'CRM básico', 'SEO', 'Tours virtuales'],
    emoji: '🏡',
  },
  {
    id: 'ac',
    label: '❄️ Clima / Mantenimiento',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #0C4A6E, #0284C7)',
    name: 'FríoTec Soluciones',
    tagline: 'Servicio 24/7 en tu ciudad',
    description: 'Solicita cotización · Agenda servicio · Contacto de emergencia',
    features: ['Catálogo servicios', 'Solicitud cotización', 'Emergencias', 'Agendamiento', 'Recordatorios', 'WhatsApp', 'Zona de cobertura', 'Reviews'],
    emoji: '🌬️',
  },
  {
    id: 'salon',
    label: '💅 Salones / Barberías',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #831843, #BE185D)',
    name: 'Estudio Belleza & Estilo',
    tagline: 'Tu look, nuestra pasión',
    description: 'Citas online · Galería de trabajos · Recordatorios automáticos',
    features: ['Citas online', 'Menú de servicios', 'Galería', 'Promociones', 'Recordatorios', 'WhatsApp', 'Redes sociales', 'Reseñas Google'],
    emoji: '✂️',
  },
  {
    id: 'construction',
    label: '🏗️ Construcción',
    color: '#78716C',
    gradient: 'linear-gradient(135deg, #1C1917, #44403C)',
    name: 'Constructora Herrera',
    tagline: 'Proyectos que duran generaciones',
    description: 'Portafolio de obras · Galería · Solicita cotización',
    features: ['Portafolio obras', 'Galería proyectos', 'Cotizaciones', 'Tracking leads', 'WhatsApp', 'Certificaciones', 'Testimonios', 'SEO local'],
    emoji: '🔨',
  },
  {
    id: 'gym',
    label: '💪 Gimnasios / Fitness',
    color: '#22C55E',
    gradient: 'linear-gradient(135deg, #14532D, #16A34A)',
    name: 'Power Zone Fitness',
    tagline: 'Transforma tu cuerpo, transforma tu vida',
    description: 'Membresías online · Horario de clases · Registro automático',
    features: ['Planes membresía', 'Horario clases', 'Formulario registro', 'Promociones', 'WhatsApp', 'App móvil', 'Seguimiento', 'Testimonios'],
    emoji: '🏋️',
  },
]

/* ── Automation flows ── */
const automations = [
  {
    industry: '🍽️ Restaurante',
    color: '#EF4444',
    steps: [
      { icon: '🌐', label: 'Cliente visita tu página', desc: 'Ve el menú completo con fotos' },
      { icon: '📅', label: 'Hace su reservación', desc: 'Selecciona mesa, fecha y hora' },
      { icon: '✅', label: 'Confirmación automática', desc: 'WhatsApp + correo al instante' },
      { icon: '🔔', label: 'Recordatorio 1 hora antes', desc: 'Reduce no-shows un 60%' },
      { icon: '⭐', label: 'Follow-up post-visita', desc: 'Pide reseña Google automático' },
    ],
  },
  {
    industry: '🦷 Dentista / Clínica',
    color: '#14B8A6',
    steps: [
      { icon: '💻', label: 'Cliente busca en Google', desc: 'Te encuentra en el top 3' },
      { icon: '📞', label: 'Solicita cita en línea', desc: 'Sin llamadas, sin esperas' },
      { icon: '📱', label: 'Recordatorio 24h antes', desc: 'Por WhatsApp automáticamente' },
      { icon: '🏥', label: 'Asiste a su cita', desc: 'Experiencia VIP desde el inicio' },
      { icon: '💌', label: 'Follow-up de satisfacción', desc: 'Fidelización automática' },
    ],
  },
  {
    industry: '🏨 Hotel / Villa',
    color: '#3B82F6',
    steps: [
      { icon: '🔍', label: 'Cliente busca hospedaje', desc: 'Te encuentra en Google y OTAs' },
      { icon: '🏖️', label: 'Ve fotos y disponibilidad', desc: 'Galería profesional + precios' },
      { icon: '💳', label: 'Reserva directamente', desc: 'Sin comisiones de plataformas' },
      { icon: '📦', label: 'Recibe info del paquete', desc: 'PDF automático con todo incluido' },
      { icon: '🌟', label: 'Check-out + review request', desc: 'Solicita reseña en TripAdvisor' },
    ],
  },
]

/* ── Cities ── */
const cities = [
  { name: 'Ciudad de México', icon: '🏙️' },
  { name: 'Guadalajara', icon: '🌮' },
  { name: 'Monterrey', icon: '⛰️' },
  { name: 'Cancún', icon: '🏝️' },
  { name: 'Puerto Vallarta', icon: '🌊' },
  { name: 'Tijuana', icon: '🌉' },
  { name: 'Puebla', icon: '🏛️' },
  { name: 'Querétaro', icon: '🌿' },
  { name: 'Los Cabos', icon: '🐠' },
  { name: 'Mérida', icon: '☀️' },
  { name: 'San Luis Potosí', icon: '🎪' },
  { name: 'Oaxaca', icon: '🎨' },
]

/* ── Main component ── */
function LandingPage() {
  useReveal()
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeAuto, setActiveAuto] = useState(0)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showToast, setShowToast] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    try {
      const body = new URLSearchParams(new FormData(e.currentTarget) as any).toString()
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (res.ok) {
        setFormStatus('success')
        formRef.current?.reset()
        setShowToast(true)
        setTimeout(() => setShowToast(false), 5000)
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const ind = industries[activeIndustry]

  return (
    <>
      {/* ── WhatsApp Float ── */}
      <a
        href="https://wa.me/5215500000000?text=Hola%2C%20me%20interesa%20ver%20un%20demo%20de%20p%C3%A1gina%20web%20para%20mi%20negocio"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* ── Toast ── */}
      {showToast && (
        <div className="toast">✅ ¡Recibido! Te contactamos en menos de 24 horas.</div>
      )}

      {/* ════════════════════════════════════
          NAV
      ════════════════════════════════════ */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-xl" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>
              🚀
            </div>
            <span className="text-white font-bold text-lg tracking-tight">WebPro <span className="gradient-text">México</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#soluciones" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Soluciones</a>
            <a href="#automatizaciones" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Automatizaciones</a>
            <a href="#precios" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Precios</a>
            <a href="#contacto" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}>
            Demo Gratis
          </a>
        </div>
      </nav>

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="hero-bg min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="feature-badge mb-6">
                <span>⚡</span> Agencia Digital #1 para PYMES en México
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Tu negocio merece<br />
                estar abierto <span className="gradient-text">24/7</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
                Más clientes, más reservaciones y más ventas con una{' '}
                <span className="text-white font-semibold">página web profesional</span> +{' '}
                <span className="text-white font-semibold">automatizaciones inteligentes</span>.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['🍽️ Restaurantes', '🏨 Hoteles', '🦷 Clínicas', '⚖️ Despachos', '🏠 Inmobiliarias'].map((chip) => (
                  <span key={chip} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 border border-white/10" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#contacto" className="btn-primary text-base">
                  🎯 Solicitar demo gratis
                </a>
                <a href="#soluciones" className="btn-secondary text-base">
                  Ver ejemplos →
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  { num: '200+', label: 'Negocios digitalizados' },
                  { num: '3x', label: 'Más leads promedio' },
                  { num: '48h', label: 'Demo lista' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="stat-number">{s.num}</div>
                    <div className="text-white/50 text-xs mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Floating mock browser */}
            <div className="hidden lg:block">
              <div className="float">
                <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)', background: '#1E293B' }}>
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#0F172A' }}>
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <div className="flex-1 ml-2 h-5 rounded bg-white/10 flex items-center px-2">
                      <span className="text-white/40 text-xs">tunegocio.com</span>
                    </div>
                  </div>
                  {/* Mock site */}
                  <div style={{ height: 340, background: 'linear-gradient(135deg, #7F1D1D, #DC2626)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🫕</div>
                    <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>La Hacienda</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textAlign: 'center', marginBottom: '1.5rem' }}>Cocina Mexicana Auténtica</p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button style={{ padding: '0.5rem 1.25rem', background: '#F59E0B', color: 'white', borderRadius: '0.5rem', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>Reservar Mesa</button>
                      <button style={{ padding: '0.5rem 1.25rem', background: 'transparent', color: 'white', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer' }}>Ver Menú</button>
                    </div>
                  </div>
                  {/* Quick features row */}
                  <div style={{ display: 'flex', background: '#1E293B', padding: '1rem 1.5rem', gap: '1.5rem' }}>
                    {['📱 WhatsApp', '📅 Reservas', '🗺️ Ubicación'].map((f) => (
                      <span key={f} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600 }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute" style={{ position: 'relative' }}>
                <div className="glass-card absolute -bottom-6 -left-8 px-4 py-3 flex items-center gap-2" style={{ position: 'absolute', bottom: -20, left: -30, zIndex: 10, background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: '0.875rem' }}>
                  <span>🤖</span>
                  <div>
                    <div style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>Respuesta automática</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem' }}>En menos de 1 minuto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          VALUE PROP — Problem Section
      ════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16 reveal">
            <div className="feature-badge mb-4" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444' }}>
              ⚠️ El problema que cuesta ventas
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-5" style={{ letterSpacing: '-0.02em', color: '#0A0F1E' }}>
              Cada día sin página web,<br />
              <span style={{ color: '#EF4444' }}>pierdes clientes</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Deja de depender únicamente de Instagram y recomendaciones de boca en boca.
            </p>
          </div>

          {/* Problem grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: '📵', title: 'Sin presencia en Google', desc: 'El 97% de las personas buscan negocios en Google antes de visitar. Si no estás, no existes.', color: '#EF4444' },
              { icon: '😴', title: 'Tu negocio "duerme" 16 hrs', desc: 'Mientras tú descansas, clientes potenciales buscan tus servicios y encuentran a tu competencia.', color: '#F59E0B' },
              { icon: '📞', title: 'Citas perdidas sin sistema', desc: 'Llamadas perdidas = ventas perdidas. Sin reservaciones online, perdes el 40% de los interesados.', color: '#8B5CF6' },
              { icon: '🔇', title: 'No hay seguimiento automático', desc: 'Clientes que preguntan y no regresan porque nadie hizo el seguimiento a tiempo.', color: '#EF4444' },
              { icon: '📱', title: 'Solo Instagram no es suficiente', desc: 'Las redes son para descubrimiento, no para conversión. Sin web, no hay credibilidad ni ventas.', color: '#EC4899' },
              { icon: '🗺️', title: 'Invisible en mapas', desc: 'Sin Google Business optimizado y página web, no apareces cuando alguien busca "cerca de mí".', color: '#14B8A6' },
            ].map((item) => (
              <div key={item.title} className="card-hover reveal p-6 rounded-2xl border border-gray-100" style={{ background: '#FAFAFA' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0A0F1E' }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-3 h-1 rounded-full w-12" style={{ background: item.color }}></div>
              </div>
            ))}
          </div>

          {/* Solution banner */}
          <div className="reveal rounded-3xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #152035 100%)', color: 'white' }}>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              La solución: Un ecosistema digital<br />
              que <span className="gradient-text">trabaja por ti</span>
            </h3>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Página web profesional + automatizaciones inteligentes = más clientes con menos esfuerzo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['✅ Visibilidad en Google', '✅ Reservaciones 24/7', '✅ Follow-up automático', '✅ WhatsApp integrado', '✅ SEO Local'].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full text-sm font-semibold text-white/80 border border-white/15" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          INDUSTRY GALLERY
      ════════════════════════════════════ */}
      <section id="soluciones" className="py-24" style={{ background: '#0A0F1E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <div className="feature-badge mb-4">🎨 Ejemplos por industria</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Tu industria, tu <span className="gradient-text">solución perfecta</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Diseñamos páginas específicas para cada tipo de negocio con las funciones que realmente necesitas.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
            {industries.map((item, i) => (
              <button
                key={item.id}
                className={`industry-tab ${activeIndustry === i ? 'active' : ''}`}
                onClick={() => setActiveIndustry(i)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mock site preview */}
            <div className="reveal-left">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#0F172A' }}>
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <div className="flex-1 ml-2 h-5 rounded flex items-center px-2" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <span className="text-white/40 text-xs">{ind.name.toLowerCase().replace(/\s+/g, '')}.com.mx</span>
                  </div>
                </div>
                {/* Hero mock */}
                <div style={{ height: 220, background: ind.gradient, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{ind.emoji}</div>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.4rem', fontFamily: 'serif' }}>{ind.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '1.25rem' }}>{ind.tagline}</p>
                  <button style={{ padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
                    {ind.id === 'restaurant' ? '🍽️ Ver Menú' : ind.id === 'hotel' ? '🏖️ Ver Habitaciones' : ind.id === 'dentist' ? '📅 Agendar Cita' : ind.id === 'lawyer' ? '⚖️ Consulta Gratis' : ind.id === 'salon' ? '💅 Reservar Cita' : '📲 Contactar'}
                  </button>
                </div>
                {/* Nav mock */}
                <div style={{ background: 'white', padding: '0.875rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
                  <span style={{ fontWeight: 800, color: '#0A0F1E', fontSize: '0.9rem' }}>{ind.name.split(' ')[0]}</span>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {['Inicio', 'Servicios', 'Contacto'].map(m => <span key={m} style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>{m}</span>)}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'white', background: ind.color, padding: '0.25rem 0.75rem', borderRadius: '100px', fontWeight: 700 }}>WhatsApp</span>
                </div>
                {/* Content mock */}
                <div style={{ background: '#F8FAFC', padding: '1.25rem', minHeight: 120 }}>
                  <p style={{ color: '#334155', fontSize: '0.8rem', marginBottom: '0.75rem', lineHeight: 1.5 }}>{ind.description}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem' }}>
                    {ind.features.slice(0, 6).map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.68rem', color: '#475569', fontWeight: 500 }}>
                        <span style={{ color: ind.color }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="reveal-right">
              <div className="feature-badge mb-5" style={{ background: `${ind.color}18`, border: `1px solid ${ind.color}30`, color: ind.color }}>
                {ind.label}
              </div>
              <h3 className="text-3xl font-black text-white mb-4">{ind.name}</h3>
              <p className="text-white/60 text-lg mb-8">{ind.description}</p>

              <div className="mb-8">
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Funciones incluidas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {ind.features.map((f) => (
                    <div key={f} className="check-item">
                      <div className="check-icon" style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}bb)` }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="white"><polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-white/75 text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a href="#contacto" className="btn-primary">
                  Ver demo de mi industria
                </a>
                <a
                  href={`https://wa.me/5215500000000?text=Hola%2C%20quiero%20ver%20un%20demo%20para%20${encodeURIComponent(ind.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          AUTOMATION SHOWCASE
      ════════════════════════════════════ */}
      <section id="automatizaciones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16 reveal">
            <div className="feature-badge mb-4">🤖 Automatizaciones inteligentes</div>
            <h2 className="text-4xl lg:text-5xl font-black mb-5" style={{ letterSpacing: '-0.02em', color: '#0A0F1E' }}>
              Convierte visitas en clientes<br />
              <span className="gradient-text">automáticamente</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Tu negocio capta leads, confirma citas y hace seguimiento sin que tengas que mover un dedo.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center gap-3 mb-12 reveal">
            {automations.map((a, i) => (
              <button
                key={a.industry}
                onClick={() => setActiveAuto(i)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeAuto === i ? 'text-white shadow-lg' : 'text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-700'}`}
                style={activeAuto === i ? { background: `linear-gradient(135deg, ${a.color}, ${a.color}bb)`, boxShadow: `0 4px 15px ${a.color}44` } : {}}
              >
                {a.industry}
              </button>
            ))}
          </div>

          {/* Flow */}
          <div className="max-w-2xl mx-auto reveal">
            <div className="rounded-3xl p-8" style={{ background: '#0A0F1E' }}>
              <div className="flex flex-col gap-3">
                {automations[activeAuto].steps.map((step, i) => (
                  <div key={i}>
                    <div className="flow-step">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${automations[activeAuto].color}20` }}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">{step.label}</div>
                        <div className="text-white/45 text-xs mt-0.5">{step.desc}</div>
                      </div>
                      <div className="text-white/20 text-xs font-bold">0{i + 1}</div>
                    </div>
                    {i < automations[activeAuto].steps.length - 1 && (
                      <div className="flex justify-start ml-5 my-1">
                        <div className="w-0.5 h-4" style={{ background: `${automations[activeAuto].color}30` }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-white/40 text-sm mb-4">Todo esto sucede sin intervención manual</p>
                <a href="#contacto" className="btn-primary">
                  Quiero esto para mi negocio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PRICING
      ════════════════════════════════════ */}
      <section id="precios" className="py-24" style={{ background: '#0A0F1E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16 reveal">
            <div className="feature-badge mb-4">💰 Precios transparentes</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
              Inversión que se paga sola<br />
              <span className="gradient-text">desde el primer mes</span>
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Planes diseñados para el mercado mexicano. Sin contratos forzosos, sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start reveal">
            {/* Starter */}
            <div className="pricing-card">
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Starter Website</div>
              <h3 className="text-2xl font-black text-white mb-1">Para negocios pequeños</h3>
              <p className="text-white/45 text-sm mb-6">Presencia profesional desde el primer día</p>
              <div className="mb-1">
                <span className="text-4xl font-black text-white">$8,000</span>
                <span className="text-white/45 text-sm"> MXN setup</span>
              </div>
              <div className="text-white/40 text-sm mb-8">+ $500 MXN/mes mantenimiento</div>
              <div className="flex flex-col gap-3 mb-8">
                {['Página web profesional', 'Diseño mobile-first', 'Integración WhatsApp', 'Google Maps', 'Formularios de contacto', 'SEO básico', '1 año dominio incluido', 'Soporte por WhatsApp'].map((f) => (
                  <div key={f} className="check-item">
                    <div className="check-icon">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="white"><polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-white/65 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn-secondary w-full justify-center">
                Empezar →
              </a>
            </div>

            {/* Business Growth — Featured */}
            <div className="pricing-card featured">
              <div className="ribbon">⭐ Más popular</div>
              <div className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Business Growth</div>
              <h3 className="text-2xl font-black text-white mb-1">Para crecer en serio</h3>
              <p className="text-white/45 text-sm mb-6">El plan completo para más ventas</p>
              <div className="mb-1">
                <span className="text-4xl font-black text-white">$20,000</span>
                <span className="text-white/45 text-sm"> MXN setup</span>
              </div>
              <div className="text-white/40 text-sm mb-8">+ $1,500 MXN/mes</div>
              <div className="flex flex-col gap-3 mb-8">
                {['Todo lo del plan Starter', 'Sistema de reservaciones', 'Respuestas automáticas', 'Integración redes sociales', 'Google Business optimizado', 'Analytics y reportes', 'Actualizaciones mensuales', 'Soporte prioritario 24/7'].map((f) => (
                  <div key={f} className="check-item">
                    <div className="check-icon" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="white"><polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn-primary w-full justify-center">
                🚀 Quiero este plan
              </a>
            </div>

            {/* Automation Pro */}
            <div className="pricing-card">
              <div className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">Automation Pro</div>
              <h3 className="text-2xl font-black text-white mb-1">Sistemas que escalan</h3>
              <p className="text-white/45 text-sm mb-6">Para empresas que quieren automatizar todo</p>
              <div className="mb-1">
                <span className="text-4xl font-black text-white">$40,000+</span>
                <span className="text-white/45 text-sm"> MXN setup</span>
              </div>
              <div className="text-white/40 text-sm mb-8">+ $3,000+ MXN/mes</div>
              <div className="flex flex-col gap-3 mb-8">
                {['Todo lo del plan Growth', 'Automatización de citas', 'Secuencias de follow-up', 'Integración CRM', 'Chatbot con IA', 'Tracking de leads', 'Integraciones a medida', 'Manager dedicado'].map((f) => (
                  <div key={f} className="check-item">
                    <div className="check-icon" style={{ background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="white"><polyline points="2,6 5,9 10,3" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-white/65 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn-secondary w-full justify-center">
                Hablar con experto →
              </a>
            </div>
          </div>

          {/* Money back guarantee */}
          <div className="text-center mt-12 reveal">
            <p className="text-white/40 text-sm">
              🛡️ <strong className="text-white/60">Garantía de satisfacción</strong> — Si no quedas satisfecho con el diseño, lo ajustamos sin costo adicional.
              &nbsp;|&nbsp; 📄 Contrato claro y transparente &nbsp;|&nbsp; 💳 Planes de pago disponibles
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SOCIAL PROOF / TESTIMONIALS
      ════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <div className="feature-badge mb-4" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#16A34A' }}>
              ⭐⭐⭐⭐⭐ Resultados reales
            </div>
            <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: '#0A0F1E', letterSpacing: '-0.02em' }}>
              Negocios que ya <span className="gradient-text">transformaron sus ventas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            {[
              { name: 'Restaurante La Paloma', city: 'Guadalajara', emoji: '🍽️', result: '+180% reservaciones en línea', quote: 'Antes llenábamos solo por Instagram. Ahora Google nos manda clientes solos y el sistema de reservas trabaja 24/7 sin nosotros.', color: '#EF4444' },
              { name: 'Dra. Martínez Dental', city: 'Ciudad de México', emoji: '🦷', result: '-60% citas olvidadas', quote: 'Los recordatorios automáticos por WhatsApp eliminaron casi todos los no-shows. Mis pacientes agradecen el recordatorio y yo no pierdo dinero.', color: '#14B8A6' },
              { name: 'Hotel Brisas del Mar', city: 'Puerto Vallarta', emoji: '🏖️', result: '+3x reservas directas', quote: 'Dejamos de pagar comisiones altísimas a Booking. Ahora el 60% de nuestras reservas llegan directo por nuestra web.', color: '#3B82F6' },
            ].map((t) => (
              <div key={t.name} className="card-hover p-7 rounded-2xl border border-gray-100" style={{ background: '#FAFAFA' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${t.color}15` }}>
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#0A0F1E' }}>{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.city}</div>
                  </div>
                  <div className="ml-auto px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: t.color }}>
                    {t.result}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex mt-4 gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CITIES
      ════════════════════════════════════ */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl font-black mb-3" style={{ color: '#0A0F1E' }}>
              Creamos páginas para negocios en <span className="gradient-text">todo México</span>
            </h2>
            <p className="text-gray-500">Trabajamos 100% remoto — te entregamos resultados sin importar donde estés</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
            {cities.map((city) => (
              <div key={city.name} className="card-hover flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white text-center">
                <span className="text-2xl">{city.icon}</span>
                <span className="text-xs font-semibold text-gray-600">{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          LEAD CAPTURE FORM
      ════════════════════════════════════ */}
      <section id="contacto" className="py-24" style={{ background: '#0A0F1E' }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left copy */}
            <div className="reveal-left">
              <div className="feature-badge mb-6">🎯 Demo gratuita sin compromiso</div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                ¿Quieres ver cómo quedaría la<br />
                página de <span className="gradient-text">tu negocio</span>?
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                En menos de 48 horas creamos un demo personalizado para tu negocio.
                Completamente gratis, sin compromiso.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                {[
                  { icon: '⚡', title: 'Demo en 48 horas', desc: 'Prototipo real con tu nombre y servicios' },
                  { icon: '🎨', title: 'Diseño personalizado', desc: 'Adaptado a tu industria y ciudad' },
                  { icon: '🤖', title: 'Automatizaciones incluidas', desc: 'Te mostramos cómo funciona el sistema' },
                  { icon: '💬', title: 'Consulta estratégica', desc: 'Revisamos juntos cómo capturar más clientes' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-white/45 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alternative WhatsApp CTA */}
              <div className="rounded-2xl p-5" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
                <p className="text-white/60 text-sm mb-3">¿Prefieres hablar directamente?</p>
                <a
                  href="https://wa.me/5215500000000?text=Hola%2C%20me%20interesa%20ver%20un%20demo%20para%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-black text-white mb-3">¡Solicitud recibida!</h3>
                    <p className="text-white/60 mb-6">Te contactamos en menos de 24 horas con el demo de tu negocio.</p>
                    <a
                      href="https://wa.me/5215500000000?text=Hola%2C%20acabo%20de%20llenar%20el%20formulario%20para%20un%20demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      Confirmar por WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-white mb-2">Crear mi demo gratis</h3>
                    <p className="text-white/45 text-sm mb-6">Completa el formulario y te contactamos en máximo 24 horas</p>

                    <form ref={formRef} name="demo-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleFormSubmit}>
                      <input type="hidden" name="form-name" value="demo-request" />
                      <p style={{ display: 'none' }}>
                        <label>No llenar: <input name="bot-field" /></label>
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">Tu nombre *</label>
                          <input name="nombre" type="text" className="form-input" placeholder="Juan García" required />
                        </div>
                        <div>
                          <label className="form-label">Nombre del negocio *</label>
                          <input name="negocio" type="text" className="form-input" placeholder="Restaurante El Sol" required />
                        </div>
                        <div>
                          <label className="form-label">Tipo de negocio *</label>
                          <select name="tipo_negocio" className="form-input" required defaultValue="">
                            <option value="" disabled>Seleccionar...</option>
                            <option>Restaurante / Cafetería / Bar</option>
                            <option>Hotel / Villa / Hospedaje</option>
                            <option>Clínica / Dentista / Médico</option>
                            <option>Abogado / Despacho Legal</option>
                            <option>Bienes Raíces</option>
                            <option>Aire Acondicionado / Mantenimiento</option>
                            <option>Salón de Belleza / Barbería</option>
                            <option>Construcción / Contratista</option>
                            <option>Gimnasio / Fitness</option>
                            <option>Otro negocio</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Ciudad *</label>
                          <select name="ciudad" className="form-input" required defaultValue="">
                            <option value="" disabled>Seleccionar ciudad...</option>
                            <option>Ciudad de México</option>
                            <option>Guadalajara</option>
                            <option>Monterrey</option>
                            <option>Cancún</option>
                            <option>Puerto Vallarta</option>
                            <option>Tijuana</option>
                            <option>Puebla</option>
                            <option>Querétaro</option>
                            <option>Los Cabos</option>
                            <option>Mérida</option>
                            <option>San Luis Potosí</option>
                            <option>Oaxaca</option>
                            <option>Otra ciudad</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label">WhatsApp / Teléfono *</label>
                          <input name="telefono" type="tel" className="form-input" placeholder="+52 55 0000 0000" required />
                        </div>
                        <div>
                          <label className="form-label">Correo electrónico *</label>
                          <input name="email" type="email" className="form-input" placeholder="juan@negocio.com" required />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="form-label">¿Tienes página web actualmente?</label>
                          <input name="web_actual" type="url" className="form-input" placeholder="www.sunegocio.com (opcional)" />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="form-label">¿Cuál es tu principal objetivo?</label>
                          <select name="objetivo" className="form-input" defaultValue="">
                            <option value="">Seleccionar (opcional)</option>
                            <option>Conseguir más clientes</option>
                            <option>Sistema de reservaciones</option>
                            <option>Aparecer en Google</option>
                            <option>Automatizar seguimiento de leads</option>
                            <option>Reemplazar mi web actual</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="btn-primary w-full justify-center mt-6 text-base"
                        style={{ padding: '1rem', opacity: formStatus === 'loading' ? 0.7 : 1 }}
                      >
                        {formStatus === 'loading' ? '⏳ Enviando...' : '🎯 Crear mi demo gratis'}
                      </button>

                      {formStatus === 'error' && (
                        <p className="text-red-400 text-sm text-center mt-3">
                          Hubo un error. Por favor escríbenos directamente por WhatsApp.
                        </p>
                      )}

                      <p className="text-white/30 text-xs text-center mt-4">
                        🔒 Tus datos están seguros. No compartimos tu información con terceros.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FINAL CTA — URGENCY
      ════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="reveal">
            <div className="text-5xl mb-6">⏰</div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#0A0F1E', letterSpacing: '-0.02em' }}>
              Cada día que tu negocio<br />
              no está en Google,{' '}
              <span style={{ color: '#EF4444' }}>tus clientes</span><br />
              <span style={{ color: '#EF4444' }}>encuentran a alguien más</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              No esperes más. Solicita tu demostración gratuita hoy y empieza a capturar clientes desde el primer día.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contacto" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                🚀 Solicitar demostración
              </a>
              <a
                href="https://wa.me/5215500000000?text=Hola%2C%20quiero%20una%20demo%20gratis%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
              >
                💬 WhatsApp directo
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              ✅ Sin contratos &nbsp;·&nbsp; ✅ Demo gratis en 48 horas &nbsp;·&nbsp; ✅ 100% personalizado para tu negocio
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FOOTER
      ════════════════════════════════════ */}
      <footer style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 1.25rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>🚀</div>
                <span className="text-white font-bold">WebPro México</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Agencia digital especializada en páginas web + automatizaciones para PYMES en México.
              </p>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Soluciones</h4>
              <ul className="flex flex-col gap-2">
                {['Restaurantes', 'Hoteles y Villas', 'Clínicas y Dentistas', 'Abogados', 'Bienes Raíces', 'Gimnasios'].map(s => (
                  <li key={s}><a href="#soluciones" className="text-white/35 hover:text-white/70 text-sm transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Ciudades</h4>
              <ul className="flex flex-col gap-2">
                {['Ciudad de México', 'Guadalajara', 'Monterrey', 'Cancún', 'Puerto Vallarta', 'Tijuana'].map(c => (
                  <li key={c}><span className="text-white/35 text-sm">{c}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Contacto</h4>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/5215500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                  💬 WhatsApp
                </a>
                <a href="mailto:hola@webpro.mx" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                  ✉️ hola@webpro.mx
                </a>
                <a href="#contacto" className="btn-primary mt-2" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  Demo gratis
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">© 2025 WebPro México. Todos los derechos reservados.</p>
            <p className="text-white/20 text-xs">Diseño web profesional para PYMES en México 🇲🇽</p>
          </div>
        </div>
      </footer>
    </>
  )
}
