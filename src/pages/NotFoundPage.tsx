import { ArrowButton } from '../components/ArrowButton'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return <section className="not-found"><PageMeta title="Страница не найдена" /><div><span>404</span><h1>Такой страницы нет.</h1><p>Вернёмся к пространствам, которые можно спроектировать.</p><ArrowButton to="/" variant="dark">На главную</ArrowButton></div></section>
}
