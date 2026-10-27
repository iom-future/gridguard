import { ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-navy via-navy-2 to-navy border-b border-line text-xs font-medium py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
        <span className="text-muted text-xs sm:text-sm">
          Multi-sensor anomaly prioritization preview now open for energy & industrial operators.
        </span>
        <a
          href="#early-access"
          className="inline-flex items-center gap-1 text-blue hover:text-blue-strong transition-colors font-medium text-xs sm:text-sm group"
        >
          <span>Request pilot access</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
