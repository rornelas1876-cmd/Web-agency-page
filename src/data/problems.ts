import type { LucideIcon } from 'lucide-react'
import { SearchX, Instagram, Building2, PhoneMissed } from 'lucide-react'

export type ProblemItem = {
  Icon: LucideIcon
  title: string
  desc: string
  color: string
}

export const problems: ProblemItem[] = [
  {
    Icon: SearchX,
    title: 'Tus clientes no te encuentran en Google',
    desc: 'El 97% de las personas buscan negocios en Google antes de visitar. Si no estás, no existes.',
    color: '#EF4444',
  },
  {
    Icon: Instagram,
    title: 'Dependes solamente de Facebook',
    desc: 'Las redes son para descubrimiento, no para conversión. Sin web, no hay credibilidad ni ventas.',
    color: '#EC4899',
  },
  {
    Icon: Building2,
    title: 'Tu competencia se ve más profesional',
    desc: 'Una página amateur hace que elijan a tu competencia aunque tu servicio sea mejor.',
    color: '#F59E0B',
  },
  {
    Icon: PhoneMissed,
    title: 'Pierdes clientes porque nadie responde rápido',
    desc: 'Clientes que preguntan y no regresan porque nadie hizo el seguimiento a tiempo.',
    color: '#8B5CF6',
  },
]

export const solutionChips = [
  'Visible en Google',
  'WhatsApp al instante',
  'Imagen profesional',
  'Contacto 24/7',
]
