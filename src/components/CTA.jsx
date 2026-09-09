import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-gold/15 blur-[110px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="container-px relative text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-white/70">
            Let's turn your ideas into scalable technology solutions.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
          >
            Start a Conversation <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
