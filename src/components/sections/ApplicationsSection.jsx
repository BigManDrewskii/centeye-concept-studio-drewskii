import { useId } from 'react'
import { Target } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const ApplicationsSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  const capabilities = [
    "Autonomous navigation in GPS-denied environments",
    "Obstacle avoidance through narrow openings",
    "Seamless day-to-dark operation",
    "Ultra-lightweight sensors under 1 gram"
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
          <div className={`text-center space-y-8 ${isVisible ? 'animate-section' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Target className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">APPLICATIONS</span>
              </div>
              <h2 
                id={headingId}
                className="text-4xl font-bold tracking-tight"
              >
                Drones and Robotics
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Revolutionary neuromorphic vision enables autonomous drone navigation through challenging environments—from GPS-denied tunnels to seamless day-to-dark transitions with ultra-lightweight sensors under 1 gram.
            </p>
          </div>

          <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-section animate-delay-2' : ''}`}>
            <div className="relative aspect-[3/2] overflow-hidden">
              {/* Light theme image */}
              <img 
                src="/src/assets/img-banner-drone-light.png"
                alt="Drone navigation technology visualization"
                className="w-full h-full object-cover dark:hidden"
              />
              {/* Dark theme image */}
              <img 
                src="/src/assets/img-banner-drone-dark.png"
                alt="Drone navigation technology visualization"
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>
          </div>

          <div className={`${isVisible ? 'animate-section animate-delay-3' : ''}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <article 
                  key={capability}
                  className={`group relative bg-card/50 border border-border/50 rounded-lg p-6 text-center transition-all duration-300 hover:bg-card hover:border-border hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? `animate-section animate-delay-${index + 4}` : ''
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationsSection
