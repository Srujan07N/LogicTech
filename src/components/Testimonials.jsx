import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1)
    setIndex(next)
  }

  const t = testimonials[index]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-px">
        <SectionHeading align="center" kicker="Testimonials" title="What our clients say" />

        <div className="mt-14 max-w-2xl mx-auto relative">
          <Quote className="mx-auto text-gold" size={32} />
          <div className="mt-6 min-h-[140px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-navy-deep leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-navy/10 flex items-center justify-center text-navy font-display font-semibold">
                    {t.name.charAt(1)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm text-navy-deep">{t.name}</p>
                    <p className="text-xs text-ink/55">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go((index - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:border-gold hover:text-gold-deep transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-gold' : 'w-1.5 bg-navy/20'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go((index + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:border-gold hover:text-gold-deep transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
