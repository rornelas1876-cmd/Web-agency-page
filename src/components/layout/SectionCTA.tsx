import { ArrowRight } from 'lucide-react'

type SectionCTAProps = {
  text?: string
  href?: string
  light?: boolean
}

export function SectionCTA({ text = 'Quiero mi página web', href = '#contacto', light = false }: SectionCTAProps) {
  return (
    <div className="text-center mt-12 reveal">
      <a
        href={href}
        className={light ? 'btn-primary-light' : 'btn-primary'}
        style={{ minHeight: '48px', padding: '0.875rem 2rem' }}
        data-cta={text}
      >
        {text} <ArrowRight size={18} />
      </a>
    </div>
  )
}
