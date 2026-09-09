import { MapPin, Briefcase, Clock3 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { openings } from '../data/content'

const culture = [
  'Real ownership over the systems you build',
  'Structured mentorship and learning time',
  'A clear path from junior to senior contributor',
]

export default function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="container-px relative grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading kicker="Careers" title="Build your future with us" light />
          <ul className="mt-8 space-y-4">
            {culture.map((item) => (
              <Reveal as="li" key={item} className="flex items-start gap-3 text-white/75 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                {item}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <Reveal key={job.title + i} delay={i * 0.1}>
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-6 hover:border-gold/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-white">{job.title}</h3>
                  <span className="text-xs font-medium text-gold bg-gold/10 rounded-full px-3 py-1">{job.type}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> {job.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase size={13} /> {job.experience}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span key={s} className="text-[11px] text-white/70 border border-white/15 rounded-full px-2.5 py-1">{s}</span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors"
                >
                  Apply now
                </a>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-gold transition-colors"
            >
              <Clock3 size={15} /> View all open positions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
