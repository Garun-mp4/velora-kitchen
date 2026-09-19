import { InnerHero } from '../components/InnerHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'

export function FurniturePage() {
  return <>
    <PageMeta title="Мебель" description="Гардеробные, встроенные шкафы и мебель для гостиной VELORA." />
    <InnerHero eyebrow="Мебель VELORA" title="Мебель, которая продолжает архитектуру." text="Встроенные системы хранения и мебель для общих зон проектируются в той же логике, что и кухня — по размерам помещения и под реальные сценарии жизни." image="/assets/images/08-furniture-living-wall.webp" imageAlt="Встроенная мебель для гостиной" portrait />
    <section id="wardrobes" className="furniture-page-section section-pad"><div className="container-wide split-editorial"><Reveal className="split-editorial__image"><ResponsiveImage src="/assets/images/07-furniture-walk-in-wardrobe.webp" alt="Гардеробная" sizes="(min-width: 900px) 48vw, 100vw" /></Reveal><Reveal className="split-editorial__copy" delay={.08}><span className="eyebrow">Гардеробные</span><h2>Хранение без случайных пустот.</h2><p>Штанги, ящики, полки и ниши распределяются под ваш гардероб и геометрию помещения. Снаружи остаются спокойные плоскости, внутри — понятная система.</p></Reveal></div></section>
    <section className="object-section furniture-object"><div className="container-wide object-section__head"><Reveal><h2>Вся система — одним объектом.</h2></Reveal><Reveal delay={.08}><p>Углы, высота, проходы и внутреннее наполнение проектируются как единое целое.</p></Reveal></div><Reveal className="object-stage object-stage--wardrobe"><img src="/assets/images/17-wardrobe-isometric-cutaway.png" alt="Изометрическая гардеробная система" /></Reveal></section>
    <section id="living" className="furniture-page-section section-pad"><div className="container-wide split-editorial split-editorial--reverse"><Reveal className="split-editorial__image"><ResponsiveImage src="/assets/images/08-furniture-living-wall.webp" alt="Мебель для гостиной" sizes="(min-width: 900px) 48vw, 100vw" /></Reveal><Reveal className="split-editorial__copy" delay={.08}><span className="eyebrow">Гостиные</span><h2>Техника и хранение в одной плоскости.</h2><p>Медиазона, книги, документы и закрытое хранение собираются в архитектурную композицию, которая не выглядит отдельным мебельным набором.</p></Reveal></div></section>
    <section className="object-section"><Reveal className="object-stage"><img src="/assets/images/19-living-storage-isometric.png" alt="Система хранения для гостиной" /></Reveal></section>
    <ProjectCTA title="Соберём мебель в единую систему интерьера." />
  </>
}
