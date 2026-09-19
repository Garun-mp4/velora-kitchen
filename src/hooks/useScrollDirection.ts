import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const last = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      if (y > 150 && y > last.current + 8) setHidden(true)
      if (y < last.current - 8 || y < 80) setHidden(false)
      last.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { hidden, scrolled }
}
