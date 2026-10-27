import { AlertOctagon, BellOff, Layers3, Flame, CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import industrialFacilityImg from '../assets/images/industrial_grid_facility.jpg'

export default function Problem() {
  const challenges = [
    {
      icon: Layers3,
      title: 'Fragmented Telemetry Silos',
      description:
        'Vibration monitors, thermal cameras, SCADA historians, and manual maintenance logs operate in disconnected systems, making fleet-wide risk assessment nearly impossible.',
    },
    {
      icon: BellOff,
      title: 'Alert Fatigue & Sensor Noise',
      description:
        'Static threshold alarms fire continuously during non-critical peak loads, causing control room operators to miss subtle, multi-parameter pre-failure degradation.',
    },
    {
      icon: Flame,
      title: 'Reactive Firefighting Cycles',
      description:
        'Maintenance teams are stretched thin responding to emergency outages rather than targeting high-consequence components before mechanical failure occurs.',
    },
    {
      icon: AlertOctagon,
      title: 'Cascading Secondary Damage',
      description:
        'A single unnoticed bearing or insulation breakdown spreads rapidly to surrounding transformers, turbines, and feeder buses, multiplying repair costs.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-surface text-ink border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="The Operational Challenge"
          title="Critical infrastructure cannot rely on reactive maintenance and unranked alarms"
          description="Energy utilities and industrial plants generate vast telemetry streams, yet technicians still discover severe component failures after physical disruption has already begun."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Generated industrial facility photograph with technical callout badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card overflow-hidden border border-slate-300 shadow-xl bg-slate-900 aspect-16/10">
              <img
                src={industrialFacilityImg}
                alt="High-voltage power substation and industrial monitoring infrastructure at dusk"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-navy/90 backdrop-blur-md border border-white/10 text-white text-xs">
                <div className="font-semibold text-teal flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  Distributed High-Voltage Substation
                </div>
                <div className="text-muted text-[11px] mt-0.5">
                  Multi-parameter telemetry monitoring over 85 distinct electrical and thermal telemetry channels.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Challenge breakdown cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-strong mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-subtle leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Transition callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              The solution isn’t more sensors—it’s intelligent prioritization.
            </h4>
            <p className="text-xs sm:text-sm text-muted">
              GridGuard unifies your existing data to surface what demands action today versus next month.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-strong hover:bg-blue text-white text-xs font-semibold transition-colors"
          >
            <span>See The Workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
