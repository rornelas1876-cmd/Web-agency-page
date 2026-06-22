import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/data/faq'

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3 reveal">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.question}
            className="faq-item rounded-2xl border border-gray-100 overflow-hidden"
            style={{ background: '#FAFAFA' }}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              style={{ minHeight: '56px' }}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base" style={{ color: '#0A0F1E' }}>{item.question}</span>
              <ChevronDown
                size={20}
                className="flex-shrink-0 text-gray-400 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div
              className="faq-answer overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
