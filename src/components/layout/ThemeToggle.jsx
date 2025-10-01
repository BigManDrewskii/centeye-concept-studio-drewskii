import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or default to system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    // Apply theme on mount and when it changes
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-8 w-8 p-0 touch-action-manipulation"
      style={{ minHeight: '44px', minWidth: '44px' }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-3 w-3" aria-hidden="true" />
      ) : (
        <Moon className="h-3 w-3" aria-hidden="true" />
      )}
    </Button>
  )
}
