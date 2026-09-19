import { Link } from 'react-router-dom'
import { ArrowButton } from '../components/ArrowButton'
import { FAQAccordion } from '../components/FAQAccordion'
import { ProjectForm } from '../components/ProjectForm'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { collections, processSteps } from '../data/content'

export function BrandIntro() {
  return (
    <section className="brand-intro section-pad">
      <div className="container-wide brand-intro__top">
        <Reveal><span className="eyebrow">VELORA / пространство</span></Reveal>
        <Reveal delay={.08}><h2>Мы проектируем не отдельную мебель.<br />Мы проектируем пространство целиком.</h2></Reveal>
      </div>
      <Reveal className="container-wide brand-intro__image" delay={.12}>
        <ResponsiveImage src="/assets/images/03-intro-open-plan-interior.webp" alt="Кухня и гостиная как единое пространство" sizes="(min-width: 900px) 86vw, 100vw" />
        <div className="brand-intro__caption"><h3>Мебель становится частью архитектуры.</h3><p>Пропорции, проходы, рабочие зоны и хранение решаются вместе — поэтому интерьер выглядит цельным и остаётся удобным каждый день.</p></div>
      </Reveal>
    </section>
  )
}

export function CollectionsChooser() {
  return (
    <section className="collections section-pad">
      <div className="container-wide section-heading section-heading--center">
        <Reveal><span className="eyebrow">Три направления</span><h2>Кухни с разным характером.<br />Одна логика пространства.</h2><p>Не готовые наборы, а отправные точки для индивидуального проекта.</p></Reveal>
      </div>
      <div className="container-wide collection-grid">
        {collections.map((collection, index) => (
          <Reveal className="collection-tile" key={collection.slug} delay={index * .07}>
            <Link to={`/kitchens/${collection.slug}`} className="collection-tile__image">
              <ResponsiveImage src={collection.image} alt={`Коллекция ${collection.name}`} sizes="(min-width: 980px) 30vw, 92vw" />
            </Link>
            <div className="collection-tile__copy">
              <div><h3>{collection.name}</h3><p>{collection.tagline}</p></div>
              <div className="collection-tile__actions"><ArrowButton to={`/kitchens/${collection.slug}`} variant="dark">Подробнее</ArrowButton><ArrowButton to="/project" variant="outline">Обсудить проект</ArrowButton></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function EngineeringSection() {
  return (
    <section className="object-section object-section--engineering">
      <div className="container-wide object-section__head">
        <Reveal><span className="eyebrow">Система до производства</span><h2>Продумана до последнего сантиметра.</h2></Reveal>
        <Reveal delay={.08}><p>Рабочие зоны, хранение и техника становятся одной системой ещё до начала производства.</p></Reveal>
      </div>
      <Reveal className="object-stage" delay={.12}><img src="/assets/images/14-kitchen-isometric-cutaway.png" alt="Изометрическая схема кухни с открытыми системами хранения" loading="lazy" /></Reveal>
      <div className="container-wide object-features"><span>Рабочая зона</span><span>Техника</span><span>Ежедневное хранение</span><span>Редко используемые вещи</span></div>
    </section>
  )
}

export function StorageSection() {
  return (
    <section className="storage section-pad">
      <div className="container-wide storage__grid">
        <Reveal className="storage__copy"><span className="eyebrow">Внутри</span><h2>Красота снаружи.<br />Порядок внутри.</h2><p>То, что обычно появляется как компромисс после красивого фасада, мы проектируем сразу: глубину ящиков, органайзеры, скрытую технику и доступ к ежедневным вещам.</p><ul><li>Глубокие ящики полного выдвижения</li><li>Внутренние органайзеры под сценарии кухни</li><li>Интегрированная техника без визуального шума</li><li>Высокие системы для запасов и посуды</li></ul></Reveal>
        <Reveal className="storage__photo" delay={.08}><ResponsiveImage src="/assets/images/10-storage-drawer-detail.webp" alt="Организация хранения внутри кухонного острова" sizes="(min-width: 900px) 45vw, 100vw" /></Reveal>
      </div>
      <Reveal className="container-wide storage-object" delay={.12}><img src="/assets/images/15-kitchen-island-storage-cutaway.png" alt="Остров с открытыми ящиками и внутренним хранением" loading="lazy" /></Reveal>
    </section>
  )
}

export function FurnitureEcosystem() {
  return (
    <section className="furniture-ecosystem section-pad">
      <div className="container-wide furniture-title"><Reveal><span className="eyebrow">За пределами кухни</span><h2>Один интерьер.<br />Одна система.</h2></Reveal><Reveal delay={.08}><p>Когда кухня, гардеробная и гостиная строятся на общей логике материалов и пропорций, интерьер перестаёт распадаться на отдельные предметы.</p></Reveal></div>
      <div className="container-wide furniture-rhythm">
        <Reveal className="furniture-rhythm__large"><ResponsiveImage src="/assets/images/07-furniture-walk-in-wardrobe.webp" alt="Гардеробная VELORA" sizes="(min-width: 900px) 55vw, 100vw" /><div><h3>Гардеробные</h3><Link to="/furniture#wardrobes">Смотреть решения →</Link></div></Reveal>
        <Reveal className="furniture-rhythm__small" delay={.08}><ResponsiveImage src="/assets/images/08-furniture-living-wall.webp" alt="Встроенная мебель для гостиной" sizes="(min-width: 900px) 35vw, 100vw" /><div><h3>Гостиные</h3><Link to="/furniture#living">Смотреть решения →</Link></div></Reveal>
        <Reveal className="furniture-rhythm__object" delay={.12}><img src="/assets/images/17-wardrobe-isometric-cutaway.png" alt="Изометрическая гардеробная система" loading="lazy" /><div><span>Встроенные шкафы</span><p>Наполнение проектируется вместе с внешней геометрией, а не после неё.</p></div></Reveal>
        <Reveal className="furniture-rhythm__object furniture-rhythm__object--living" delay={.16}><img src="/assets/images/19-living-storage-isometric.png" alt="Изометрическая система хранения для гостиной" loading="lazy" /><div><span>Мебель для гостиной</span><p>Техника, книги и хранение собираются в одну архитектурную плоскость.</p></div></Reveal>
      </div>
    </section>
  )
}

export function MaterialsSection() {
  return (
    <section className="materials-home section-pad">
      <div className="container-wide materials-home__grid">
        <Reveal className="materials-home__image"><ResponsiveImage src="/assets/images/09-materials-oak-stone-detail.webp" alt="Образцы дерева, камня и матовых поверхностей" sizes="(min-width: 900px) 48vw, 100vw" /></Reveal>
        <Reveal className="materials-home__copy" delay={.08}><span className="eyebrow">Материалы</span><h2>Материалы, к которым хочется прикасаться.</h2><p>Дерево добавляет тепла, камень — глубины, матовые поверхности удерживают свет, металл задаёт точный акцент. Мы смотрим не только на оттенок, но и на то, как материал стареет, очищается и ощущается в руке.</p><div className="material-list"><span>Дуб</span><span>Орех</span><span>Камень</span><span>Матовый лак</span><span>Металл</span></div><ArrowButton to="/materials" variant="dark">Подробнее о материалах</ArrowButton></Reveal>
      </div>
    </section>
  )
}

export function ExplodedSection() {
  return (
    <section className="object-section object-section--exploded">
      <div className="container-wide exploded-copy"><Reveal><span className="eyebrow">Конструкция</span><h2>Красота начинается<br />с конструкции.</h2></Reveal><Reveal delay={.08}><p>Точные узлы, понятная логика доступа и корректные зазоры остаются невидимыми — пока именно они не начинают определять качество ежедневного использования.</p></Reveal></div>
      <Reveal className="exploded-object" delay={.12}><img src="/assets/images/20-kitchen-island-exploded-view.png" alt="Взрыв-схема конструкции кухонного острова" loading="lazy" /></Reveal>
    </section>
  )
}

export function LifestyleSection() {
  return (
    <section className="lifestyle-story">
      <ResponsiveImage src="/assets/images/11-lifestyle-cooking-kitchen.webp" alt="Люди готовят вместе на кухне VELORA" sizes="100vw" />
      <div className="lifestyle-story__overlay" />
      <Reveal className="lifestyle-story__copy"><span className="eyebrow eyebrow--light">Для жизни</span><h2>Хорошая кухня не требует внимания к себе.<br />Она просто делает каждый день удобнее.</h2></Reveal>
    </section>
  )
}

export function CraftsmanshipSection() {
  return (
    <section className="craft section-pad">
      <div className="container-wide craft__header"><Reveal><span className="eyebrow">От проекта до монтажа</span><h2>Точность, которую видно после монтажа.</h2></Reveal><Reveal delay={.08}><p>Предсказуемый результат начинается задолго до установки: с корректного замера, рабочей документации и согласованных материалов.</p></Reveal></div>
      <Reveal className="container-wide craft__image" delay={.1}><ResponsiveImage src="/assets/images/12-craftsmanship-workshop.webp" alt="Работа с мебельными деталями в мастерской" sizes="90vw" /></Reveal>
      <div className="container-wide process-row">{processSteps.map(([num, title, text]) => <Reveal className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
    </section>
  )
}

export function ConversionSection() {
  return (
    <section className="conversion section-pad">
      <div className="container-wide conversion__grid">
        <Reveal className="conversion__visual"><ResponsiveImage src="/assets/images/13-designer-consultation-showroom.webp" alt="Дизайн-встреча в интерьерной студии" sizes="(min-width: 900px) 48vw, 100vw" /></Reveal>
        <Reveal className="conversion__content" delay={.08}><span className="eyebrow">Дизайн-встреча</span><h2>Начнём с вашего пространства.</h2><p>Покажите планировку или несколько фотографий — дизайнер поможет определить направление и подготовить предварительный расчёт.</p><ProjectForm compact /></Reveal>
      </div>
    </section>
  )
}

export function HomeFAQ() {
  return (
    <section className="home-faq section-pad">
      <div className="container-narrow"><Reveal className="section-heading section-heading--center"><span className="eyebrow">FAQ</span><h2>Частые вопросы</h2></Reveal><Reveal delay={.08}><FAQAccordion limit={7} /></Reveal></div>
    </section>
  )
}
