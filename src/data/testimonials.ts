import type { LucideIcon } from 'lucide-react'
import { UtensilsCrossed, Stethoscope, Hotel } from 'lucide-react'

// TODO: reemplazar con testimonios reales verificados de clientes
export type Testimonial = {
  name: string
  city: string
  Icon: LucideIcon
  result: string
  quote: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Restaurante La Paloma',
    city: 'Guadalajara',
    Icon: UtensilsCrossed,
    result: '+180% reservaciones en línea',
    quote:
      'Antes llenábamos solo por Instagram. Ahora Google nos manda clientes solos y el sistema de reservas trabaja 24/7.',
    color: '#EF4444',
  },
  {
    name: 'Dra. Martínez Dental',
    city: 'Ciudad de México',
    Icon: Stethoscope,
    result: '-60% citas olvidadas',
    quote:
      'Los recordatorios automáticos por WhatsApp eliminaron casi todos los no-shows. Mis pacientes agradecen el recordatorio.',
    color: '#14B8A6',
  },
  {
    name: 'Hotel Brisas del Mar',
    city: 'Puerto Vallarta',
    Icon: Hotel,
    result: '+3x reservas directas',
    quote:
      'Dejamos de pagar comisiones altísimas a Booking. Ahora el 60% de nuestras reservas llegan directo por nuestra web.',
    color: '#3B82F6',
  },
]

// TODO: reemplazar con logos reales de clientes
export const clientLogoPlaceholders = [
  'Restaurante',
  'Clínica',
  'Despacho',
  'Taller',
  'Tienda',
  'Servicios',
]

// TODO: testimonios reales verificados para Google review cards
export const googleReviews = [
  {
    name: 'Carlos M.',
    city: 'Guadalajara',
    quote: 'Profesionales y rápidos. Mi página quedó lista en una semana.',
  },
  {
    name: 'Ana R.',
    city: 'CDMX',
    quote: 'Por fin aparecemos en Google. Ya nos contactan clientes nuevos cada semana.',
  },
]
