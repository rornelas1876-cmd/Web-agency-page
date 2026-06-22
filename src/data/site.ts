export const SITE_URL = 'https://webpro.mx'
export const WHATSAPP_NUMBER = '5213315534380'
export const CALENDLY_URL = 'https://calendly.com/rornelas1876/30min'
export const FORM_SUBMIT_EMAIL = 'rornelas1876@gmail.com'

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola, quiero información sobre una página web para mi negocio.'
