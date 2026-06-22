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
