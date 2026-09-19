import { Navigate, useParams } from 'react-router-dom'
import { ArrowButton } from '../components/ArrowButton'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { collections } from '../data/content'

const renderMap = {
  lento: '/assets/images/14-kitchen-isometric-cutaway.png',
  nero: '/assets/images/18-appliance-column-cutaway.png',
  pura: '/assets/images/16-tall-pantry-storage-system.png'
} as const

export function CollectionPage() {
  const { slug } = useParams()
  const item = collections.find((c) => c.slug === slug)
  if (!item) return <Navigate to="/404" replace />
  const index = collections.findIndex((c) => c.slug === item.slug)
  const next = collections[(index + 1) % collections.length]

  return <>
    <PageMeta title={`Коллекция ${item.name}`} description={`${item.name}: ${item.tagline}`} />
    <section className="collection-hero">
      <ResponsiveImage src={item.image} alt={`Интерьер коллекции ${item.name}`} eager sizes="100vw" />
      <div className="collection-hero__veil" />
      <div className="collection-hero__copy"><Reveal><span className="eyebrow eyebrow--light">Коллекция</span><h1>{item.name}</h1><p>{item.tagline}</p><ArrowButton to="/project" variant="light">Обсудить проект</ArrowButton></Reveal></div>
    </section>
    <section className="collection-story section-pad">
      <div className="container-wide collection-story__grid"><Reveal><span className="eyebrow">Характер</span><h2>{item.tone}</h2></Reveal><Reveal delay={.08}><p>{item.description}</p><div className="collection-materials">{item.materials.map((m) => <span key={m}>{m}</span>)}</div></Reveal></div>
    </section>
    <section className="collection-detail section-pad">
      <div className="container-wide collection-detail__grid"><Reveal className="collection-detail__photo"><ResponsiveImage src="/assets/images/09-materials-oak-stone-detail.webp" alt="Материалы коллекции" sizes="(min-width: 900px) 44vw, 100vw" /></Reveal><Reveal className="collection-detail__copy" delay={.08}><span className="eyebrow">Материалы и свет</span><h2>Поверхности работают вместе.</h2><p>Мы смотрим на материал в масштабе помещения: как он отражает дневной свет, сочетается с полом и стенами, насколько заметны следы использования и как меняется фактура со временем.</p><ArrowButton to="/materials" variant="dark">О материалах</ArrowButton></Reveal></div>
    </section>
    <section className="collection-render object-section">
      <div className="container-wide object-section__head"><Reveal><span className="eyebrow">Внутренняя логика</span><h2>Снаружи — тишина.<br />Внутри — точная система.</h2></Reveal><Reveal delay={.08}><p>Встроенная техника, хранение и доступ к ежедневным вещам продумываются до того, как фасады отправятся в производство.</p></Reveal></div>
      <Reveal className="object-stage object-stage--portrait"><img src={renderMap[item.slug]} alt="Техническая визуализация системы хранения" loading="lazy" /></Reveal>
    </section>
    <section className="next-collection section-pad"><div className="container-wide next-collection__inner"><span>Следующая коллекция</span><h2>{next.name}</h2><p>{next.tagline}</p><ArrowButton to={`/kitchens/${next.slug}`} variant="outline">Смотреть {next.name}</ArrowButton></div></section>
    <ProjectCTA />
  </>
}
