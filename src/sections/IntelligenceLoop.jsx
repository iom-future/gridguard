import { RefreshCw, Activity, CheckCircle2, Sliders, ArrowRight, ArrowDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function IntelligenceLoop() {
  const loopStages = [
    {
      num: '1',
      title: 'Continuous Telemetry',
      desc: 'Ingests active vibration, temperature, acoustic, and electrical parameters from substation and plant assets.',
    },
    {
      num: '2',
      title: 'Multi-Signal Correlation',
      desc: 'Identifies concurrent micro-deviations across multiple sensors before individual thresholds are breached.',
    },
    {
      num: '3',
      title: 'Calibrated Risk Queue',
      desc: 'Ranks assets into high, elevated, and nominal categories based on calculated failure probability.',
    },
    {
      num: '4',
      title: 'Field Verification',
      desc: 'Maintenance specialists conduct targeted non-destructive testing guided by diagnostic evidence briefs.',
    },
    {
      num: '5',
      title: 'Baseline Calibration',
      desc: 'Inspection findings and physical measurements feed back to tune asset profiles, permanently reducing false positives.',
    },
  ]

  return (
    <section id="intelligence-loop" className="py-20 lg:py-28 bg-navy border-b border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Continuous Learning Architecture"
          title="The GridGuard Intelligence Loop"
          description="How field insights and telemetry continuously reinforce predictive precision across your infrastructure fleet."
        />

        {/* Circular / Continuous Loop Flow Layout */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {loopStages.map((stage, idx) => (
              <div
                key={stage.num}
                className="relative p-5 rounded-2xl bg-panel/70 border border-line flex flex-col justify-between hover:border-teal/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-navy border border-line flex items-center justify-center font-bold text-teal text-sm">
                      {stage.num}
                    </span>
                    {idx < loopStages.length - 1 ? (
                      <ArrowRight className="hidden md:block w-4 h-4 text-muted/40" />
                    ) : (
                      <RefreshCw className="w-4 h-4 text-teal animate-spin-slow" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-text mb-1.5">{stage.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{stage.desc}</p>
                </div>
                {idx < loopStages.length - 1 && (
                  <div className="md:hidden flex justify-center py-2 text-muted/40">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Feedback loop highlight callout */}
          <div className="mt-8 p-6 rounded-card bg-navy-2 border border-line flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-panel border border-line flex items-center justify-center text-teal shrink-0 mt-0.5">
                <RefreshCw className="w-6 h-6 text-teal" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-text">
                  Closed-Loop Feedback Eliminates Recurring Alarm Fatigue
                </h4>
                <p className="text-xs sm:text-sm text-muted">
                  Unlike static rule-based software that continues alarming on benign anomalies, GridGuard incorporates verified inspection reports to refine individual component tolerance models.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-panel text-text border border-line">
              <CheckCircle2 className="w-4 h-4 text-teal" />
              <span>Compounding Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
