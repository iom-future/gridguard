import { useState } from 'react'
import { RefreshCw, CheckCircle2, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function Pushpin({ color = 'orange', active = false }) {
  const pinColors = {
    orange: {
      head: 'from-amber-300 via-orange-500 to-orange-700',
      shadow: 'bg-orange-500/40',
      glow: 'shadow-orange-500/40',
    },
    blue: {
      head: 'from-sky-300 via-blue-500 to-blue-700',
      shadow: 'bg-blue-500/40',
      glow: 'shadow-blue-500/40',
    },
    purple: {
      head: 'from-fuchsia-300 via-purple-500 to-purple-700',
      shadow: 'bg-purple-500/40',
      glow: 'shadow-purple-500/40',
    },
    amber: {
      head: 'from-yellow-200 via-amber-500 to-amber-700',
      shadow: 'bg-amber-500/40',
      glow: 'shadow-amber-500/40',
    },
    teal: {
      head: 'from-emerald-200 via-teal-500 to-teal-700',
      shadow: 'bg-teal-500/40',
      glow: 'shadow-teal-500/40',
    },
  }

  const c = pinColors[color] || pinColors.orange

  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
      {/* 3D Pin Head */}
      <div
        className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${c.head} shadow-md ${c.glow} border border-white/60 flex items-center justify-center transition-transform duration-300 ${
          active ? 'scale-125' : ''
        }`}
      >
        {/* Specular highlight for realistic 3D sheen */}
        <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/90" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>
      {/* Pin Shadow on the card */}
      <div className={`w-5 h-2 rounded-full ${c.shadow} blur-[2px] -mt-0.5`} />
    </div>
  )
}

export default function IntelligenceLoop() {
  const [activeStep, setActiveStep] = useState(0)

  const loopStages = [
    {
      num: '01',
      title: 'Continuous Telemetry',
      pinColor: 'orange',
      cardRotation: 'sm:-rotate-2.5',
      innerBg: 'bg-gradient-to-b from-orange-50/90 to-amber-50/70 border-orange-200/70 text-amber-950',
      numColor: 'text-orange-600',
      highlightBadge: 'Real-Time Ingestion',
      desc: 'Ingests active vibration, temperature, acoustic, and electrical parameters from substation and plant assets across existing SCADA connections.',
      stat: '0 proprietary hardware replacements',
    },
    {
      num: '02',
      title: 'Multi-Signal Correlation',
      pinColor: 'blue',
      cardRotation: 'sm:rotate-2',
      innerBg: 'bg-gradient-to-b from-blue-50/90 to-indigo-50/70 border-blue-200/70 text-blue-950',
      numColor: 'text-blue-600',
      highlightBadge: 'Pattern Intelligence',
      desc: 'Identifies concurrent micro-deviations across multiple sensors simultaneously, detecting degradation before individual thresholds are breached.',
      stat: 'Multi-parameter drift detection',
    },
    {
      num: '03',
      title: 'Calibrated Risk Queue',
      pinColor: 'purple',
      cardRotation: 'sm:-rotate-2',
      innerBg: 'bg-gradient-to-b from-purple-50/90 to-fuchsia-50/70 border-purple-200/70 text-purple-950',
      numColor: 'text-purple-600',
      highlightBadge: 'Risk Prioritization',
      desc: 'Ranks every fleet asset into high, elevated, or nominal risk categories based on calculated failure probability rather than static alarms.',
      stat: '0–100 risk scoring index',
    },
    {
      num: '04',
      title: 'Field Verification',
      pinColor: 'amber',
      cardRotation: 'sm:rotate-2.5',
      innerBg: 'bg-gradient-to-b from-amber-50/90 to-yellow-50/70 border-amber-200/70 text-amber-950',
      numColor: 'text-amber-700',
      highlightBadge: 'Targeted Dispatch',
      desc: 'Maintenance specialists conduct targeted non-destructive testing (ultrasound, DGA, thermography) guided by automated diagnostic briefs.',
      stat: 'Evidence-backed work orders',
    },
    {
      num: '05',
      title: 'Baseline Calibration',
      pinColor: 'teal',
      cardRotation: 'sm:-rotate-1.5',
      innerBg: 'bg-gradient-to-b from-teal-50/90 to-emerald-50/70 border-teal-200/70 text-teal-950',
      numColor: 'text-teal-700',
      highlightBadge: 'Compounding Accuracy',
      desc: 'Physical inspection findings feed directly back into model weights, tuning tolerances for ambient weather and eliminating recurring false alarms.',
      stat: 'Continuous self-refining loop',
    },
  ]

  return (
    <section
      id="intelligence-loop"
      className="py-20 lg:py-28 bg-navy border-b border-line relative overflow-hidden"
      style={{
        backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(255, 255, 255, 0.04) 36px)`,
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal/10 blur-[140px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Continuous Learning Architecture"
          title="The GridGuard Intelligence Loop"
          description="How field insights and multi-sensor telemetry continuously reinforce predictive precision across your infrastructure fleet."
        />

        {/* Pinned Note Cards Journey (Zig-Zag Path with Connecting Curve) */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Desktop SVG Connecting Dashed Curve weaving behind the cards */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 1100"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 230 70 C 450 70, 570 230, 570 290 C 570 350, 230 460, 230 520 C 230 580, 570 690, 570 750 C 570 810, 230 920, 230 980 C 230 1020, 400 1060, 570 1060"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Cards Container */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {loopStages.map((stage, idx) => {
              const isEven = idx % 2 === 1
              const isActive = activeStep === idx

              return (
                <div
                  key={stage.num}
                  className={`flex items-center ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  } justify-center`}
                >
                  {/* Pinned Note Card */}
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`relative w-full max-w-md p-2 rounded-[26px] bg-white shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer ${
                      stage.cardRotation
                    } hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_22px_45px_rgba(0,0,0,0.45)] ${
                      isActive ? 'ring-3 ring-teal scale-[1.02] rotate-0' : ''
                    }`}
                  >
                    {/* Realistic 3D Pushpin on top */}
                    <Pushpin color={stage.pinColor} active={isActive} />

                    {/* Inner Pastel Box */}
                    <div
                      className={`rounded-[20px] p-5 sm:p-6 border ${stage.innerBg} transition-colors`}
                    >
                      {/* Top Row: Number & Category Badge */}
                      <div className="flex items-center justify-between mb-3 pt-1">
                        <span
                          className={`font-mono text-xl sm:text-2xl font-black ${stage.numColor} tracking-tight`}
                        >
                          {stage.num}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 backdrop-blur-xs border border-black/5 shadow-2xs">
                          {stage.highlightBadge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                        {stage.desc}
                      </p>

                      {/* Bottom Key Stat / Deliverable */}
                      <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-800">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                          <span>{stage.stat}</span>
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                          Stage {idx + 1} of 5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Closed-Loop Return Banner */}
          <div className="mt-16 p-6 sm:p-8 rounded-card bg-navy-2/95 border border-line shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 overflow-hidden">
            {/* Spinning continuous loop background watermark */}
            <RefreshCw
              className="absolute -left-6 -top-6 sm:-left-10 sm:-top-10 w-44 h-44 sm:w-56 sm:h-56 text-teal/10 animate-spin-slow pointer-events-none select-none"
              aria-hidden="true"
            />

            <div className="space-y-1 relative z-10 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Closed-Loop Architecture
                </span>
                <span className="text-muted/60">•</span>
                <span className="text-xs text-muted">Compounding Fleet Precision</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-text">
                Inspection Findings Permanently Eliminate Recurring False Alarms
              </h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Unlike traditional SCADA threshold alarms that fire endlessly on normal peak loads, GridGuard incorporates verified field inspection outcomes to continuously refine individual component baseline tolerances.
              </p>
            </div>

            <a
              href="#early-access"
              className="relative z-10 shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-strong hover:bg-blue text-white text-xs font-semibold shadow-md shadow-blue-strong/20 transition-all active:scale-[0.99]"
            >
              <span>Explore Pilot Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
