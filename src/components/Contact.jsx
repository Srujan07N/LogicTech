import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contactInfo, socials } from '../data/content'

const services = [
  'Software Development', 'Web Development', 'Mobile App Development',
  'Cloud Solutions', 'DevOps & Automation', 'IT Consulting', 'Other',
]

const initialState = { name: '', email: '', phone: '', company: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Tell us a little about your project.'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) {
      setStatus('error')
      return
    }
    // No backend is wired up yet \u2014 simulate a successful submission.
    setStatus('success')
    setForm(initialState)
  }

  const field = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-deep mb-1.5">{label}</label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        className={`w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${errors[name] ? 'border-red-400' : 'border-navy/15 focus:border-gold'}`}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{errors[name]}</p>
      )}
    </div>
  )

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-light">
      <div className="container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionHeading kicker="Contact" title="Let's build something great together" />
          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: 'Email', value: contactInfo.email },
              { icon: Phone, label: 'Phone', value: contactInfo.phone },
              { icon: MapPin, label: 'Office', value: contactInfo.address },
              { icon: Clock, label: 'Business hours', value: contactInfo.hours },
            ].map((item) => (
              <Reveal key={item.label} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-ink/50">{item.label}</p>
                  {item.label === 'Email' ? (
                    <a href={`mailto:${item.value}`} className="text-sm font-medium text-navy-deep hover:text-gold transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-navy-deep">{item.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="text-sm font-medium text-navy-deep mb-4">Follow us</p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white border border-navy/8 p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {field('name', 'Full name')}
              {field('email', 'Email', 'email')}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {field('phone', 'Phone')}
              {field('company', 'Company')}
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-navy-deep mb-1.5">Service</label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-deep mb-1.5">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-navy/15 focus:border-gold'}`}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Send message
            </button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p
                  key="ok"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-600"
                  role="status"
                >
                  <CheckCircle2 size={16} /> Thanks — we'll be in touch shortly.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-red-500"
                  role="alert"
                >
                  <AlertCircle size={16} /> Please fix the highlighted fields and try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
