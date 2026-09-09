import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Portfolio" title="Featured projects" />
          <Reveal>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-deep transition-colors"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 0.1}>
              <motion.div
                whileHover="hover"
                className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-navy-deep cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, #0D4F91 0%, #062B59 100%)' }}
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute top-4 left-4 text-xs font-medium tracking-wide text-gold bg-navy-deep/60 backdrop-blur-sm rounded-full px-3 py-1">
                  {p.industry}
                </div>
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-transparent"
                  variants={{ hover: { y: -6 } }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-8 h-0.5 bg-gold mb-3 origin-left scale-x-100 group-hover:scale-x-150 transition-transform" />
                  <h3 className="font-display font-semibold text-white text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] text-white/70 border border-white/15 rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    View project <ArrowUpRight size={14} />
                  </span>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center sm:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
            View all projects <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
