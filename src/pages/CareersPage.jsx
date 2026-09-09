import PageHero from '../components/PageHero'
import Careers from '../components/Careers'
import CTA from '../components/CTA'

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build your future with LogicTech Solutions"
        desc="We're a small team that gives engineers real ownership early — see our current openings below."
      />
      <Careers />
      <CTA />
    </>
  )
}
