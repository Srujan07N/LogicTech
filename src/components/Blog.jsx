import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { blog } from '../data/content'

export default function Blog() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-px">
        <SectionHeading kicker="Insights" title="Technology insights" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((post, i) => (
            <Reveal key={post.title + i} delay={i * 0.1}>
              <a href="#" className="group block rounded-xl border border-navy/8 overflow-hidden hover:border-gold/40 hover:shadow-[0_12px_32px_-14px_rgba(7,59,120,0.2)] transition-all">
                <div
                  className="aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ background: 'linear-gradient(135deg, #0D4F91, #073B78)' }}
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-gold-deep">{post.category}</span>
                  <h3 className="mt-2 font-display font-semibold text-navy-deep leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{post.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue group-hover:text-gold-deep transition-colors">
                    Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
