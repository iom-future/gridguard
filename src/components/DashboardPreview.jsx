import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Gauge,
  Layers,
  Search,
  Sliders,
  TrendingUp,
  Zap,
  Info,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
} from 'lucide-react'

const sampleAssets = [
  {
    id: 'TX-402',
    name: 'Substation 4B Step-Down Transformer',
    location: 'Sector 3 · Eastern Substation',
    type: 'Oil-Immersed 115kV/13.8kV',
    riskScore: 84,
    status: 'Elevated Risk',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    primaryAnomaly: 'Thermal Gradient Variance (+8.4°C / 48h)',
    secondarySignal: 'Harmonic Current Distortion (THD 6.8%)',
    recommendedAction: 'Schedule DGA Oil & Infrared Core Inspection within 72h',
    uptime: '99.1%',
    telemetry: [
      { time: '00:00', value: 42, baseline: 40 },
      { time: '04:00', value: 43, baseline: 41 },
      { time: '08:00', value: 46, baseline: 43 },
      { time: '12:00', value: 52, baseline: 45 },
      { time: '16:00', value: 58, baseline: 46 },
      { time: '20:00', value: 64, baseline: 44 },
      { time: 'Now', value: 67, baseline: 43 },
    ],
    metrics: {
      coreTemp: '67.2°C',
      vibration: '2.4 mm/s',
      loadFactor: '88.4%',
      oilDielectric: '32 kV',
    },
  },
  {
    id: 'CP-108',
    name: 'Centrifugal Gas Compressor Stage 2',
    location: 'Plant B · Compression Train 1',
    type: 'Multi-Stage 4,500 RPM',
    riskScore: 72,
    status: 'Attention Required',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    primaryAnomaly: 'Radial Bearing Vibration Drift (1X Peak)',
    secondarySignal: 'Lube Oil Pressure Drop (-1.2 bar)',
    recommendedAction: 'Inspect Thrust Bearing Clearance at next shift change',
    uptime: '97.8%',
    telemetry: [
      { time: '00:00', value: 2.1, baseline: 2.0 },
      { time: '04:00', value: 2.2, baseline: 2.0 },
      { time: '08:00', value: 2.5, baseline: 2.1 },
      { time: '12:00', value: 3.1, baseline: 2.1 },
      { time: '16:00', value: 3.6, baseline: 2.2 },
      { time: '20:00', value: 4.2, baseline: 2.1 },
      { time: 'Now', value: 4.5, baseline: 2.0 },
    ],
    metrics: {
      coreTemp: '84.0°C',
      vibration: '4.5 mm/s',
      loadFactor: '92.1%',
      oilDielectric: '41 kV',
    },
  },
  {
    id: 'SW-904',
    name: 'Feeder Bus 12 Gas-Insulated Switchgear',
    location: 'Grid Interconnect Alpha',
    type: 'SF6 36kV Medium Voltage',
    riskScore: 28,
    status: 'Normal Operation',
    statusColor: 'text-teal bg-teal/10 border-teal/20',
    primaryAnomaly: 'None (Within Standard Envelope)',
    secondarySignal: 'Nominal SF6 Pressure Tracking',
    recommendedAction: 'Standard 90-day Routine Diagnostic Scheduled',
    uptime: '99.9%',
    telemetry: [
      { time: '00:00', value: 12, baseline: 12 },
      { time: '04:00', value: 11, baseline: 12 },
      { time: '08:00', value: 13, baseline: 13 },
      { time: '12:00', value: 14, baseline: 14 },
      { time: '16:00', value: 13, baseline: 13 },
      { time: '20:00', value: 12, baseline: 12 },
      { time: 'Now', value: 12, baseline: 12 },
    ],
    metrics: {
      coreTemp: '34.5°C',
      vibration: '0.8 mm/s',
      loadFactor: '64.2%',
      oilDielectric: 'N/A (SF6)',
    },
  },
]

