import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../data/content'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-display font-semibold text-4xl md:text-5xl text-white">
      {display}
      <span className="text-gold">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-navy relative">
      <div className="container-px grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 py-14 md:py-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center md:text-left md:border-l md:first:border-l-0 border-white/10 md:pl-6"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-white/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
