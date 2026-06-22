import { useEffect, useRef } from 'react'
import { Calendar, MessageCircle, Target, Zap, Palette, Bot, MessageSquare } from 'lucide-react'
import { CALENDLY_URL, FORM_SUBMIT_EMAIL, SITE_URL, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/data/site'

const BUSINESS_TYPES = [
  'Restaurante / Cafetería / Bar',
  'Clínica / Dentista / Médico',
  'Abogado / Despacho Legal',
  'Taller mecánico',
  'Tienda / Comercio',
  'Servicio local',
  'Otro negocio',
]

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash
    const planMatch = hash.match(/plan=(\w+)/)
    const plan = params.get('plan') ?? planMatch?.[1]
    if (plan && formRef.current) {
      const input = formRef.current.querySelector<HTMLInputElement>('input[name="plan"]')
      if (input) input.value = plan
    }
  }, [])

  return (
    <section id="contacto" className="section-dark py-28" style={{ background: '#0A0F1E' }} aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <div className="feature-badge mb-6"><Target size={13} /> Cotiza sin compromiso</div>
            <h2 id="contact-heading" className="text-4xl lg:text-5xl font-black text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              ¿Listo para conseguir <span className="gradient-text">más clientes</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Cuéntanos sobre tu negocio y te enviamos una propuesta personalizada en menos de 24 horas.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { Icon: Zap, title: 'Respuesta en 24 horas', desc: 'Te contactamos por WhatsApp con tu cotización' },
                { Icon: Palette, title: 'Diseño personalizado', desc: 'Adaptado a tu industria y ciudad' },
                { Icon: Bot, title: 'Automatización incluida', desc: 'Tu página trabaja por ti desde el día uno' },
                { Icon: MessageSquare, title: 'Consulta estratégica', desc: 'Revisamos juntos cómo capturar más clientes' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}>
                    <item.Icon size={20} color="#F59E0B" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-white/45 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-5 mb-5" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <p className="text-white/60 text-sm mb-3">¿Prefieres agendar una llamada?</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', minHeight: '44px' }} data-cta="contact-calendly">
                <Calendar size={18} /> Agendar 30 min
              </a>
            </div>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
              <p className="text-white/60 text-sm mb-3">¿Prefieres hablar directamente?</p>
              <a href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', minHeight: '44px' }} data-cta="contact-whatsapp">
                <MessageCircle size={18} /> Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal-right">
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-xl font-black text-white mb-2">Cotiza tu página web</h3>
              <p className="text-white/45 text-sm mb-6">Completa el formulario y te contactamos pronto</p>

              <form
                ref={formRef}
                action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`}
                method="POST"
                data-cta="lead-form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nueva cotización - WebPro México" />
                <input type="hidden" name="_next" value={`${SITE_URL}/gracias`} />
                <input type="hidden" name="plan" value="" />

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="form-label" htmlFor="nombre">Nombre *</label>
                    <input id="nombre" name="nombre" type="text" className="form-input text-base" placeholder="Juan García" required style={{ minHeight: '48px' }} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="negocio">Negocio *</label>
                    <input id="negocio" name="negocio" type="text" className="form-input text-base" placeholder="Restaurante El Sol" required style={{ minHeight: '48px' }} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="whatsapp">WhatsApp *</label>
                    <input id="whatsapp" name="whatsapp" type="tel" className="form-input text-base" placeholder="+52 55 0000 0000" required style={{ minHeight: '48px' }} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="tipo_negocio">Tipo de negocio *</label>
                    <select id="tipo_negocio" name="tipo_negocio" className="form-input text-base" required defaultValue="" style={{ minHeight: '48px' }}>
                      <option value="" disabled>Seleccionar...</option>
                      {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      className="form-input text-base resize-none"
                      rows={4}
                      placeholder="Cuéntanos qué necesitas para tu negocio..."
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-6 text-base" style={{ padding: '1rem', minHeight: '48px' }} data-cta="form-submit">
                  Enviar solicitud
                </button>

                <p className="text-white/30 text-xs text-center mt-4">
                  Tus datos están seguros. No compartimos tu información con terceros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
