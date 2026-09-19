import { Reveal } from './Reveal'
import { ResponsiveImage } from './ResponsiveImage'

type Props = { eyebrow?: string; title: string; text?: string; image?: string; imageAlt?: string; dark?: boolean; portrait?: boolean; className?: string }

export function InnerHero({ eyebrow, title, text, image, imageAlt = '', dark = false, portrait = false, className = '' }: Props) {
  return (
    <section className={`inner-hero ${dark ? 'inner-hero--dark' : ''} ${image ? 'inner-hero--image' : ''} ${portrait ? 'inner-hero--portrait' : ''} ${className}`}>
      <div className="container-wide inner-hero__grid">
        <Reveal className="inner-hero__copy">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {text && <p>{text}</p>}
        </Reveal>
        {image && <Reveal className="inner-hero__visual" delay={.08}><ResponsiveImage src={image} alt={imageAlt} eager sizes="(min-width: 900px) 50vw, 100vw" /></Reveal>}
      </div>
    </section>
  )
}
