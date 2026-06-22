import type { LucideIcon } from 'lucide-react'
import { MessageCircle, FileText, Users, Calendar } from 'lucide-react'

export type AutomationCard = {
  Icon: LucideIcon
  title: string
  desc: string
  color: string
}

export const automationCards: AutomationCard[] = [
  {
    Icon: MessageCircle,
    title: 'WhatsApp automático',
    desc: 'Respuestas instantáneas cuando un cliente te escribe. Nunca pierdas un lead por no contestar a tiempo.',
    color: '#25D366',
  },
  {
    Icon: FileText,
    title: 'Formularios inteligentes',
    desc: 'Cada solicitud llega directo a tu WhatsApp o correo. Sin perder mensajes en redes sociales.',
    color: '#3B82F6',
  },
  {
    Icon: Users,
    title: 'Seguimiento de clientes',
    desc: 'Recordatorios y follow-up automático para que los interesados no se olviden de ti.',
    color: '#8B5CF6',
  },
  {
    Icon: Calendar,
    title: 'Reservas y citas',
    desc: 'Sistema de citas online con confirmación automática. Menos llamadas, más reservaciones.',
    color: '#14B8A6',
  },
]
