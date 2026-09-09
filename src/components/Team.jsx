import { Link2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { team } from '../data/content'

export default function Team() {
  return (
    <section className="py-24 md:py-32 bg-bg-light">
      <div className="container-px">
        <SectionHeading kicker="Our people" title="Meet our team" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Reveal key={member.name + i} delay={i * 0.08}>
              <div className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-navy-deep">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: 'linear-gradient(160deg, #0D4F91 0%, #062B59 100%)' }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display font-semibold text-white">{member.name}</h3>
                  <p className="text-xs text-gold mt-0.5">{member.role}</p>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.desc}
                  </p>
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-gold hover:text-navy-deep"
                  >
                    <Link2 size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
