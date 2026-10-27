import { useState } from 'react'
import { Send, CheckCircle2, Shield, Info, AlertCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    assetType: 'utility-substations',
    equipmentConcern: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.'
    }
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Please provide your work email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid email address.'
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Please enter your organization or facility name.'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate short processing state before displaying clear demonstration confirmation
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      assetType: 'utility-substations',
      equipmentConcern: '',
    })
    setSubmitted(false)
  }

  return (
    <section id="early-access" className="py-20 lg:py-28 bg-navy border-b border-line relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-teal/10 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionHeading
            theme="dark"
            eyebrow="Early Access Pilot"
            title="Evaluate GridGuard AI on your critical infrastructure"
            description="We are onboarding select energy utilities and industrial facilities for early-access deployment pilots. Request an architecture review and technical walkthrough."
          />
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          {submitted ? (
            /* Clear, honest frontend demonstration feedback */
            <div className="rounded-card bg-navy-2 border border-teal/40 p-8 sm:p-10 shadow-2xl text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-teal/15 text-teal border border-teal/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-panel text-teal border border-line">
                  DEMONSTRATION SHELL
                </span>
                <h3 className="text-2xl font-bold text-text">
                  Pilot Request Captured (Client Preview)
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="text-text font-semibold">{formData.fullName}</span> from{' '}
                  <span className="text-text font-semibold">{formData.organization}</span>.
                </p>
              </div>

              {/* Explicit disclosure that no backend API was invented */}
              <div className="p-4 rounded-xl bg-panel/70 border border-line text-left text-xs text-muted space-y-2">
                <div className="flex items-center gap-2 text-text font-medium">
                  <Info className="w-4 h-4 text-blue shrink-0" />
                  <span>Frontend Prototype Disclosure</span>
                </div>
                <p>
                  As this is an initial frontend prototype without an active backend server connected, your input has been validated locally and was not transmitted to a remote endpoint.
                </p>
                <p className="text-teal font-medium">
                  Direct Inquiries: For live enterprise trials, security questionnaires, or pilot specifications, contact the engineering team directly at{' '}
                  <span className="underline">pilots@gridguard.ai</span>.
                </p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-panel hover:bg-panel/80 text-text border border-line text-xs font-medium transition-colors"
              >
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          ) : (
            /* Accessible Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-card bg-navy-2/95 border border-line p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-5"
            >
              <div className="flex items-center gap-2 text-xs text-teal pb-2 border-b border-line">
                <Shield className="w-4 h-4" />
                <span>Enterprise Technical Review Application</span>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="fullName" className="block text-xs font-semibold text-text">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className={`w-full px-4 py-3 rounded-xl bg-panel border text-sm text-text placeholder:text-muted/60 transition-colors focus:outline-none ${
                    errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-line focus:border-blue'
                  }`}
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Work Email & Organization Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-1.5">
                  <label htmlFor="workEmail" className="block text-xs font-semibold text-text">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="m.vance@powerutility.com"
                    className={`w-full px-4 py-3 rounded-xl bg-panel border text-sm text-text placeholder:text-muted/60 transition-colors focus:outline-none ${
                      errors.workEmail ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-line focus:border-blue'
                    }`}
                    aria-invalid={errors.workEmail ? 'true' : 'false'}
                    aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                  />
                  {errors.workEmail && (
                    <p id="workEmail-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.workEmail}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="organization" className="block text-xs font-semibold text-text">
                    Organization / Facility <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Tri-State Energy Grid"
                    className={`w-full px-4 py-3 rounded-xl bg-panel border text-sm text-text placeholder:text-muted/60 transition-colors focus:outline-none ${
                      errors.organization ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-line focus:border-blue'
                    }`}
                    aria-invalid={errors.organization ? 'true' : 'false'}
                    aria-describedby={errors.organization ? 'org-error' : undefined}
                  />
                  {errors.organization && (
                    <p id="org-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.organization}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Infrastructure Type Dropdown */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="assetType" className="block text-xs font-semibold text-text">
                  Primary Infrastructure Scope
                </label>
                <select
                  id="assetType"
                  value={formData.assetType}
                  onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-panel border border-line text-sm text-text focus:outline-none focus:border-blue"
                >
                  <option value="utility-substations">Electrical Transmission & Substations</option>
                  <option value="manufacturing-plants">Industrial Manufacturing & Process Facilities</option>
                  <option value="compressor-stations">Gas Compression & Pumping Stations</option>
                  <option value="power-generation">Renewable & Conventional Power Generation</option>
                  <option value="facility-operations">Critical Facilities & Data Centers</option>
                </select>
              </div>

              {/* Equipment Concern Textarea */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="equipmentConcern" className="block text-xs font-semibold text-text">
                  Key Assets or Operational Challenges (Optional)
                </label>
                <textarea
                  id="equipmentConcern"
                  rows={3}
                  value={formData.equipmentConcern}
                  onChange={(e) => setFormData({ ...formData, equipmentConcern: e.target.value })}
                  placeholder="e.g. Monitoring aging 115kV transformers for dissolved gas anomalies and oil overheating..."
                  className="w-full px-4 py-3 rounded-xl bg-panel border border-line text-sm text-text placeholder:text-muted/60 focus:outline-none focus:border-blue resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-strong hover:bg-blue disabled:opacity-70 text-white text-base font-semibold transition-all shadow-lg shadow-blue-strong/20 active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Validating Application...</span>
                ) : (
                  <>
                    <span>Submit Early Pilot Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[11px] text-muted text-center pt-2">
                🔒 Technical confidentiality respected. We do not sell or share contact details.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
