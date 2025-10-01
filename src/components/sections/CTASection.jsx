import { useId } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Download } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const CTASection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()
  const sectionId = useId()

  return (
    <section 
      ref={ref} 
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300"
      aria-labelledby={headingId}
    >
      <div className="section-content max-w-4xl mx-auto px-6">
        <div className={`space-y-6 text-center ${isVisible ? 'animate-section' : ''}`}>
            <h2 
              id={headingId}
              className="text-2xl font-semibold tracking-tight text-foreground/90"
            >
              Transform Your Vision System
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
              Join organizations leveraging neuromorphic vision for autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button 
                className="h-9 px-4 text-sm touch-action-manipulation hover-lift"
                style={{ minHeight: '44px' }}
              >
                <Mail className="mr-2 h-3 w-3" aria-hidden="true" />
                Request Consultation
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-9 px-5 text-sm font-medium border-border/70 text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:border-border transition-all duration-200 ease-in-out touch-action-manipulation hover-lift"
                style={{ minHeight: '44px' }}
              >
                <Download className="mr-2 h-3 w-3" aria-hidden="true" />
                Download Specs
              </Button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
