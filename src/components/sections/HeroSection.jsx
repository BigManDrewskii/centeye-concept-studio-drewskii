import { useId, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const headingId = useId()

  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section 
      ref={ref} 
      className="section-border bg-background hover:bg-muted/5 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby={headingId}
    >
      {/* UnicornStudio Background - Dark Mode Only */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none hidden dark:flex"
        style={{ 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 0
        }}
      >
        <div 
          data-us-project="ZxScZNvmEFMBcwP2GiFq" 
          style={{
            width: '1440px', 
            height: '900px',
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Content Layer */}
      <div className={`section-content max-w-5xl mx-auto px-6 relative z-10 ${isVisible ? 'animate-hero' : ''}`}>
        <div className="text-center space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
              <Star className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary tracking-wide">24+ YEARS INNOVATION</span>
            </div>
            
            <h1 
              id={headingId}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Vision Inspired by{' '}
              <span className="text-primary">Insect Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Fabless semiconductor company developing ultra-low SWAP vision chips for drones, robotics, and IoT. 
              The only vision sensors designed by practicing roboticists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="h-12 px-8 text-base font-medium touch-action-manipulation hover-lift"
              style={{ minHeight: '48px' }}
            >
              Explore Vision Chips
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="h-12 px-8 text-base font-medium border-border/70 text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:border-border transition-all duration-200 ease-in-out touch-action-manipulation hover-lift"
              style={{ minHeight: '48px' }}
            >
              View Applications
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
