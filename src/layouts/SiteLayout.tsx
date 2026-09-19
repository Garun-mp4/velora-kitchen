import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

export function SiteLayout() {
  return <><ScrollToTop /><Header /><main><Outlet /></main><Footer /></>
}
