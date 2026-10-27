import { Database, Binary, BarChart3, Wrench, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: 'Telemetry Ingestion & Normalization',
      badge: 'Data Fabric',
      description:
        'GridGuard ingests high-frequency data from existing SCADA systems, vibration monitors, thermal sensors, and inspection logs without proprietary hardware replacement.',
      details: ['Modbus / OPC-UA / MQTT support', 'Time-series synchronization', 'Sensor health validation'],
    },
    {
      icon: Binary,
      title: 'Dynamic Baseline Learning',
      badge: 'Context Engine',
      description:
        'Instead of brittle static thresholds, the platform models baseline operational behavior calibrated to each asset’s ambient weather, duty load, and thermal envelope.',
      details: ['Load-adjusted tolerances', 'Environmental normalization', 'Seasonal thermal modeling'],
    },
    {
      icon: BarChart3,
      title: 'Multi-Factor Risk Scoring',
      badge: 'Risk Analytics',
      description:
        'Correlates subtle deviations across multiple concurrent signals (e.g. slight temperature rise + harmonic flux) to calculate an actionable 0-100 failure probability score.',
      details: ['Cross-sensor correlation', 'Degradation curve tracking', 'False-positive elimination'],
    },
    {
      icon: Wrench,
      title: 'Actionable Inspection Dispatches',
      badge: 'Field Action',
      description:
        'Outputs ranked inspection tickets directly to maintenance teams complete with probable fault modes, sensor evidence snippets, and recommended diagnostic tests.',
      details: ['Ranked by consequence', 'Diagnostic evidence briefs', 'Work-order system export'],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-navy border-b border-line relative overflow-hidden">
      {/* Expanded container width to give cards maximum horizontal breathing room on desktop */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          theme="dark"
          eyebrow="System Workflow"
          title="From continuous telemetry streams to high-confidence field decisions"
          description="A calibrated four-stage intelligence pipeline designed specifically for high-consequence energy and industrial environments."
        />

        {/* 1 col on mobile, 2x2 on md, single 4-card row on lg/desktop */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="relative rounded-card bg-navy-2 border border-line p-5 sm:p-6 xl:p-7 flex flex-col justify-between hover:border-blue/40 transition-all group shadow-xl"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] xl:text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-panel text-teal border border-line">
                      {item.badge}
                    </span>

                    <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl bg-panel border border-line flex items-center justify-center text-blue group-hover:text-teal group-hover:border-teal/30 transition-colors shrink-0 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base xl:text-lg font-bold text-text mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs xl:text-sm text-muted leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Sub-details List */}
                <div className="pt-4 border-t border-line/60 space-y-2">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2 text-[11px] xl:text-xs text-muted/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-1" />
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
