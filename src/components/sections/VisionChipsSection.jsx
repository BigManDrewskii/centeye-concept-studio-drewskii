import { useId } from 'react'
import { Cpu } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const VisionChipsSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

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
                <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary tracking-wide">VISION CHIPS</span>
              </div>
              <h2 
                id={headingId}
                className="text-3xl font-bold tracking-tight"
              >
                Advanced Semiconductor Solutions
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Fabless semiconductor company specializing in vision chip architectures that bridge critical gaps in the image sensor industry.
            </p>
          </div>

          <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-section animate-delay-2' : ''}`}>
            <div className="relative">
              <img 
                src="/src/assets/size-comparison.png"
                alt="Vision chip size comparison"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionChipsSection
