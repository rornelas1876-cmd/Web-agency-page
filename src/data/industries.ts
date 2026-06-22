import type { LucideIcon } from 'lucide-react'
import {
  UtensilsCrossed,
  Stethoscope,
  Scale,
  Wrench,
  Store,
  MapPin,
} from 'lucide-react'

export type IndustryCard = {
  id: string
  label: string
  Icon: LucideIcon
  benefit: string
  color: string
}

export const industries: IndustryCard[] = [
  {
    id: 'restaurant',
    label: 'Restaurantes',
    Icon: UtensilsCrossed,
    benefit: 'Menú, reservas y pedidos por WhatsApp',
    color: '#EF4444',
  },
  {
    id: 'dentist',
    label: 'Dentistas',
    Icon: Stethoscope,
    benefit: 'Citas online y recordatorios automáticos',
    color: '#14B8A6',
  },
  {
    id: 'lawyer',
    label: 'Abogados',
    Icon: Scale,
    benefit: 'Imagen profesional que genera confianza',
    color: '#8B5CF6',
  },
  {
    id: 'mechanic',
    label: 'Talleres mecánicos',
    Icon: Wrench,
    benefit: 'Cotizaciones y contacto rápido',
    color: '#78716C',
  },
  {
    id: 'store',
    label: 'Tiendas',
    Icon: Store,
    benefit: 'Catálogo y ventas en línea',
    color: '#F59E0B',
  },
  {
    id: 'local',
    label: 'Servicios locales',
    Icon: MapPin,
    benefit: 'Aparece en Google cuando te buscan cerca',
    color: '#3B82F6',
  },
]
