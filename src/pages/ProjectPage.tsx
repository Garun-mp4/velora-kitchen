import { PageMeta } from '../components/PageMeta'
import { ProjectForm } from '../components/ProjectForm'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'

export function ProjectPage() {
  return <>
    <PageMeta title="Обсудить проект" description="Запишитесь на дизайн-встречу VELORA и получите предварительный расчёт проекта." />
    <section className="project-page">
      <div className="project-page__visual"><ResponsiveImage src="/assets/images/13-designer-consultation-showroom.webp" alt="Дизайн-встреча VELORA" eager sizes="(min-width: 900px) 50vw, 100vw" /><span className="project-page__veil" /></div>
      <div className="project-page__content"><Reveal><span className="eyebrow">Дизайн-встреча</span><h1>Начнём с вашего пространства.</h1><p>Пришлите планировку или несколько фотографий. Обсудим задачу, определим направление и подготовим предварительный расчёт.</p><div className="project-page__meta"><div><span>Формат</span><strong>Встреча в студии или онлайн</strong></div><div><span>Город</span><strong>Москва · по предварительной записи</strong></div><div><span>Первый шаг</span><strong>Без оплаты</strong></div></div></Reveal><Reveal delay={.08}><ProjectForm /></Reveal></div>
    </section>
  </>
}
