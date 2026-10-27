import {
  SlidersHorizontal,
  GitMerge,
  Fingerprint,
  FileText,
  ClipboardCheck,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Features() {
  const capabilities = [
    {
      icon: SlidersHorizontal,
      title: 'Dynamic Risk Indexing',
      category: 'Prioritization',
      description:
        'Replaces crude static alarm thresholds with calibrated 0–100 risk indices calculated from multi-sensor anomaly amplitude, asset criticality, and historical failure curves.',
    },
    {
      icon: GitMerge,
      title: 'Cross-Sensor Correlation',
      category: 'Signal Analytics',
      description:
        'Surfaces complex degradation patterns that no single sensor detects alone—such as small harmonic current distortions paired with localized thermal gradients.',
    },
    {
      icon: Fingerprint,
      title: 'Asset Health Fingerprinting',
      category: 'Equipment Profiling',
      description:
        'Builds empirical baseline profiles for transformers, turbines, pumps, and switchgear, accounting for operating hours, load intensity, and ambient conditions.',
    },
    {
      icon: FileText,
      title: 'Root-Cause Diagnostic Briefs',
      category: 'Decision Support',
      description:
        'Every flagged issue includes raw telemetry excerpts, baseline deviation timelines, and recommended non-destructive field inspection procedures (e.g. DGA, ultrasound).',
    },
    {
      icon: ClipboardCheck,
      title: 'Closed-Loop Inspection Tracking',
      category: 'Workflow Integration',
      description:
        'Documents field inspection outcomes back into the intelligence engine to continuously validate diagnostic accuracy and eliminate recurring false alarms.',
    },
    {
      icon: ShieldAlert,
      title: 'Secure & Air-Gapped Deployment',
      category: 'Enterprise Security',
      description:
        'Engineered for critical infrastructure with flexible deployment models: on-premises, private cloud, or air-gapped utility network segments with zero external egress.',
    },
  ]

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-navy-2 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Core Capabilities"
          title="Engineered for high-stakes operational clarity"
          description="Capabilities designed specifically to help operations teams make fast, confident maintenance decisions without wading through alarm noise."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.title}
                className="rounded-card bg-panel/50 border border-line p-6 hover:bg-panel hover:border-blue/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-teal uppercase tracking-wider px-2 py-0.5 rounded bg-navy border border-line">
                      {cap.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-navy border border-line flex items-center justify-center text-blue group-hover:text-teal transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-text mb-2.5 flex items-center justify-between">
                    <span>{cap.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-line/40 flex items-center justify-between text-xs text-blue group-hover:text-teal transition-colors">
                  <span className="font-medium">Operational capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
