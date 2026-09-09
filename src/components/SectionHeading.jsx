import Reveal from './Reveal'

export default function SectionHeading({
  kicker,
  title,
  desc,
  align = 'left',
  light = false,
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      {kicker && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className={`text-sm font-medium tracking-wide ${light ? 'text-gold' : 'text-blue'}`}>
            {kicker}
          </span>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold leading-tight max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white' : 'text-navy-deep'}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base md:text-lg max-w-xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-ink/65'}`}>
          {desc}
        </p>
      )}
    </Reveal>
  )
}
