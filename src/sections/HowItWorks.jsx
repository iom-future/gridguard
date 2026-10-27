import { Database, Binary, BarChart3, Wrench, ArrowDown, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: Database,
      title: 'Telemetry Ingestion & Normalization',
      badge: 'Unified Data Fabric',
      description:
        'GridGuard ingests high-frequency data from existing SCADA systems, vibration monitors, thermal sensors, and inspection logs without requiring proprietary hardware replacement.',
      details: ['Modbus / OPC-UA / MQTT support', 'Time-series synchronization', 'Sensor health validation'],
    },
    {
      step: '02',
      icon: Binary,
      title: 'Dynamic Baseline Learning',
      badge: 'Operational Context',
      description:
        'Instead of brittle static thresholds, the platform models baseline operational behavior calibrated to each asset’s ambient weather, duty load, and thermal dissipation envelope.',
      details: ['Load-adjusted tolerances', 'Environmental normalization', 'Seasonal thermal modeling'],
    },
    {
      step: '03',
      icon: BarChart3,
      title: 'Multi-Factor Risk Scoring',
      badge: 'Risk Quantification',
      description:
        'Correlates subtle deviations across multiple concurrent signals (e.g. slight temperature rise + harmonic flux) to calculate an actionable 0-100 failure probability score.',
      details: ['Cross-sensor correlation', 'Degradation curve tracking', 'False-positive elimination'],
    },
    {
      step: '04',
      icon: Wrench,
      title: 'Actionable Inspection Dispatches',
      badge: 'Targeted Action',
      description:
        'Outputs ranked inspection tickets directly to maintenance teams complete with probable fault modes, sensor evidence snippets, and recommended diagnostic tests.',
      details: ['Ranked by consequence', 'Diagnostic evidence briefs', 'Work-order system export'],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-navy border-b border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="System Workflow"
          title="From continuous telemetry streams to high-confidence field decisions"
          description="A calibrated four-stage intelligence pipeline designed specifically for high-consequence energy and industrial environments."
        />

        {/* 4 Connected Process Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative rounded-card bg-navy-2 border border-line p-6 flex flex-col justify-between hover:border-blue/40 transition-all group"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-panel text-teal border border-line">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-panel border border-line flex items-center justify-center text-blue mb-4 group-hover:text-teal group-hover:border-teal/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-details list */}
                <div className="pt-4 border-t border-line/60 space-y-1.5 text-[11px] text-muted">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
