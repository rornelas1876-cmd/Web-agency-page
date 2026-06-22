import { MessageCircle } from 'lucide-react'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/data/site'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      data-cta="whatsapp-float"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <MessageCircle size={28} color="white" style={{ position: 'relative', zIndex: 1 }} />
    </a>
  )
}
