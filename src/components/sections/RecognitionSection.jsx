import { useId } from 'react'
import { Award } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const RecognitionSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  const achievements = [
    "MIT Technology Review TR-100 Recognition",
    "First Optical Flow Sensor Flown at Naval Research Lab",
    "Successful Projects with Air Force, DARPA, and Navy",
    "National Science Foundation Research Partnerships",
    "Tier 1 Prime Contractor Collaborations"
  ]

  const competencies = [
    "Nano UAS Autonomy",
    "Mixed-Signal Integrated Circuits", 
    "Vision Sensors",
    "Image Processing",
    "Artificial Intelligence"
  ]

  return (
    <section 
      ref={ref} 
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300"
      aria-labelledby={headingId}
    >
      <div className="section-content max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className={`text-center space-y-6 ${isVisible ? 'animate-section' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">RECOGNITION</span>
              </div>
              <h2 
                id={headingId}
                className="text-3xl font-bold tracking-tight"
              >
                Trusted by Government & Industry
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Proven track record of delivering advanced R&D solutions to government agencies, prime contractors, and research institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className={`text-center ${isVisible ? 'animate-section animate-delay-2' : ''}`}>
              <h3 className="text-lg font-semibold mb-5">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <p 
                    key={achievement}
                    className="text-sm text-muted-foreground leading-6"
                  >
                    {achievement}
                  </p>
                ))}
              </div>
            </div>

            <div className={`text-center ${isVisible ? 'animate-section animate-delay-3' : ''}`}>
              <h3 className="text-lg font-semibold mb-5">Core Competencies</h3>
              <div className="space-y-3">
                {competencies.map((competency, index) => (
                  <p 
                    key={competency}
                    className="text-sm text-muted-foreground leading-6"
                  >
                    {competency}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={`text-center pt-2 ${isVisible ? 'animate-section animate-delay-4' : ''}`}>
            <div className="inline-flex items-center gap-4 text-xs text-muted-foreground/70">
              <span>DCAA Compliant</span>
              <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
              <span>CMMC Implementing</span>
              <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
              <span>CAGE: 1YJE1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecognitionSection
