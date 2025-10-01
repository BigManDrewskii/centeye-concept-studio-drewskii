import { useId } from 'react'
import { Zap, Target, Brain } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const FeaturesSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()

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
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300"
      aria-labelledby={headingId}
    >
      <div className="section-content max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className={`space-y-6 ${isVisible ? 'animate-section' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Brain className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">FEATURES</span>
              </div>
              <h2 
                id={headingId}
                className="text-3xl font-bold tracking-tight"
              >
                Inspired by Real Insect Intelligence
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Our neuromorphic vision technology draws inspiration from insects, 
              engineered for practical autonomous systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <article 
                key={feature.title} 
                className={`bg-background border border-border p-5 hover-lift hover-subtle-bg ${
                  isVisible ? `animate-section animate-delay-${index + 1}` : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center hover-icon-bounce">
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
    </section>
  )
}

export default FeaturesSection
