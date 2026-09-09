import { motion } from 'framer-motion'

export default function PageHero({ kicker, title, desc }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-36 pb-16 md:pt-44 md:pb-20">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="container-px relative max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-sm font-medium text-gold">{kicker}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display font-semibold text-3xl md:text-4xl text-white"
        >
          {title}
        </motion.h1>
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-white/70 max-w-xl"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  )
}
