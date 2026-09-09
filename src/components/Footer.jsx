import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
import { nav, contactInfo, socials } from '../data/content'

const serviceLinks = [
  'Software Development', 'Cloud Solutions', 'DevOps & Automation', 'AI & Machine Learning', 'IT Consulting',
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-px py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:pr-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="LogicTech Solutions logo" className="h-11 w-11 object-contain" />
            <span className="font-display font-semibold text-white">LogicTech<span className="text-gold"> Solutions</span></span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Practical, scalable technology solutions for growing businesses — software, cloud, and digital transformation.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Quick links</h3>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-gold transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><Mail size={15} className="mt-0.5 shrink-0" /> {contactInfo.email}</li>
            <li className="flex items-start gap-2.5"><Phone size={15} className="mt-0.5 shrink-0" /> {contactInfo.phone}</li>
            <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0" /> {contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 LogicTech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
