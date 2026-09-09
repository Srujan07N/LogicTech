import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg-light">
      <div className="container-px">
        <SectionHeading
          kicker="What we do"
          title="Our technology services"
          desc="A focused set of capabilities, applied precisely to the problem in front of us."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group h-full rounded-xl bg-white border border-navy/8 p-6 hover:border-gold/50 hover:shadow-[0_12px_32px_-12px_rgba(7,59,120,0.18)] transition-colors"
              >
                <div className="h-11 w-11 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold/15 group-hover:text-gold-deep transition-colors">
                  <s.icon size={20} className="transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue group-hover:text-gold-deep transition-colors">
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={(services.length % 3) * 0.08}>
            <Link
              to="/contact"
              className="group h-full flex flex-col justify-center rounded-xl border border-dashed border-navy/20 p-6 hover:border-gold/60 hover:bg-white/60 transition-colors"
            >
              <h3 className="font-display font-semibold text-navy-deep">Don't see what you need?</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Tell us about the problem and we'll scope the right approach together.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue group-hover:text-gold-deep transition-colors">
                Get in touch
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
