import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import gridguardLogo from '../assets/gridguard-logo-white.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Intelligence Loop', href: '#intelligence-loop' },
    { label: 'Audiences', href: '#audiences' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-line shadow-lg shadow-black/20'
          : 'bg-navy/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo Image (links to #platform) */}
          <a
            href="#platform"
            className="flex items-center hover:opacity-90 transition-opacity"
            aria-label="GridGuard AI Platform"
          >
            <img
              src={gridguardLogo}
              alt="GridGuard AI"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-text transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-blue-strong hover:bg-blue text-white text-sm font-semibold transition-all shadow-md shadow-blue-strong/20 hover:shadow-blue/30 active:scale-[0.99]"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-panel border border-line text-muted hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[73px] bg-navy-2/95 backdrop-blur-xl border-b border-line shadow-2xl p-6 transition-all animate-in fade-in duration-200"
          id="mobile-navigation-drawer"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted hover:text-text hover:translate-x-1 transition-all py-1.5 border-b border-line/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#early-access"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-strong hover:bg-blue text-white text-base font-semibold shadow-lg shadow-blue-strong/20"
              >
                <span>Request Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
