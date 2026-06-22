import { useEffect, useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Proceso', href: '#proceso', id: 'proceso' },
  { label: 'Precios', href: '#precios', id: 'precios' },
  { label: 'Preguntas', href: '#preguntas', id: 'preguntas' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const linkClass = (id: string) =>
    id === activeSection ? 'text-white text-sm font-semibold' : 'text-white/60 hover:text-white text-sm font-medium transition-colors'

  return (
    <nav className={`nav-blur fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF6B35)' }}>
            <Rocket size={20} color="white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            WebPro <span className="gradient-text">México</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="btn-primary hidden sm:inline-flex"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem', minHeight: '44px' }}
            data-cta="nav-cotizar"
          >
            Cotizar
          </a>
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[rgba(10,15,30,0.98)] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`py-3 px-2 transition-colors ${link.id === activeSection ? 'text-white font-semibold' : 'text-white/80 hover:text-white font-medium'}`}
                style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-primary w-full justify-center mt-3"
              style={{ minHeight: '48px' }}
              onClick={() => setOpen(false)}
              data-cta="mobile-cotizar"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
