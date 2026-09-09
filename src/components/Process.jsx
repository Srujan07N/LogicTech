import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { process } from '../data/content'

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-bg-light">
      <div className="container-px">
        <SectionHeading kicker="How we work" title="A process built for clarity, not surprises" />

        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-navy/10" aria-hidden="true" />
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {process.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1} className="relative">
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                  <div className="relative z-10 shrink-0 h-12 w-12 rounded-full bg-navy flex items-center justify-center text-gold font-display font-semibold text-sm">
                    {step.num}
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="font-display font-semibold text-navy-deep flex items-center gap-2">
                      <step.icon size={16} className="text-gold-deep" />
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink/60 leading-relaxed max-w-[220px]">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
