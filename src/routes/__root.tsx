import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@/components/layout/Analytics'
import { faqJsonLd, localBusinessJsonLd } from '@/lib/seo'
import { SITE_URL } from '@/data/site'
import '../styles.css'

const SEO_TITLE = 'Diseño Web Profesional en México | Páginas Web que Consiguen Clientes'
const SEO_DESCRIPTION =
  'Creamos páginas web profesionales para negocios mexicanos. Diseño rápido, SEO básico, WhatsApp y Google optimizado.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SEO_TITLE },
      { name: 'description', content: SEO_DESCRIPTION },
      {
        name: 'keywords',
        content:
          'diseño web México, páginas web negocios, página web restaurante, página web dentista, diseño web CDMX, Guadalajara, Monterrey, WhatsApp negocio',
      },
      { property: 'og:title', content: SEO_TITLE },
      { property: 'og:description', content: SEO_DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: `${SITE_URL}/og-image.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SEO_TITLE },
      { name: 'twitter:description', content: SEO_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.png` },
      { name: 'theme-color', content: '#0A0F1E' },
    ],
    links: [
      { rel: 'canonical', href: SITE_URL },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        <Analytics />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
