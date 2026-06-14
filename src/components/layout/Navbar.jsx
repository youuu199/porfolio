import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../../data/portfolio'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1))
      const offset = 120
      const scrollPos = window.scrollY + offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/80 bg-white/80 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold text-text"
        >
          <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          <span>.dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-secondary hover:bg-surface-alt hover:text-text'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-alt sm:hidden"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-white px-4 pb-4 sm:hidden">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-secondary hover:bg-surface-alt'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
