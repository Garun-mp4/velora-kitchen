import { ArrowButton } from '../components/ArrowButton'
import { InnerHero } from '../components/InnerHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { collections } from '../data/content'

export function KitchensPage() {
  return <>
    <PageMeta title="Кухни" description="Три интерьерные линии VELORA и индивидуальное проектирование кухни под пространство." />
    <InnerHero eyebrow="Кухни VELORA" title="Не набор шкафов. Часть архитектуры дома." text="Каждая кухня начинается с пространства: маршрутов, света, техники и того, как вы действительно пользуетесь домом." image="/assets/images/03-intro-open-plan-interior.webp" imageAlt="Открытая кухня VELORA" />
    <section className="collection-index section-pad">
      <div className="container-wide collection-index__intro"><Reveal><h2>Три направления.<br />Каждое — индивидуальное.</h2></Reveal><Reveal delay={.08}><p>Коллекции задают характер материалов и пропорций. Размеры, компоновка и внутреннее наполнение всегда проектируются под конкретное помещение.</p></Reveal></div>
      <div className="container-wide collection-index__list">
        {collections.map((item, i) => <Reveal className="collection-index__row" key={item.slug} delay={i*.05}>
          <div className="collection-index__num">0{i+1}</div>
          <ResponsiveImage src={item.image} alt={`Кухня ${item.name}`} sizes="(min-width: 900px) 42vw, 100vw" />
          <div className="collection-index__copy"><h3>{item.name}</h3><p>{item.tagline}</p><ArrowButton to={`/kitchens/${item.slug}`} variant="dark">Смотреть коллекцию</ArrowButton></div>
        </Reveal>)}
      </div>
    </section>
    <section className="kitchen-system object-section">
      <div className="container-wide object-section__head"><Reveal><span className="eyebrow">Инженерия</span><h2>Сначала система.<br />Потом фасад.</h2></Reveal><Reveal delay={.08}><p>Мы заранее определяем технику, доступ, внутреннее хранение и рабочую эргономику — чтобы красивое решение не пришлось исправлять после монтажа.</p></Reveal></div>
      <Reveal className="object-stage"><img src="/assets/images/14-kitchen-isometric-cutaway.png" alt="Изометрическая система кухни" /></Reveal>
    </section>
    <ProjectCTA title="Спроектируем кухню вокруг вашей жизни." />
  </>
}
