# Centeye Redesign - Neuromorphic Vision Technology

A modern, professional redesign of the Centeye website showcasing their neuromorphic vision technology and fabless semiconductor expertise.

## Project Overview

This redesign transforms Centeye's web presence from their current amateur design to a sophisticated showcase that matches their 24+ years of innovation and government validation. The project implements a premium design system while accurately reflecting their positioning as a fabless semiconductor company specializing in neuromorphic vision chips.

## Features

### Design System
- **OKLCH Color Scheme**: Exact color values implementing the specified theme
- **Light/Dark Mode**: Seamless theme switching with proper contrast ratios
- **Typography**: Inter font with clean hierarchy and professional spacing
- **Layout**: 1200px max-width container with floating header design
- **Responsive**: Mobile-first approach with proper breakpoints

### Interactive Elements
- **Neuromorphic Grid Animation**: 16x16 pixel grid with 5 rotating patterns
- **Theme Toggle**: Smooth transitions between light and dark modes
- **Hover States**: Professional micro-interactions throughout
- **Smooth Scrolling**: Enhanced navigation experience

### Content Sections
1. **Hero Section**: Main value proposition with animated neuromorphic grid
2. **Insect Intelligence**: Three key differentiators with icons
3. **SWAP Technology**: Technical specifications and capabilities
4. **Applications**: Drones, IoT, and defense system use cases
5. **Vision Chips**: Fabless semiconductor positioning
6. **Recognition**: MIT and government validation
7. **Call-to-Action**: Consultation and specification download
8. **Footer**: Complete navigation and company information

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React for professional iconography
- **Components**: shadcn/ui for consistent design system
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd centeye-redesign

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
# Start development server with host access
npm run dev -- --host

# Build for production
npm run build

# Preview production build
npm run preview
```

## Color System

The design implements exact OKLCH color values for consistent color reproduction:

### Light Mode
- Background: `oklch(1.0000 0 0)`
- Foreground: `oklch(0.1990 0.0220 292.6244)`
- Primary: `oklch(0.7803 0.1294 32.2990)` (Coral/Orange)
- Secondary: `oklch(0.9625 0.0149 260.7297)`

### Dark Mode
- Background: `oklch(0.1776 0 0)`
- Foreground: `oklch(0.9625 0.0149 260.7297)`
- Primary: `oklch(0.7803 0.1294 32.2990)` (Consistent across themes)
- Secondary: `oklch(0.2824 0.0282 260.7297)`

## Animation System

### Neuromorphic Grid
The centerpiece animation features a 16x16 pixel grid that cycles through 5 distinct patterns:

1. **Random Clusters**: Simulated neural activity with random activation
2. **Wave Patterns**: Flowing sine waves across the grid
3. **Expanding Circles**: Concentric circles emanating from center
4. **Grid Lines**: Structured horizontal and vertical patterns
5. **Diagonal Flow**: Corner-to-corner flowing patterns

Each pattern updates every 100ms with transitions every 2 seconds, creating a dynamic representation of neuromorphic processing.

## Performance Optimizations

- **CSS Transforms**: Hardware-accelerated animations using transform and opacity
- **Reduced Motion**: Respects `prefers-reduced-motion` accessibility setting
- **Lazy Loading**: Optimized asset loading for faster initial page load
- **Tree Shaking**: Unused code elimination in production builds

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility support
- **Color Contrast**: WCAG 2.1 AA compliant contrast ratios
- **Screen Reader**: Compatible with assistive technologies

## Content Strategy

The redesign maintains all verified content from the original Centeye website while improving presentation and organization:

- **Technical Accuracy**: Precise specifications and capabilities
- **Company Positioning**: Fabless semiconductor focus, not primarily robotics
- **Credibility Indicators**: MIT recognition and government validation
- **Professional Tone**: Aerospace industry standard communication

## Deployment

The project is configured for deployment on modern hosting platforms:

```bash
# Build production version
npm run build

# Deploy to hosting platform
# (Follow platform-specific deployment instructions)
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Centeye, Inc. All rights reserved.

## Contact

For questions about this redesign project, please contact the development team.

---

**Note**: This redesign demonstrates modern web development practices while accurately representing Centeye's neuromorphic vision technology and semiconductor expertise.
