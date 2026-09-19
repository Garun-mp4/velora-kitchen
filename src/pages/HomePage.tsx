import { PageMeta } from '../components/PageMeta'
import { HomeHero } from '../sections/HomeHero'
import { BrandIntro, CollectionsChooser, EngineeringSection, StorageSection, FurnitureEcosystem, MaterialsSection, ExplodedSection, LifestyleSection, CraftsmanshipSection, ConversionSection, HomeFAQ } from '../sections/HomeSections'

export function HomePage() {
  return <>
    <PageMeta title="Кухни и мебель на заказ" description="VELORA проектирует индивидуальные кухни и встроенную мебель — от первого эскиза до монтажа." />
    <HomeHero />
    <BrandIntro />
    <CollectionsChooser />
    <EngineeringSection />
    <StorageSection />
    <FurnitureEcosystem />
    <MaterialsSection />
    <ExplodedSection />
    <LifestyleSection />
    <CraftsmanshipSection />
    <ConversionSection />
    <HomeFAQ />
  </>
}
