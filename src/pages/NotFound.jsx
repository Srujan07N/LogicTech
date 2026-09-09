import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-bg-light pt-20">
      <div className="container-px text-center">
        <p className="font-display text-gold font-semibold text-sm tracking-wide">404</p>
        <h1 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-deep">
          This page doesn't exist
        </h1>
        <p className="mt-3 text-ink/60 max-w-md mx-auto">
          The page you're looking for may have moved or never existed. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
