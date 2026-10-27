import { Shield } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen bg-navy text-text flex flex-col items-center justify-center p-6 antialiased">
      <div className="w-full max-w-lg rounded-card bg-navy-2 border border-line p-8 shadow-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-panel text-teal border border-line mx-auto">
          <Shield className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel/60 border border-line text-xs font-medium text-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Infrastructure Intelligence
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-text">
            GridGuard AI
          </h1>
          <p className="text-sm font-medium text-blue">
            Know Before It Fails.
          </p>
          <p className="text-sm text-muted">
            React setup and Tailwind CSS v4 design system configured. Ready for landing page implementation.
          </p>
        </div>

        <div className="pt-4 border-t border-line grid grid-cols-3 gap-2 text-xs text-muted">
          <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
            <span className="block font-semibold text-text">React 19</span>
            <span>Framework</span>
          </div>
          <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
            <span className="block font-semibold text-teal">Tailwind v4</span>
            <span>Styling</span>
          </div>
          <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
            <span className="block font-semibold text-blue">Vite</span>
            <span>Bundler</span>
          </div>
        </div>
      </div>
    </main>
  )
}
