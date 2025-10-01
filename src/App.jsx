import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import HeroSection from '@/components/sections/HeroSection.jsx'
import TechnologyFeaturesSection from '@/components/sections/TechnologyFeaturesSection.jsx'
import ApplicationsSection from '@/components/sections/ApplicationsSection.jsx'
import VisionChipsSection from '@/components/sections/VisionChipsSection.jsx'
import IoTSection from '@/components/sections/IoTSection.jsx'
import RecognitionSection from '@/components/sections/RecognitionSection.jsx'
import CTASection from '@/components/sections/CTASection.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TechnologyFeaturesSection />
        <ApplicationsSection />
        <IoTSection />
        <VisionChipsSection />
        <RecognitionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
