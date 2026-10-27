import { Zap, Factory, Wrench, BarChart2, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import equipmentDiagnosticsImg from '../assets/images/equipment_diagnostics.jpg'

export default function Audience() {
  const audiences = [
    {
      icon: Zap,
      role: 'Electrical & Utility Operators',
      scope: 'Transmission & Distribution Substations',
      benefit:
        'Maintain grid reliability across aging transformer fleets and switchgear assets without inundating control rooms with unranked SCADA alarm floods.',
      outcomes: ['Early transformer core hotspot alerts', 'Feeder bus insulation drift tracking', 'Systemic reliability index management'],
    },
    {
      icon: Factory,
      role: 'Industrial & Manufacturing Plant Leaders',
      scope: 'Heavy Manufacturing & Process Plants',
      benefit:
        'Protect continuous production cycles by identifying failing rotating equipment, compressor stages, and high-duty motors prior to costly line shutdowns.',
      outcomes: ['Critical compressor train protection', 'Bearing and gear mesh vibration drift', 'Elimination of catastrophic secondary damage'],
    },
    {
      icon: Wrench,
      role: 'Reliability & Field Maintenance Teams',
      scope: 'Inspection Specialists & Field Technicians',
      benefit:
        'Replace indiscriminate calendar-based routes with prioritized work queues backed by specific diagnostic evidence and non-destructive test recommendations.',
      outcomes: ['Targeted physical inspection dispatches', 'Evidence briefs with sensor timeline slices', 'Reduced emergency night/weekend callouts'],
    },
    {
      icon: BarChart2,
      role: 'Operations & Asset Executives',
      scope: 'Asset Management & Capital Planning',
      benefit:
        'Gain empirical visibility into fleet-wide degradation rates to optimize capital expenditure schedules, insurance premiums, and equipment life-extensions.',
      outcomes: ['Fleet-level risk exposure oversight', 'Data-driven capital replacement plans', 'Documented maintenance audit trails'],
    },
  ]

  return (
    <section id="audiences" className="py-20 lg:py-28 bg-surface text-ink border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Targeted Operational Value"
          title="Engineered for teams responsible for mission-critical uptime"
          description="How GridGuard AI delivers actionable intelligence tailored to every tier of infrastructure operations."
        />

        {/* Visual equipment diagnostics feature banner */}
        <div className="mt-14 mb-12 rounded-card overflow-hidden border border-slate-300 shadow-lg bg-navy text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/15 text-teal text-xs font-semibold border border-teal/20">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Substation & Industrial Plant Telemetry
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                One unified risk priority queue for both engineering and operations
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Whether diagnosing subtle thermal gradients on an oil-cooled step-down transformer
                or reviewing vibration spectra on high-pressure gas compressors, GridGuard gives your
                entire organization one verified source of truth.
              </p>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src={equipmentDiagnosticsImg}
                alt="Industrial power equipment diagnostics monitoring module with telemetry sensors"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-navy/30 via-transparent to-navy/80" />
            </div>
          </div>
        </div>

        {/* Audience 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((aud) => {
            const Icon = aud.icon
            return (
              <div
                key={aud.role}
                className="p-6 rounded-card bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-strong">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{aud.role}</h3>
                      <p className="text-xs font-medium text-subtle">{aud.scope}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-subtle leading-relaxed mb-4">
                    {aud.benefit}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Primary Operational Outcomes:
                  </span>
                  {aud.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-xs text-ink/90">
                      <CheckCircle className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>{outcome}</span>
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
