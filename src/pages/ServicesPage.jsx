import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Technologies from '../components/Technologies'
import Process from '../components/Process'
import CTA from '../components/CTA'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Technology services built around your goals"
        desc="From a single feature to a full platform rebuild, we scope work to what will actually move the business forward."
      />
      <Services />
      <Technologies />
      <Process />
      <CTA />
    </>
  )
}
