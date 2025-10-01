import { useState, useId } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Eye, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuId = useId()
  
  const navigationItems = [
    { name: 'Technology', href: '#technology' },
    { name: 'Applications', href: '#applications' },
    { name: 'Vision Chips', href: '#vision-chips' },
    { name: 'Company', href: '#company' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="section-border relative">
      <div className="section-content">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm hover-scale"
            aria-label="Centeye - Home"
          >
            <div className="w-7 h-7 bg-primary flex items-center justify-center hover-icon-bounce">
              <Eye className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Centeye</span>
          </a>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm hover-subtle-bg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              className="h-9 px-4 text-sm font-medium touch-action-manipulation hover-lift"
              style={{ minHeight: '44px' }}
            >
              Contact
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0 touch-action-manipulation relative z-50"
              style={{ minHeight: '44px', minWidth: '44px' }}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls={mobileMenuId}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <button 
          type="button"
          className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm border-0 p-0 cursor-default"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsMenuOpen(false)
            }
          }}
          aria-label="Close menu"
        >
          <div 
            id={mobileMenuId}
            className="absolute top-[72px] left-0 right-0 mx-4 mt-2 bg-background border border-border rounded-lg shadow-lg animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Navigation menu"
          >
            <nav className="p-4">
              <div className="space-y-1">
                {navigationItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 rounded-md touch-action-manipulation"
                    style={{ 
                      minHeight: '44px',
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'both'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </button>
      )}
    </header>
  )
}

export default Header
