import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'

export function FAQAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0)
  const items = limit ? faqs.slice(0, limit) : faqs
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index
        return (
          <article className={`faq-item ${expanded ? 'faq-item--open' : ''}`} key={item.question}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
              <span>{item.question}</span>
              <span className="faq-item__icon"><Plus size={19} /></span>
            </button>
            <div className="faq-item__answer" aria-hidden={!expanded}>
              <div><p>{item.answer}</p></div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
