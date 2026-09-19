import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navGroups } from '../data/content'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { ArrowButton } from './ArrowButton'

type MenuGroup = (typeof navGroups)[number]

export function Header() {
  const location = useLocation()
  const { hidden, scrolled } = useScrollDirection()
  const [promoVisible, setPromoVisible] = useState(() => localStorage.getItem('velora-promo-dismissed') !== '1')
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    setOpenGroup(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const dismissPromo = () => {
    localStorage.setItem('velora-promo-dismissed', '1')
    setPromoVisible(false)
  }

  const openMenu = (group: MenuGroup) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenGroup(group.label)
    setPreviewIndex(0)
  }

  const delayedClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 140)
  }

  return (
    <header className={`site-header ${hidden ? 'site-header--hidden' : ''} ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className={`announcement ${promoVisible ? '' : 'announcement--closed'}`} aria-hidden={!promoVisible}>
        <div className="announcement__inner">
          <span>Дизайн-встреча и предварительный расчёт проекта — бесплатно</span>
          <Link to="/project">Записаться</Link>
          <button type="button" aria-label="Закрыть сообщение" onClick={dismissPromo}><X size={18} /></button>
        </div>
      </div>

      <div className="nav-shell">
        <Link className="wordmark" to="/" aria-label="VELORA — главная">velora</Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navGroups.map((group) => {
            const active = location.pathname.startsWith(group.path)
            return (
              <div
                className="desktop-nav__item"
                key={group.label}
                onMouseEnter={() => openMenu(group)}
                onMouseLeave={delayedClose}
                onFocus={() => openMenu(group)}
              >
                <button
                  className={active || openGroup === group.label ? 'is-active' : ''}
                  type="button"
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                >
                  {group.label}
                </button>
              </div>
            )
          })}
        </nav>
        <div className="header-actions">
          <ArrowButton to="/project" variant="accent">Получить проект</ArrowButton>
          <Link className="expert-link" to="/project"><Phone size={17} strokeWidth={1.6} /><span>Обсудить с дизайнером</span></Link>
        </div>
        <button className="mobile-menu-button" type="button" aria-label="Открыть меню" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {navGroups.map((group) => (
        <div
          key={group.label}
          className={`mega-menu ${openGroup === group.label ? 'mega-menu--open' : ''}`}
          onMouseEnter={() => openMenu(group)}
          onMouseLeave={delayedClose}
        >
          <div className="mega-menu__grid">
            <div className="mega-menu__copy">
              <span className="eyebrow">{group.label}</span>
              <Link className="mega-menu__all" to={group.path}>Смотреть раздел <span aria-hidden="true">↗</span></Link>
              <div className="mega-menu__links">
                {group.items.map((item, index) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onMouseEnter={() => setPreviewIndex(index)}
                    onFocus={() => setPreviewIndex(index)}
                    className={({ isActive }) => isActive ? 'is-current' : ''}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.note}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="mega-menu__visual" aria-live="polite">
              {group.items.map((item, index) => (
                <img key={item.image} src={item.image} alt={item.label} className={previewIndex === index ? 'is-visible' : ''} />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className={`mobile-panel ${mobileOpen ? 'mobile-panel--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-panel__head">
          <Link className="wordmark" to="/">velora</Link>
          <button type="button" aria-label="Закрыть меню" onClick={() => setMobileOpen(false)}><X size={24} /></button>
        </div>
        <div className="mobile-panel__body">
          {navGroups.map((group) => {
            const expanded = mobileSection === group.label
            return (
              <div className="mobile-disclosure" key={group.label}>
                <button type="button" aria-expanded={expanded} onClick={() => setMobileSection(expanded ? null : group.label)}>
                  <span>{group.label}</span><ChevronDown size={18} className={expanded ? 'is-rotated' : ''} />
                </button>
                <div className={`mobile-disclosure__content ${expanded ? 'is-open' : ''}`}>
                  <Link className="mobile-section-link" to={group.path}>Все в разделе</Link>
                  {group.items.map((item) => <Link key={item.label} to={item.path}>{item.label}<span>{item.note}</span></Link>)}
                </div>
              </div>
            )
          })}
          <div className="mobile-panel__actions">
            <ArrowButton to="/project" variant="accent">Получить проект</ArrowButton>
            <ArrowButton to="/project" variant="outline">Обсудить с дизайнером</ArrowButton>
          </div>
          <p>Москва · встреча в студии по предварительной записи</p>
        </div>
      </div>
    </header>
  )
}
