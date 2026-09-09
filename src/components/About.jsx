import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Target, Eye, Heart } from 'lucide-react'

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
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-deep">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0D4F91 0%, #073B78 50%, #062B59 100%)',
              }}
            />
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D4F91" />
                  <stop offset="100%" stopColor="#F5A400" />
                </linearGradient>
              </defs>
              <polygon points="200,120 280,320 120,320" fill="none" stroke="url(#aboutGrad)" strokeWidth="2.5" />
              <polygon points="240,220 280,320 200,320" fill="url(#aboutGrad)" opacity="0.7" />
              <circle cx="200" cy="250" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />
            </svg>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-5">
              <p className="text-white/90 text-sm">
                A technology partner focused on solutions that hold up in production, not just in a demo.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker="About LogicTech Solutions"
            title="Technology that moves businesses forward"
            desc="LogicTech Solutions designs, builds, and maintains practical, scalable technology for growing companies — from custom software to cloud infrastructure. We focus on solutions our clients can actually run, maintain, and grow with."
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
