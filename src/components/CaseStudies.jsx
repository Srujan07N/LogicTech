import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { caseStudy } from '../data/content'

const stages = [
  { label: 'Problem', key: 'problem' },
  { label: 'Solution', key: 'solution' },
  { label: 'Technology', key: 'technology' },
  { label: 'Implementation', key: 'implementation' },
  { label: 'Result', key: 'result' },
]

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-bg-light">
      <div className="container-px">
        <SectionHeading kicker="Case study" title="From a manual process to a system that scales" />

        <Reveal className="mt-14 rounded-2xl bg-white border border-navy/8 overflow-hidden">
          <div className="grid md:grid-cols-5">
            {stages.map((s, i) => (
              <div
                key={s.key}
                className={`p-6 md:p-7 ${i !== stages.length - 1 ? 'border-b md:border-b-0 md:border-r border-navy/8' : ''} ${s.key === 'result' ? 'bg-navy-deep' : ''}`}
              >
                <span className={`text-xs font-medium tracking-wide ${s.key === 'result' ? 'text-gold' : 'text-blue'}`}>
                  {s.label}
                </span>
                <p className={`mt-3 text-sm leading-relaxed ${s.key === 'result' ? 'text-white/80' : 'text-ink/65'}`}>
                  {caseStudy[s.key]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
