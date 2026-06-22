import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '@/data/site'

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden border-t border-white/10 px-4 py-3 flex gap-3"
      style={{
        background: 'rgba(10,15,30,0.95)',
        backdropFilter: 'blur(20px)',
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      <a
        href="#contacto"
        className="btn-primary flex-1 justify-center"
        style={{ minHeight: '48px' }}
        data-cta="mobile-sticky-cotizar"
      >
        Cotizar
      </a>
      <a
        href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp justify-center px-4"
        style={{ minHeight: '48px' }}
        aria-label="WhatsApp"
        data-cta="mobile-sticky-whatsapp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  )
}
