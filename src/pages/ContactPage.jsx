import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us about your project"
        desc="Share a few details and we'll get back to you within one business day."
      />
      <Contact />
    </>
  )
}
