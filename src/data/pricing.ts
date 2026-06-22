export type PricingTier = {
  id: string
  name: string
  tagline: string
  setup: string
  monthly: string
  featured?: boolean
  ribbon?: string
  features: string[]
  cta: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basico',
    name: 'Básico',
    tagline: 'Presencia profesional desde el primer día',
    setup: '$8,000',
    monthly: '$500 MXN/mes',
    features: [
      'Página web profesional',
      'Diseño mobile-first',
      'Integración WhatsApp',
      'Google Maps',
      'Formularios de contacto',
      'SEO básico',
      '1 año dominio incluido',
      'Soporte por WhatsApp',
    ],
    cta: 'Empezar',
  },
  {
    id: 'negocio',
    name: 'Negocio',
    tagline: 'El plan completo para más clientes',
    setup: '$20,000',
    monthly: '$1,500 MXN/mes',
    featured: true,
    ribbon: 'Más vendido',
    features: [
      'Todo lo del plan Básico',
      'Sistema de reservaciones',
      'Respuestas automáticas',
      'Google Business optimizado',
      'Analytics y reportes',
      'Actualizaciones mensuales',
      'Soporte prioritario',
      'Optimización de conversión',
    ],
    cta: 'Quiero este plan',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Sistemas que escalan tu negocio',
    setup: '$40,000+',
    monthly: '$3,000+ MXN/mes',
    features: [
      'Todo lo del plan Negocio',
      'Automatización de citas',
      'Secuencias de follow-up',
      'Integración CRM',
      'Chatbot con IA',
      'Tracking de leads',
      'Integraciones a medida',
      'Manager dedicado',
    ],
    cta: 'Hablar con experto',
  },
]
