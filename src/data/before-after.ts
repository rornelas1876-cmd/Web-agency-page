import type { LucideIcon } from 'lucide-react'
import {
  Snail,
  Smartphone,
  MessageCircleOff,
  ShieldOff,
  Search,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

export type BeforeAfterItem = {
  Icon: LucideIcon
  label: string
}

export const beforeItems: BeforeAfterItem[] = [
  { Icon: Snail, label: 'Página lenta' },
  { Icon: Smartphone, label: 'No funciona en celular' },
  { Icon: MessageCircleOff, label: 'Sin WhatsApp' },
  { Icon: ShieldOff, label: 'Sin confianza' },
]

export const afterItems: BeforeAfterItem[] = [
  { Icon: Search, label: 'Visible en Google' },
  { Icon: MessageCircle, label: 'Contacto al instante' },
  { Icon: Sparkles, label: 'Imagen profesional' },
]
