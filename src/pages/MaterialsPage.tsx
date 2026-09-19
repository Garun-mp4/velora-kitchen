import { InnerHero } from '../components/InnerHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'

const materials = [
  ['Дуб', 'Тёплый, спокойный рисунок и тактильная поверхность. Используем там, где дерево должно давать интерьеру глубину, а не декоративный шум.', '/assets/images/04-collection-lento-warm-oak.webp'],
  ['Орех', 'Более глубокий тон и выразительный рисунок. Хорошо работает в архитектурных интерьерах с контрастным камнем и тёмным металлом.', '/assets/images/05-collection-nero-walnut.webp'],
  ['Камень', 'Рабочая поверхность должна выдерживать ежедневную нагрузку и при этом оставаться частью общей композиции.', '/assets/images/09-materials-oak-stone-detail.webp'],
  ['Матовый лак', 'Спокойная плоскость без лишних отражений. Особенно важна точность оттенка и качество кромок, стыков и примыканий.', '/assets/images/06-collection-pura-light.webp']
] as const

export function MaterialsPage() {
  return <>
    <PageMeta title="Материалы" description="Дерево, камень, матовые поверхности и металл в проектах VELORA." />
    <InnerHero eyebrow="Материалы" title="То, что видно. И то, к чему прикасаются каждый день." text="Материал выбирается не по маленькому образцу в вакууме: важны свет, соседние поверхности, уход и то, как он будет выглядеть через годы использования." image="/assets/images/09-materials-oak-stone-detail.webp" imageAlt="Материалы VELORA" portrait />
    <section className="material-editorial section-pad"><div className="container-wide material-editorial__list">{materials.map(([name, text, image], index) => <Reveal className="material-editorial__row" key={name} delay={index*.04}><span className="material-editorial__number">0{index+1}</span><div className="material-editorial__copy"><h2>{name}</h2><p>{text}</p></div><ResponsiveImage src={image} alt={name} sizes="(min-width: 900px) 30vw, 100vw" /></Reveal>)}</div></section>
    <section className="material-note section-pad"><div className="container-narrow"><Reveal><span className="eyebrow">Подбор</span><h2>Не существует «лучшего» материала отдельно от задачи.</h2><p>Для рабочей зоны важна устойчивость к нагрузке, для высоких фасадов — стабильность геометрии, для тактильных поверхностей — ощущение и уход. Мы собираем палитру в контексте всего помещения.</p></Reveal></div></section>
    <ProjectCTA title="Подберём материалы под ваш интерьер и сценарии использования." />
  </>
}
