import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-px">
        <SectionHeading
          kicker="Why LogicTech"
          title="Why choose LogicTech Solutions?"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className="flex gap-4">
              <div className="shrink-0 h-11 w-11 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy-deep">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
