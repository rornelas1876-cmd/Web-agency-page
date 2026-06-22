import { faqItems } from '@/data/faq'
import { SITE_URL } from '@/data/site'

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WebPro México',
    description:
      'Agencia de diseño web y automatización para negocios mexicanos. Páginas web que consiguen clientes.',
    url: SITE_URL,
    areaServed: { '@type': 'Country', name: 'México' },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    serviceType: ['Diseño web', 'SEO local', 'Automatización WhatsApp'],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WebPro México',
    url: SITE_URL,
    description:
      'Páginas web profesionales para negocios mexicanos. Diseño rápido, SEO básico, WhatsApp y Google optimizado.',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'WebPro México',
    },
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
