import { Zap, Factory, Wrench, BarChart2, CheckCircle, Quote, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import equipmentDiagnosticsImg from '../assets/images/equipment_diagnostics.jpg'
import testimonialSarahImg from '../assets/images/testimonial_sarah.jpg'
import testimonialMarcusImg from '../assets/images/testimonial_marcus.jpg'
import testimonialDavidImg from '../assets/images/testimonial_david.jpg'

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

  const testimonials = [
    {
      image: testimonialSarahImg,
      name: 'Sarah Jenkins',
      role: 'Substation Reliability Lead',
      company: 'Regional Power Transmission Utility',
      badge: 'Utility Pilot Evaluation',
      outcome: '3 Weeks Early Hotspot Warning',
      quote:
        'The biggest shift is no longer waking our on-call engineers for benign peak-load alarms. GridGuard caught a winding insulation temperature gradient three weeks before it would have tripped the feeder bus.',
    },
    {
      image: testimonialMarcusImg,
      name: 'Marcus Vance',
      role: 'VP of Plant Operations',
      company: 'Industrial Process & Chemical Facility',
      badge: 'Continuous Plant Trial',
      outcome: 'Zero Secondary Equipment Damage',
      quote:
        'We eliminated secondary motor breakdowns across our primary gas compression trains. The diagnostic briefs give our technicians the exact sensor timeline before they step foot on the facility floor.',
    },
    {
      image: testimonialDavidImg,
      name: 'David Chen',
      role: 'Director of Asset Reliability',
      company: 'Energy Storage & Infrastructure Fleet',
      badge: 'Fleet Evaluation Pilot',
      outcome: 'Empirical Capital Planning',
      quote:
        'Having automated cross-sensor correlation between thermal drift and harmonic distortion gives our asset management team the empirical data we need to prioritize non-destructive capital inspections.',
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

        {/* SUB-SECTION: Field Testimonials & Pilot Perspectives */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-strong/10 text-blue-strong text-xs font-semibold border border-blue-strong/20 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-strong" />
              Pilot Engineering Perspectives
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Validated in real-world utility & industrial pilot environments
            </h3>
            <p className="text-sm sm:text-base text-subtle leading-relaxed">
              Read how operations directors and reliability leads prioritize field inspections with GridGuard AI.
            </p>
          </div>

          {/* 3 Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-card bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Quote Icon & Outcome Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold text-blue-strong px-2.5 py-1 rounded-md bg-blue-strong/10 border border-blue-strong/20">
                      {t.badge}
                    </span>
                    <Quote className="w-6 h-6 text-slate-300 group-hover:text-blue-strong/40 transition-colors" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Person Profile Footer with Generated Portrait Image */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src={t.image}
                      alt={`Portrait of ${t.name}, ${t.role}`}
                      className="w-12 h-12 rounded-full object-cover object-top border-2 border-white shadow-md ring-1 ring-slate-200"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-teal text-white flex items-center justify-center text-[9px] shadow-xs">
                      ✓
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-ink truncate">{t.name}</h4>
                    <p className="text-[11px] font-medium text-slate-600 truncate">{t.role}</p>
                    <p className="text-[10px] text-slate-400 truncate">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
