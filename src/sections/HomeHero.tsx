import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowButton } from '../components/ArrowButton'

type HeroSlide = {
  desktop: string
  mobile?: string
  lines: readonly [string, string]
  copy: string
  primary: readonly [string, string]
  secondary: readonly [string, string]
  position: string
}

const slides: HeroSlide[] = [
  {
    desktop: '/assets/images/01-hero-velora-kitchen-desktop.webp',
    mobile: '/assets/images/02-hero-velora-kitchen-mobile.webp',
    lines: ['Кухня, вокруг которой', 'собирается дом.'],
    copy: 'Проектируем кухни и встроенную мебель по индивидуальным размерам — от первого эскиза до монтажа.',
    primary: ['Смотреть коллекции', '/kitchens'],
    secondary: ['Получить проект и смету', '/project'],
    position: 'center center'
  },
  {
    desktop: '/assets/images/03-intro-open-plan-interior.webp',
    lines: ['Интерьер начинается', 'не с мебели.'],
    copy: 'Сначала — сценарии жизни, свет и геометрия. Затем мебель становится естественной частью архитектуры.',
    primary: ['Наш подход', '/about'],
    secondary: ['Обсудить пространство', '/project'],
    position: 'center center'
  },
  {
    desktop: '/assets/images/11-lifestyle-cooking-kitchen.webp',
    lines: ['Создано для жизни.', 'Спроектировано до миллиметра.'],
    copy: 'Рабочие зоны, хранение и техника объединяются в систему, которая не требует лишнего внимания к себе.',
    primary: ['Как устроен проект', '/about#approach'],
    secondary: ['Начать проект', '/project'],
    position: 'center center'
  }
]

export function HomeHero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const pointerStart = useRef<number | null>(null)

  useEffect(() => {
    if (paused || reduce) return
    const timer = window.setInterval(() => setIndex((v) => (v + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [paused, reduce])

  const go = (next: number) => {
    setIndex((next + slides.length) % slides.length)
    setPaused(true)
    window.setTimeout(() => setPaused(false), 10000)
  }

  return (
    <section
      className="home-hero"
      aria-roledescription="carousel"
      aria-label="Главные истории VELORA"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={(e) => { pointerStart.current = e.clientX }}
      onPointerUp={(e) => {
        if (pointerStart.current == null) return
        const delta = e.clientX - pointerStart.current
        if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1))
        pointerStart.current = null
      }}
    >
      <div className="home-hero__track" style={{ transform: `translateX(-${index * 100}%)`, transitionDuration: reduce ? '0ms' : '1600ms' }}>
        {slides.map((slide, i) => (
          <div className="home-hero__slide" key={slide.lines.join('')} aria-hidden={i !== index}>
            {slide.mobile ? (
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img src={slide.desktop} alt="Интерьер кухни VELORA" loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} />
              </picture>
            ) : <img src={slide.desktop} alt="Интерьер VELORA" loading={i === 0 ? 'eager' : 'lazy'} />}
            <span className="home-hero__veil" />
          </div>
        ))}
      </div>

      <div className="home-hero__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="home-hero__copy"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: .45 }}
          >
            <h1>
              {slides[index].lines.map((line, lineIndex) => (
                <span className="hero-line-mask" key={line}>
                  <motion.span
                    initial={reduce ? false : { y: '115%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: .82, delay: .12 + lineIndex * .09, ease: [0.2, 0.7, 0.2, 1] }}
                  >{line}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p initial={reduce ? false : { y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .72, delay: .36 }}>{slides[index].copy}</motion.p>
            <motion.div className="home-hero__actions" initial={reduce ? false : { y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .72, delay: .48 }}>
              <ArrowButton to={slides[index].primary[1]} variant="light">{slides[index].primary[0]}</ArrowButton>
              <ArrowButton to={slides[index].secondary[1]} variant="accent">{slides[index].secondary[0]}</ArrowButton>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-pagination" aria-label="Переключение слайдов">
        {slides.map((slide, i) => (
          <button key={slide.lines[0]} type="button" className={i === index ? 'is-active' : ''} onClick={() => go(i)} aria-label={`Слайд ${i + 1}`} aria-current={i === index ? 'true' : undefined}><span /></button>
        ))}
      </div>
    </section>
  )
}
