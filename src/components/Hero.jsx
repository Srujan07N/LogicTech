import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-24 md:pt-44 md:pb-32">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />
      {/* slow-moving glow */}
      <motion.div
        className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-blue/30 blur-[110px]"
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="container-px relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold">Technology Solutions Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-white font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] max-w-xl"
          >
            Solving today for a brighter tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-6 text-white/70 text-lg max-w-md"
          >
            Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
            >
              Get Started
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Abstract peak mark echoing the logo's silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <svg viewBox="0 0 420 380" className="w-full max-w-md" role="img" aria-label="Abstract technology peak illustration">
            <defs>
              <linearGradient id="peakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D4F91" />
                <stop offset="100%" stopColor="#F5A400" />
              </linearGradient>
              <linearGradient id="peakGradientFaint" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D4F91" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F5A400" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="190" r="170" fill="none" stroke="url(#peakGradientFaint)" strokeWidth="1.5" />
            <polygon points="210,60 300,260 120,260" fill="none" stroke="url(#peakGradient)" strokeWidth="3" />
            <polygon points="255,140 300,260 210,260" fill="url(#peakGradient)" opacity="0.85" />
            {[0, 1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cx={130 + i * 55}
                cy={300}
                r="3"
                fill="#F5A400"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
