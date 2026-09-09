import PageHero from '../components/PageHero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Team from '../components/Team'
import CTA from '../components/CTA'

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A technology partner built for the long term"
        desc="We're a small, senior team that treats every engagement like it's our own product — because the systems we build have to keep working long after launch."
      />
      <About />
      <WhyChooseUs />
      <Team />
      <CTA />
    </>
  )
}
