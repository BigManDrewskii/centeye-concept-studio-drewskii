import { useId } from 'react'
import { Cpu, Zap, Target, Brain } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const TechnologyFeaturesSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  const specs = [
    { label: "Power Draw", value: "<10mW" },
    { label: "Sensor Mass", value: "2.7g" },
    { label: "Dynamic Range", value: ">120dB" },
    { label: "Pixel Array", value: "136x136" }
  ]

  const features = [
    {
      icon: <Zap className="h-5 w-5" aria-hidden="true" />,
      title: "Ultra Low SWAP",
      description: "Size, Weight, And Power optimization for nano drones"
    },
    {
      icon: <Target className="h-5 w-5" aria-hidden="true" />,
      title: "Designed for Small Drones",
      description: "Only sensors designed by practicing roboticists"
    },
    {
      icon: <Brain className="h-5 w-5" aria-hidden="true" />,
      title: "Natural Intelligence",
      description: "Biology inspiration + neural networks + practical engineering"
    }
  ]

  return (
    <section 
      ref={ref} 
      id={sectionId} 
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300 scroll-mt-14"
      aria-labelledby={headingId}
    >
      <div className="section-content max-w-5xl mx-auto px-6">
        <div className="space-y-10">
          <div className={`text-center space-y-6 ${isVisible ? 'animate-section' : ''}`}>
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
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Inspired by real insect intelligence, our neuromorphic vision technology delivers unprecedented performance for drones, robotics, and IoT requiring autonomous operation in challenging environments.
            </p>
          </div>

          {/* Technical Specifications */}
          <div className={`${isVisible ? 'animate-section animate-delay-1' : ''}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specs.map((spec, index) => (
                <div 
                  key={spec.label} 
                  className={`bg-background border border-border p-4 text-center hover-lift hover-glow ${
                    isVisible ? `animate-section animate-delay-${index + 2}` : ''
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

          {/* Key Features */}
          <div className={`${isVisible ? 'animate-section animate-delay-2' : ''}`}>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <article 
                  key={feature.title} 
                  className={`bg-background border border-border p-6 hover-lift hover-subtle-bg ${
                    isVisible ? `animate-section animate-delay-${index + 6}` : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center hover-icon-bounce">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyFeaturesSection
