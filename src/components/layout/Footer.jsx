import { Eye } from 'lucide-react'
import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    // Load UnicornStudio script if not already loaded
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

  const footerSections = [
    { 
      title: "Featured Links", 
      links: [
        { name: "Integrated Vision Sensors", href: "#integrated-vision-sensors" },
        { name: "Modular Vision Sensors", href: "#modular-vision-sensors" },
        { name: "Drone Autonomy Suite", href: "#drone-autonomy-suite" },
        { name: "Centeye Drones", href: "#centeye-drones" },
        { name: "Vision Chips", href: "#vision-chips" }
      ]
    },
    { 
      title: "Products / Services", 
      links: [
        { name: "Vision Systems", href: "#products" },
        { name: "Consulting", href: "#services" },
        { name: "Integration", href: "#integration" }
      ]
    },
    { 
      title: "Information", 
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Support", href: "#support" },
        { name: "Resources", href: "#resources" }
      ]
    },
    { 
      title: "Company", 
      links: [
        { name: "About", href: "#about" },
        { name: "Legal", href: "#legal" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ]

  return (
    <footer className="section-border relative overflow-hidden">
      {/* UnicornStudio Background - Dark Mode Only on Desktop/Tablet */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:dark:flex"
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

      {/* Footer Content */}
      <div className="section-content relative z-10">
        <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <a 
              href="/" 
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm hover-scale"
              aria-label="Centeye - Home"
            >
              <div className="w-5 h-5 bg-primary flex items-center justify-center rounded-sm hover-icon-bounce">
                <Eye className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-bold">Centeye</span>
            </a>
            <p className="text-sm text-muted-foreground">
              World leader in ultra-low mass vision systems for robotics and drones
            </p>
            <p className="text-xs text-muted-foreground/70">
              Copyright © 2025 CENTEYE
            </p>
            <p className="text-xs text-muted-foreground/70">
              Powered by Hard Work and Experience
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <nav key={section.title} className="space-y-3" aria-labelledby={`footer-${section.title.toLowerCase()}`}>
              <h4 
                id={`footer-${section.title.toLowerCase()}`}
                className="text-sm font-semibold"
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm touch-action-manipulation hover-subtle-bg px-1 py-1"
                      style={{ minHeight: '24px' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
