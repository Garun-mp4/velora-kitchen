import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { KitchensPage } from './pages/KitchensPage'
import { CollectionPage } from './pages/CollectionPage'
import { FurniturePage } from './pages/FurniturePage'
import { MaterialsPage } from './pages/MaterialsPage'
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'
import { FAQPage } from './pages/FAQPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return <BrowserRouter><Routes><Route element={<SiteLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/kitchens" element={<KitchensPage />} />
    <Route path="/kitchens/:slug" element={<CollectionPage />} />
    <Route path="/furniture" element={<FurniturePage />} />
    <Route path="/materials" element={<MaterialsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/project" element={<ProjectPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes></BrowserRouter>
}
