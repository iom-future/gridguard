import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'What types of equipment and infrastructure does GridGuard AI support?',
      a: 'GridGuard is engineered for critical utility and industrial assets where mechanical, thermal, or electrical degradation precedes catastrophic failure. This includes high-voltage oil-filled transformers, step-down substations, medium-voltage switchgear, gas compressors, multi-stage pumps, high-horsepower induction motors, and turbine generator bearings.',
    },
    {
      q: 'Does GridGuard require replacing our existing sensors or SCADA systems?',
      a: 'No. GridGuard is an intelligence layer that interfaces with your existing telemetry streams. It ingests time-series data via standard industrial protocols including Modbus, OPC-UA, MQTT, and historian databases (such as OSIsoft PI). No proprietary hardware overhaul is required to begin monitoring.',
    },
    {
      q: 'How does GridGuard avoid the alert fatigue common with traditional threshold monitoring?',
      a: 'Static threshold alarms trigger whenever single sensors exceed arbitrary boundaries—often during normal high-load or warm-weather operations. GridGuard instead analyzes multi-sensor correlation (e.g. concurrent acoustic variance + localized winding temperature drift adjusted for ambient conditions) to calculate an actual degradation probability before firing an alert.',
    },
    {
      q: 'Can GridGuard be deployed on-premises or in air-gapped utility environments?',
      a: 'Yes. For utilities and industrial operators adhering to strict operational security policies (such as NERC CIP or proprietary security perimeters), GridGuard can be deployed fully on-premises or within isolated private network enclaves with zero external cloud dependencies or outbound telemetry egress.',
    },
    {
      q: 'What is required to initiate an early pilot evaluation?',
      a: 'Pilots begin with a scoped technical review of existing telemetry channels for 10 to 50 critical assets. Our team coordinates historical telemetry ingestion (typically 30–90 days of operational records) to train baseline models and demonstrate pre-failure detection on known past events prior to live monitoring.',
    },
    {
      q: 'Does GridGuard take automatic physical actions or control equipment directly?',
      a: 'No. GridGuard operates as an advisory intelligence platform. It produces prioritized inspection queues, diagnostic evidence briefs, and recommended non-destructive testing procedures. Physical maintenance decisions, switching actions, and work orders remain under the full control of certified operators and engineers.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-navy-2 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Frequently Answered Questions"
          title="Clear answers for infrastructure & reliability teams"
          description="Everything you need to know about telemetry ingestion, deployment security, and operational workflows."
        />

        <div className="mt-14 max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-panel border-blue/50 shadow-md ring-1 ring-blue/20'
                    : 'bg-panel/40 border-line hover:border-line/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-sm sm:text-base font-bold text-text">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-navy/60 border border-line flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal border-teal/30' : 'text-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-line/40 animate-in fade-in duration-200"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
