import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import nikki from '../../assets/nikki.jpeg'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Technical Skills' },
    { path: '/education', label: 'Education' },
    { path: '/certificates', label: 'Certifications' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-brand-500 via-blue-400 to-sky-300 shadow-soft overflow-hidden">
            <img 
              src={nikki} 
              alt="Nikhita" 
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </p>
            <p className="text-sm font-semibold text-slate-50">Nikhita Bonu</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm transition-colors ${
                location.pathname === item.path
                  ? 'text-slate-50'
                  : 'text-slate-300 hover:text-slate-50'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-slate-300 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-2">
       
          <Link
            to="/contact"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-soft transition-all hover:scale-105 hover:shadow-blue-500/20 active:scale-95"
          >
            <span className="relative z-10">Get in touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 transition-opacity hover:opacity-100" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-slate-50 pl-4 border-l-4 border-blue-400'
                      : 'text-slate-300 hover:text-slate-50 hover:pl-4 hover:border-l-4 hover:border-slate-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-soft"
              >
                Get in touch
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}