import { useId } from 'react'
import { Shield, Wifi, Eye, Zap } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const IoTSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  const features = [
    {
      icon: <Eye className="h-5 w-5" aria-hidden="true" />,
      title: "Environmental Monitoring",
      description: "Visual monitoring for physical analytics and safety applications"
    },
    {
      icon: <Zap className="h-5 w-5" aria-hidden="true" />,
      title: "Ultra Low Power",
      description: "Continuous operation with minimal energy consumption"
    },
    {
      icon: <Shield className="h-5 w-5" aria-hidden="true" />,
      title: "Privacy Preserving",
      description: "Useful data acquisition while guaranteeing individual privacy"
    }
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
                <Wifi className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">INTERNET OF THINGS</span>
              </div>
              <h2 
                id={headingId}
                className="text-3xl font-bold tracking-tight"
              >
                Smart Environmental Monitoring
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ultra-low power sensors for continuous environmental monitoring, delivering actionable insights for public health and safety while preserving individual privacy.
            </p>
          </div>

          <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-section animate-delay-2' : ''}`}>
            <div className="relative aspect-[3/2] overflow-hidden">
              {/* Light theme image */}
              <img 
                src="/src/assets/internet-of-things-banner-light.png"
                alt="IoT environmental monitoring visualization"
                className="w-full h-full object-cover dark:hidden"
              />
              {/* Dark theme image */}
              <img 
                src="/src/assets/internet-of-things-banner-dark.png"
                alt="IoT environmental monitoring visualization"
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article 
                key={feature.title} 
                className={`group relative bg-card/50 border border-border/50 rounded-lg p-8 text-center transition-all duration-300 hover:bg-card hover:border-border hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? `animate-section animate-delay-${index + 3}` : ''
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IoTSection
