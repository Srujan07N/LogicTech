import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { techCategories } from '../data/content'

export default function Technologies() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="container-px relative">
        <SectionHeading
          kicker="Our stack"
          title="Technologies we work with"
          desc="The tools we reach for depend on the problem — here's what's currently in active use across our projects."
          light
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-gold/40 hover:bg-white/[0.05] transition-colors">
                <h3 className="font-display font-semibold text-gold text-sm tracking-wide">{cat.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
