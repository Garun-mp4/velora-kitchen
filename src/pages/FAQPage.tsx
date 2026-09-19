import { FAQAccordion } from '../components/FAQAccordion'
import { PageMeta } from '../components/PageMeta'
import { ProjectCTA } from '../components/ProjectCTA'
import { Reveal } from '../components/Reveal'

export function FAQPage() {
  return <>
    <PageMeta title="FAQ" description="Ответы на вопросы о проектировании, материалах, замере и монтаже VELORA." />
    <section className="simple-page-head"><div className="container-narrow"><Reveal><span className="eyebrow">FAQ</span><h1>Вопросы о проекте.</h1><p>Как начинается работа, из чего складывается стоимость и что происходит до монтажа.</p></Reveal></div></section>
    <section className="faq-page section-pad"><div className="container-narrow"><FAQAccordion /></div></section>
    <ProjectCTA />
  </>
}
