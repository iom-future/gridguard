import { useRef } from 'react'
import { ArrowRight, ChevronDown, ShieldCheck, Cpu, Activity, Zap } from 'lucide-react'
import DashboardPreview from '../components/DashboardPreview'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      gsap.from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      })
    },
    { scope: heroRef }
  )

  return (
    <section
      id="platform"
      ref={heroRef}
      className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-2 border-b border-line"
    >
      {/* Background radial technical accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-strong/10 blur-[120px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-panel/80 border border-line text-xs font-semibold text-teal tracking-wide shadow-inner">
            <Activity className="w-3.5 h-3.5 text-teal" />
            <span>INFRASTRUCTURE INTELLIGENCE</span>
            <span className="text-muted/60">•</span>
            <span className="text-muted font-normal">Know Before It Fails</span>
          </div>

          <h1 className="hero-fade text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.12]">
            Identify equipment risks.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-teal to-blue">
              Prioritize maintenance.
            </span>
          </h1>

          <p className="hero-fade text-base sm:text-lg lg:text-xl text-muted leading-relaxed">
            GridGuard AI continuously analyzes complex sensor streams and operational telemetry
            to surface pre-failure degradation signatures—enabling energy and industrial operators
            to dispatch technicians before catastrophic downtime strikes.
          </p>

          {/* Action CTAs */}
          <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="#early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-strong hover:bg-blue text-white text-base font-semibold shadow-xl shadow-blue-strong/25 hover:shadow-blue/35 transition-all active:scale-[0.99]"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-panel/80 hover:bg-panel text-text border border-line text-base font-medium transition-colors"
            >
              <span>How It Works</span>
              <ChevronDown className="w-4 h-4 text-muted" />
            </a>
          </div>

          {/* Value / Trust Line */}
          <div className="hero-fade pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span>Calibrated Risk Scoring</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue" />
              <span>Multi-Sensor Drift Detection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-teal" />
              <span>Zero Hardware Overhaul</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Dashboard Visual */}
        <div className="hero-fade mt-10 sm:mt-14 max-w-6xl mx-auto">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
