import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Target, Eye, Heart } from 'lucide-react'
import aboutImg from '../assets/about.png'

const pillars = [
  { icon: Target, title: 'Mission', desc: 'Deliver practical, scalable technology that measurably moves our clients\u2019 businesses forward.' },
  { icon: Eye, title: 'Vision', desc: 'To be the technology partner growing companies trust with their most important systems.' },
  { icon: Heart, title: 'Values', desc: 'Transparency, craftsmanship, and long-term relationships over one-off projects.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-deep shadow-xl">
            <motion.img 
              src={aboutImg} 
              alt="LogicTech team" 
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-5">
              <p className="text-white/90 text-sm">
                A technology partner focused on solutions that hold up in production, not just in a demo.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker="About LogicTech "
            title="Technology that moves businesses forward"
            desc="LogicTech  designs, builds, and maintains practical, scalable technology for growing companies — from custom software to cloud infrastructure. We focus on solutions our clients can actually run, maintain, and grow with."
          />

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-10 w-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-3">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-navy-deep">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
