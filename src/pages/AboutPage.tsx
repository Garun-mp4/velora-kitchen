import { InnerHero } from '../components/InnerHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { processSteps } from '../data/content'

export function AboutPage() {
  return <>
    <PageMeta title="О VELORA" description="Подход VELORA к индивидуальным кухням и встроенной мебели." />
    <InnerHero className="inner-hero--about" eyebrow="О VELORA" title="Красиво. Продумано. Индивидуально. Предсказуемо." text="Мы рассматриваем кухню и встроенную мебель как часть архитектуры дома — не как набор отдельных предметов." image="/assets/images/03-intro-open-plan-interior.webp" imageAlt="Цельный интерьер VELORA" />
    <section id="approach" className="about-manifesto section-pad"><div className="container-wide about-manifesto__grid"><Reveal><h2>Сначала понять пространство.<br />Потом рисовать мебель.</h2></Reveal><Reveal delay={.08}><p>Хороший проект держится не на эффектном рендере, а на совпадении идеи с реальной геометрией. Мы связываем планировку, привычки, технику, хранение и материалы до того, как решение отправляется в производство.</p><p>Так визуальный образ становится не обещанием, а следствием точной подготовки.</p></Reveal></div></section>
    <section id="craft" className="about-craft section-pad"><div className="container-wide split-editorial"><Reveal className="split-editorial__image"><ResponsiveImage src="/assets/images/12-craftsmanship-workshop.webp" alt="Работа с мебельной деталью" sizes="(min-width: 900px) 50vw, 100vw" /></Reveal><Reveal className="split-editorial__copy" delay={.08}><span className="eyebrow">Производство</span><h2>Качество видно в примыканиях.</h2><p>Ровные зазоры, точные стыки, корректная работа фасадов и механизмов — это результат рабочей документации, подготовки деталей и аккуратного монтажа.</p></Reveal></div></section>
    <section className="about-process section-pad"><div className="container-wide"><Reveal className="section-heading"><span className="eyebrow">Процесс</span><h2>Пять этапов одной системы.</h2></Reveal><div className="process-row process-row--about">{processSteps.map(([num,title,text]) => <Reveal className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <ProjectCTA />
  </>
}
