import type { LucideIcon } from 'lucide-react'
import { Search, Palette, Code, Rocket } from 'lucide-react'

export type ProcessStep = {
  number: number
  Icon: LucideIcon
  title: string
  reassurance: string
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    Icon: Search,
    title: 'Analizamos tu negocio',
    reassurance: 'Sin tecnicismos — entendemos qué necesitas',
  },
  {
    number: 2,
    Icon: Palette,
    title: 'Diseñamos la estructura que convierte',
    reassurance: 'Tú apruebas cada paso antes de avanzar',
  },
  {
    number: 3,
    Icon: Code,
    title: 'Desarrollamos tu página',
    reassurance: 'Lista en 5-7 días hábiles',
  },
  {
    number: 4,
    Icon: Rocket,
    title: 'Publicamos y optimizamos',
    reassurance: 'Te enseñamos a usarla y la dejamos funcionando',
  },
]
