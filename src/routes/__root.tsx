/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'WebPro México — Páginas Web + Automatizaciones para Negocios' },
      { name: 'description', content: 'Creamos páginas web profesionales y automatizaciones inteligentes para restaurantes, hoteles, dentistas y negocios locales en México. Más clientes, más ventas.' },
      { name: 'keywords', content: 'páginas web México, diseño web México, automatizaciones WhatsApp, página web restaurante, página web dentista, diseño web CDMX, Guadalajara, Monterrey' },
      { property: 'og:title', content: 'WebPro México — Tu negocio merece estar abierto 24/7' },
      { property: 'og:description', content: 'Más clientes, más reservaciones y más ventas con una página web profesional + automatizaciones inteligentes.' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#0A0F1E' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
