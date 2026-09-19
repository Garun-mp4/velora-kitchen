import { ArrowButton } from './ArrowButton'
import { Reveal } from './Reveal'

export function ProjectCTA({ title = 'Начнём с вашего пространства.' }: { title?: string }) {
  return (
    <section className="project-cta section-pad">
      <div className="container-wide project-cta__inner">
        <Reveal><span className="eyebrow">Следующий шаг</span><h2>{title}</h2><p>Пришлите планировку или несколько фотографий. На дизайн-встрече определим направление и подготовим предварительный расчёт.</p></Reveal>
        <Reveal delay={.08}><ArrowButton to="/project" variant="accent">Получить проект</ArrowButton></Reveal>
      </div>
    </section>
  )
}