export default function DashboardPreview() {
  const [selectedAssetId, setSelectedAssetId] = useState('TX-402')
  // 0: Main Telemetry Deep-Dive, 1: Prioritized Risk Queue
  const [carouselSlide, setCarouselSlide] = useState(0)

  const currentAsset = sampleAssets.find((a) => a.id === selectedAssetId) || sampleAssets[0]

  return (
    <div className="w-full rounded-card bg-navy-2/95 border border-line shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Dashboard Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-line bg-panel/60">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal/80" />
          </div>
          <div className="h-4 w-px bg-line" />
          <span className="text-xs font-semibold tracking-wide text-text flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-teal" />
            GridGuard Operational Intelligence Console
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-navy/60 border border-line text-[11px] text-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Telemetry Stream Live
          </span>
          <span className="text-[11px] text-muted/80">Illustrative Platform View</span>
        </div>
      </div>

      {/* Fleet KPI Row - Kept strictly in a single compact row across all screen sizes */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-3 p-2.5 sm:p-4 border-b border-line bg-navy/40">
        <div className="p-2 sm:p-3 rounded-xl bg-panel/40 border border-line">
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted mb-0.5">
            <span className="truncate">Assets</span>
            <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue shrink-0 ml-1" />
          </div>
          <div className="text-sm sm:text-xl font-bold text-text">1,428</div>
          <div className="text-[9px] sm:text-[11px] text-teal mt-0.5 truncate flex items-center gap-0.5 sm:gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
            <span>98.4% Nominal</span>
          </div>
        </div>

        <div className="p-2 sm:p-3 rounded-xl bg-panel/40 border border-line">
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted mb-0.5">
            <span className="truncate">Critical Queue</span>
            <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0 ml-1" />
          </div>
          <div className="text-sm sm:text-xl font-bold text-amber-400">3</div>
          <div className="text-[9px] sm:text-[11px] text-muted mt-0.5 truncate">High Risk</div>
        </div>

        <div className="p-2 sm:p-3 rounded-xl bg-panel/40 border border-line">
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted mb-0.5">
            <span className="truncate">Early Drift</span>
            <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue shrink-0 ml-1" />
          </div>
          <div className="text-sm sm:text-xl font-bold text-text">14</div>
          <div className="text-[9px] sm:text-[11px] text-blue mt-0.5 truncate">Tracked</div>
        </div>

        <div className="p-2 sm:p-3 rounded-xl bg-panel/40 border border-line">
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted mb-0.5">
            <span className="truncate">Avoided Outages</span>
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal shrink-0 ml-1" />
          </div>
          <div className="text-sm sm:text-xl font-bold text-teal">24</div>
          <div className="text-[9px] sm:text-[11px] text-muted mt-0.5 truncate">Intervened</div>
        </div>
      </div>

      {/* Mobile/Tablet Carousel Navigation Bar (Hidden on desktop) */}
      <div className="flex lg:hidden items-center justify-between px-3 sm:px-5 py-2.5 bg-panel/70 border-b border-line text-xs">
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-navy/90 border border-line">
          <button
            type="button"
            onClick={() => setCarouselSlide(0)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              carouselSlide === 0
                ? 'bg-blue text-white shadow-xs'
                : 'text-muted hover:text-text'
            }`}
          >
            Telemetry View
          </button>
          <button
            type="button"
            onClick={() => setCarouselSlide(1)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              carouselSlide === 1
                ? 'bg-blue text-white shadow-xs'
                : 'text-muted hover:text-text'
            }`}
          >
            <span>Risk Queue</span>
            <span className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-[11px] text-muted/80">Swipe / Switch:</span>
          <button
            type="button"
            onClick={() => setCarouselSlide(carouselSlide === 0 ? 1 : 0)}
            className="p-1 rounded-md bg-navy border border-line text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Previous view"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-text">
            {carouselSlide + 1}/2
          </span>
          <button
            type="button"
            onClick={() => setCarouselSlide(carouselSlide === 0 ? 1 : 0)}
            className="p-1 rounded-md bg-navy border border-line text-muted hover:text-text transition-colors cursor-pointer"
            aria-label="Next view"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Body:
          - Desktop (lg+): Both panels side-by-side (Left: Main Telemetry Deep-Dive, Right: Risk Queue)
          - Mobile/Tablet (<lg): Carousel views between Slide 0 (Telemetry) and Slide 1 (Risk Queue)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:divide-x divide-line">
        {/* PANEL 1 (DESKTOP LEFT, 7 cols): Selected Asset Deep-Dive & Telemetry */}
        <div
          className={`p-4 sm:p-5 flex-col justify-between gap-5 bg-navy/30 lg:col-span-7 ${
            carouselSlide === 0 ? 'flex' : 'hidden lg:flex'
          }`}
        >
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-line">
              <div>
                <div className="text-xs text-teal font-medium">{currentAsset.type}</div>
                <h3 className="text-base sm:text-lg font-bold text-text">
                  {currentAsset.name}
                </h3>
                <p className="text-xs text-muted">{currentAsset.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted">Calculated Risk:</span>
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${currentAsset.statusColor}`}
                >
                  {currentAsset.riskScore} · {currentAsset.status}
                </span>
              </div>
            </div>

            {/* Telemetry Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
                <div className="text-[10px] text-muted uppercase tracking-wide">Core Temp</div>
                <div className="text-sm font-bold text-text mt-0.5">
                  {currentAsset.metrics.coreTemp}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
                <div className="text-[10px] text-muted uppercase tracking-wide">Vibration</div>
                <div className="text-sm font-bold text-text mt-0.5">
                  {currentAsset.metrics.vibration}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
                <div className="text-[10px] text-muted uppercase tracking-wide">Load Factor</div>
                <div className="text-sm font-bold text-text mt-0.5">
                  {currentAsset.metrics.loadFactor}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-panel/50 border border-line">
                <div className="text-[10px] text-muted uppercase tracking-wide">Dielectric</div>
                <div className="text-sm font-bold text-text mt-0.5">
                  {currentAsset.metrics.oilDielectric}
                </div>
              </div>
            </div>

            {/* SVG Trend Sparkline Chart */}
            <div className="mt-4 p-3.5 rounded-xl bg-panel/40 border border-line">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-text flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue" />
                  Telemetry Drift vs. Dynamic Baseline (Last 24h)
                </span>
                <span className="text-[11px] text-muted flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2.5 h-0.5 bg-blue" /> Current Signal
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2.5 h-0.5 bg-muted/50 border-dashed" /> Expected Baseline
                  </span>
                </span>
              </div>

              {/* Simplified SVG Chart */}
              <div className="h-28 w-full mt-2 relative">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 90"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6b9cff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6b9cff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                  {/* Baseline path (dashed) */}
                  <path
                    d="M 0 65 Q 100 62 200 64 T 400 63"
                    fill="none"
                    stroke="#a8b7c8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />

                  {/* Signal Area and Line */}
                  <path
                    d={
                      currentAsset.riskScore > 50
                        ? 'M 0 65 Q 100 60 200 48 T 400 18 L 400 90 L 0 90 Z'
                        : 'M 0 65 Q 100 64 200 63 T 400 64 L 400 90 L 0 90 Z'
                    }
                    fill="url(#blueGradient)"
                  />
                  <path
                    d={
                      currentAsset.riskScore > 50
                        ? 'M 0 65 Q 100 60 200 48 T 400 18'
                        : 'M 0 65 Q 100 64 200 63 T 400 64'
                    }
                    fill="none"
                    stroke="#6b9cff"
                    strokeWidth="2.5"
                  />

                  {/* Current Reading End Point Dot (Static, no pulsing animation) */}
                  <circle
                    cx="396"
                    cy={currentAsset.riskScore > 50 ? 18 : 64}
                    r="3.5"
                    fill="#55d3bd"
                  />
                </svg>

                <div className="flex justify-between text-[10px] text-muted mt-1 px-1">
                  <span>-24h (T-24)</span>
                  <span>-16h</span>
                  <span>-8h</span>
                  <span>-4h</span>
                  <span className="text-teal font-semibold">Current (Real-Time)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Callout Box */}
          <div className="p-3.5 rounded-xl bg-panel border border-line/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs">
              <div className="text-muted font-medium flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-teal" />
                Prescribed Field Action:
              </div>
              <div className="text-text font-semibold mt-0.5">
                {currentAsset.recommendedAction}
              </div>
            </div>
            <a
              href="#early-access"
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue hover:bg-blue-strong text-white text-xs font-semibold transition-colors"
            >
              <span>Dispatch Ticket</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* PANEL 2 (DESKTOP RIGHT, 5 cols): Prioritized Risk Queue */}
        <div
          className={`p-4 sm:p-5 flex-col gap-3 lg:col-span-5 ${
            carouselSlide === 1 ? 'flex' : 'hidden lg:flex'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Prioritized Risk Queue
            </span>
            <span className="text-[11px] text-muted">Click asset to inspect</span>
          </div>

          <div className="space-y-2.5">
            {sampleAssets.map((asset) => {
              const isSelected = asset.id === selectedAssetId
              return (
                <button
                  key={asset.id}
                  type="button"
                  onClick={() => {
                    setSelectedAssetId(asset.id)
                    // On mobile, clicking switches to telemetry view
                    setCarouselSlide(0)
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-panel border-blue/60 shadow-md ring-1 ring-blue/30'
                      : 'bg-panel/30 border-line hover:bg-panel/60 hover:border-line/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-text">{asset.id}</span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${asset.statusColor}`}
                        >
                          {asset.status}
                        </span>
                      </div>
                      <div className="text-xs text-text/90 font-medium mt-1 line-clamp-1">
                        {asset.name}
                      </div>
                      <div className="text-[11px] text-muted mt-0.5">{asset.location}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-muted">Risk Index</div>
                      <div
                        className={`text-base font-bold ${
                          asset.riskScore > 75
                            ? 'text-red-400'
                            : asset.riskScore > 50
                            ? 'text-amber-400'
                            : 'text-teal'
                        }`}
                      >
                        {asset.riskScore}/100
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-line/50 flex items-center justify-between text-[11px] text-muted">
                    <span className="line-clamp-1 text-muted/90">
                      ⚡ {asset.primaryAnomaly}
                    </span>
                    <span className="text-blue flex items-center gap-0.5 shrink-0 ml-1 font-medium">
                      <span>Inspect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Quick Tip for Carousel View */}
          <div className="lg:hidden p-3 rounded-lg bg-panel/40 border border-line text-[11px] text-muted text-center">
            Tap any asset above to switch to its live telemetry analysis.
          </div>
        </div>
      </div>
    </div>
  )
}
