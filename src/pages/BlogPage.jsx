import PageHero from '../components/PageHero'
import Blog from '../components/Blog'
import CTA from '../components/CTA'

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Technology insights"
        desc="Notes on cloud, DevOps, AI, cybersecurity, and software development from our engineering team."
      />
      <Blog />
      <CTA />
    </>
  )
}
