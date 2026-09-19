import { Link } from 'react-router-dom'
import { ArrowButton } from './ArrowButton'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow">VELORA</span>
          <h2>Интерьер начинается<br />с разговора о жизни.</h2>
        </div>
        <div className="footer-top__cta">
          <p>Москва · встреча в студии по предварительной записи</p>
          <ArrowButton to="/project" variant="dark">Обсудить проект</ArrowButton>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-column"><span>Кухни</span><Link to="/kitchens/lento">Lento</Link><Link to="/kitchens/nero">Nero</Link><Link to="/kitchens/pura">Pura</Link></div>
        <div className="footer-column"><span>Интерьер</span><Link to="/furniture">Мебель</Link><Link to="/materials">Материалы</Link><Link to="/about">О VELORA</Link></div>
        <div className="footer-column"><span>Помощь</span><Link to="/project">Дизайн-встреча</Link><Link to="/faq">FAQ</Link><Link to="/privacy">Конфиденциальность</Link></div>
        <div className="footer-column footer-column--note"><span>Подход</span><p>Кухни и встроенная мебель по индивидуальным размерам — от первого эскиза до монтажа.</p></div>
      </div>
      <div className="footer-brand">velora</div>
      <div className="footer-bottom"><span>© 2026 VELORA</span><span>Кухни и мебель на заказ</span></div>
    </footer>
  )
}
