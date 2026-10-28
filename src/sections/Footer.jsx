import { ArrowUp } from 'lucide-react'
import gridguardLogo from '../assets/gridguard-logo-white.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t border-line text-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#platform" className="inline-block hover:opacity-90 transition-opacity" aria-label="GridGuard AI Platform">
              <img
                src={gridguardLogo}
                alt="GridGuard AI"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              Infrastructure intelligence platform designed to help energy operators, utility networks,
              and industrial maintenance teams identify equipment risk and prioritize inspections before failure occurs.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-panel/80 border border-line text-[11px] text-teal">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span>Pilot Evaluation v1.2 Preview</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-text uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#platform" className="hover:text-text transition-colors">
                  Platform Overview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-text transition-colors">
                  System Workflow
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-text transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#intelligence-loop" className="hover:text-text transition-colors">
                  Intelligence Loop
                </a>
              </li>
              <li>
                <a href="#audiences" className="hover:text-text transition-colors">
                  Intended Audiences
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-text transition-colors">
                  Team & Leadership
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-text transition-colors">
                  Frequently Answered Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-text uppercase tracking-wider">
              Inquiries
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Early pilot evaluations, architectural specifications, and air-gapped security inquiries:
            </p>
            <div className="p-3 rounded-xl bg-panel/50 border border-line text-xs">
              <span className="text-muted block text-[11px]">Direct Pilot Contact:</span>
              <a
                href="mailto:pilots@gridguard.ai"
                className="text-blue hover:text-blue-strong font-medium transition-colors"
              >
                pilots@gridguard.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted">
          <div>
            © {currentYear} GridGuard AI. All rights reserved.
          </div>
          <div className="text-center sm:text-right max-w-md text-muted/70">
            GridGuard AI is an infrastructure intelligence advisory platform. Simulated telemetry and dashboard visualizations are for illustrative demonstration.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-panel hover:bg-panel/80 border border-line text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
