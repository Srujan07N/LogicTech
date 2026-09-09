import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav } from '../data/content'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [lastPathname, setLastPathname] = useState(pathname)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(7,59,120,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="LogicTech Solutions home">
          <motion.img
            src={logo}
            alt="LogicTech Solutions logo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="h-12 w-12 object-contain"
          />
          <span className={`font-display font-semibold text-lg leading-none hidden sm:block ${scrolled ? 'text-navy-deep' : 'text-white'}`}>
            LogicTech<span className="text-gold"> Solutions</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const active = pathname === item.to
            return (
              <li key={item.to} className="relative">
                <Link
                  to={item.to}
                  className={`text-sm font-medium py-2 transition-colors ${
                    scrolled ? (active ? 'text-navy-deep' : 'text-ink/70 hover:text-navy-deep') : (active ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {item.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
        >
          Get Started <ArrowRight size={16} />
        </Link>

        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-navy-deep' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white shadow-lg"
          >
            <ul className="container-px py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`block py-3 text-base font-medium border-b border-navy/5 ${pathname === item.to ? 'text-navy-deep' : 'text-ink/70'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
