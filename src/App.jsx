import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import IntelligenceLoop from './sections/IntelligenceLoop'
import Audience from './sections/Audience'
import EarlyAccess from './sections/EarlyAccess'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-text flex flex-col antialiased selection:bg-blue-strong selection:text-white">
      {/* A. Announcement Bar */}
      <AnnouncementBar />

      {/* B. Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* C. Hero Section */}
        <Hero />

        {/* D. Infrastructure Challenge / Problem Section */}
        <Problem />

        {/* E. How GridGuard Works */}
        <HowItWorks />

        {/* F. Capabilities / Platform Features */}
        <Features />

        {/* G. Intelligence Loop */}
        <IntelligenceLoop />

        {/* H. Intended Audiences */}
        <Audience />

        {/* I. Early Access / Pilot CTA Section */}
        <EarlyAccess />

        {/* J. Frequently Answered Questions */}
        <FAQ />
      </main>

      {/* K. Footer */}
      <Footer />
    </div>
  )
}
