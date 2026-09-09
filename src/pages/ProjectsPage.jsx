import PageHero from '../components/PageHero'
import Projects from '../components/Projects'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Work we're proud to stand behind"
        desc="A selection of projects across industries — each one built to be maintained, not just shipped."
      />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  )
}
