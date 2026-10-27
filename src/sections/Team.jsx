import SectionHeading from '../components/SectionHeading'
import stephenImg from '../assets/images/team_stephen.jpg'
import aminaImg from '../assets/images/team_amina.jpg'
import babatundeImg from '../assets/images/team_babatunde.jpg'
import chiomaImg from '../assets/images/team_chioma.jpg'
import olumideImg from '../assets/images/team_olumide.jpg'
import zainabImg from '../assets/images/team_zainab.jpg'

export default function Team() {
  const teamMembers = [
    {
      name: 'Stephen Igoche',
      role: 'Chief Executive Officer & Founder',
      roleColor: 'text-indigo-400',
      domain: 'Grid Architecture & Strategy',
      image: stephenImg,
      bio: 'Visionary infrastructure technology executive and former power grid systems architect with over 14 years pioneering condition-monitoring frameworks for transmission utilities. Driven by the catastrophic costs of unranked alarm floods, Stephen founded GridGuard AI to dematerialize operational blind spots into decisive, predictive maintenance intelligence.',
    },
    {
      name: 'Amina Bello',
      role: 'Chief Technology Officer & Head of AI',
      roleColor: 'text-teal',
      domain: 'Multi-Modal Signal Intelligence',
      image: aminaImg,
      bio: 'Pioneering machine learning researcher specialized in high-frequency time-series sensor fusion and dynamic anomaly detection. Prior to GridGuard, Amina led predictive modeling for critical utility turbines, architecting proprietary cross-sensor correlation algorithms that detect equipment micro-drifts weeks before physical breakdown occurs.',
    },
    {
      name: 'Babatunde Adeyemi',
      role: 'VP of Engineering & SCADA Systems',
      roleColor: 'text-blue',
      domain: 'Industrial Automation & OT',
      image: babatundeImg,
      bio: 'Veteran industrial automation authority with deep mastery of Modbus, OPC-UA, and distributed historian telemetry architectures. Babatunde has overseen mission-critical OT/IT convergence across heavy chemical, refinery, and power facilities, ensuring GridGuard ingests telemetry with zero disruption to active control networks.',
    },
    {
      name: 'Chioma Okonkwo',
      role: 'Head of Product & Reliability Operations',
      roleColor: 'text-indigo-400',
      domain: 'Asset Health & Decision Support',
      image: chiomaImg,
      bio: 'Former transmission substation reliability lead who managed preventative maintenance schedules across hundreds of high-voltage transformers. Frustrated by static threshold alarms that caused chronic alert fatigue for on-call engineers, Chioma shapes GridGuard’s prioritized risk queues and actionable field diagnostic briefs.',
    },
    {
      name: 'Olumide Adeleke',
      role: 'Lead Infrastructure Security Architect',
      roleColor: 'text-blue',
      domain: 'Air-Gapped & Utility Cybersecurity',
      image: olumideImg,
      bio: 'Cybersecurity and mission-critical systems authority dedicated to zero-trust operational technology frameworks. Olumide spearheads GridGuard’s on-premises and air-gapped deployment architecture, guaranteeing that utility telemetry processing meets strict regulatory security perimeters with zero outbound data egress.',
    },
    {
      name: 'Zainab Danjuma',
      role: 'Director of Field Deployment & Operations',
      roleColor: 'text-teal',
      domain: 'Field Diagnostics & NDT Testing',
      image: zainabImg,
      bio: 'Mechanical engineering veteran with extensive condition monitoring and non-destructive testing (NDT) diagnostic experience across rotating machinery and gas compressor fleets. Zainab coordinates pilot onboarding and closes the feedback loop between field inspection findings and baseline model tuning.',
    },
  ]

  return (
    <section id="team" className="py-20 lg:py-28 bg-navy-2 border-b border-line relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-strong/10 blur-[140px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Leadership & Engineering"
          title="The Team Behind GridGuard AI"
          description="Experienced infrastructure engineers, AI researchers, and industrial operations veterans dedicated to transforming equipment telemetry into decisive operational certainty."
        />

        {/* 6 Team Members Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-card bg-panel/40 border border-line p-6 hover:bg-panel/70 hover:border-blue/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Photo with high-end tech styling */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-line bg-navy/60 shadow-lg mb-6">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-teal px-2 py-0.5 rounded-md bg-navy/90 border border-line backdrop-blur-xs">
                      {member.domain}
                    </span>
                  </div>
                </div>

                {/* Name - Styled big, bold, and clean matching reference */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-snug">
                  {member.name}
                </h3>

                {/* Role with vibrant colored accent */}
                <p className={`text-sm sm:text-base font-semibold ${member.roleColor} mt-1 mb-4`}>
                  {member.role}
                </p>

                {/* Editorial Bio Paragraph */}
                <p className="text-sm text-muted leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Card Accent */}
              <div className="mt-6 pt-4 border-t border-line/50 flex items-center justify-between text-xs text-muted/70">
                <span>GridGuard Core Team</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
