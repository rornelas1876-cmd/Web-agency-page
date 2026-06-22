import type { LucideIcon } from 'lucide-react'
import {
  Layout,
  Building,
  ShoppingCart,
  Search,
  MapPin,
  TrendingUp,
  RefreshCw,
  Server,
  Wrench,
} from 'lucide-react'

export type ServiceCard = {
  Icon: LucideIcon
  title: string
  problem: string
  solution: string
  result: string
}

export type ServiceCategory = {
  id: string
  title: string
  cards: ServiceCard[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'website',
    title: 'Sitio web que vende',
    cards: [
      {
        Icon: Layout,
        title: 'Landing pages',
        problem: 'Tienes tráfico pero no conviertes visitas en clientes.',
        solution: 'Páginas enfocadas en una sola acción: que te contacten.',
        result: 'Más leads desde Google y redes sociales.',
      },
      {
        Icon: Building,
        title: 'Páginas corporativas',
        problem: 'Tu negocio no transmite profesionalismo online.',
        solution: 'Sitio completo con servicios, testimonios y contacto directo.',
        result: 'Clientes confían antes de llamarte.',
      },
      {
        Icon: ShoppingCart,
        title: 'E-commerce',
        problem: 'Vendes solo en persona y pierdes ventas fuera de horario.',
        solution: 'Tienda en línea con catálogo, pagos y WhatsApp.',
        result: 'Ventas 24/7 sin depender de un local físico.',
      },
    ],
  },
  {
    id: 'growth',
    title: 'Crecimiento',
    cards: [
      {
        Icon: Search,
        title: 'SEO local',
        problem: 'Nadie te encuentra cuando buscan tu servicio en Google.',
        solution: 'Optimización para aparecer en búsquedas de tu ciudad.',
        result: 'Más llamadas y mensajes desde Google.',
      },
      {
        Icon: MapPin,
        title: 'Google Business',
        problem: 'Tu perfil de Google está incompleto o sin reseñas.',
        solution: 'Configuración y optimización de tu ficha de negocio.',
        result: 'Apareces en Google Maps y búsquedas "cerca de mí".',
      },
      {
        Icon: TrendingUp,
        title: 'Optimización de conversión',
        problem: 'Tienes visitas pero pocos contactos.',
        solution: 'Mejoramos botones, formularios y flujo de contacto.',
        result: 'Más clientes con el mismo tráfico.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Soporte',
    cards: [
      {
        Icon: RefreshCw,
        title: 'Actualizaciones',
        problem: 'Tu página queda desactualizada y pierde relevancia.',
        solution: 'Cambios de contenido, fotos y promociones cuando lo necesites.',
        result: 'Tu web siempre refleja tu negocio actual.',
      },
      {
        Icon: Server,
        title: 'Hosting',
        problem: 'No sabes dónde está alojada tu página ni si es segura.',
        solution: 'Hosting rápido y seguro incluido en nuestros planes.',
        result: 'Página siempre en línea y cargando rápido.',
      },
      {
        Icon: Wrench,
        title: 'Mantenimiento',
        problem: 'Algo se rompe y no tienes a quién llamar.',
        solution: 'Soporte continuo por WhatsApp para resolver cualquier problema.',
        result: 'Tranquilidad de que tu inversión está protegida.',
      },
    ],
  },
]
