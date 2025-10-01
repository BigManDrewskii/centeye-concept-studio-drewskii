import { useId } from 'react'
import { Cpu } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const TechnologySection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  const specs = [
    { label: "Power Draw", value: "<10mW" },
    { label: "Sensor Mass", value: "2.7g" },
    { label: "Dynamic Range", value: ">120dB" },
    { label: "Pixel Array", value: "136x136" }
  ]

  return (
    <section 
      ref={ref} 
      id={sectionId} 
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300 scroll-mt-14"
      aria-labelledby={headingId}
    >
      <div className="section-content max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className={`space-y-6 ${isVisible ? 'animate-section' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">TECHNOLOGY</span>
              </div>
              <h2 
                id={headingId}
                className="text-3xl font-bold tracking-tight"
              >
                World Leading Neuromorphic Vision
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              For drones, robotics, and IoT requiring autonomous operation in challenging environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {specs.map((spec, index) => (
              <div 
                key={spec.label} 
                className={`bg-card border border-border p-4 text-center hover-lift hover-glow ${
                  isVisible ? `animate-section animate-delay-${index + 1}` : ''
                }`}
              >
                <div 
                  className="text-lg font-bold text-primary mb-1"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {spec.value}
                </div>
                <div className="text-xs text-muted-foreground">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
