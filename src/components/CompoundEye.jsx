import { useState, useEffect, useMemo } from 'react'

const CompoundEye = ({ className = "", size = 300 }) => {
  const [time, setTime] = useState(0)
  const [waveCenter, setWaveCenter] = useState({ x: 0.5, y: 0.5 })
  const [detectionMode, setDetectionMode] = useState(0) // 0: waves, 1: motion detection, 2: edge detection

  // Generate hexagonal grid positions
  const hexagons = useMemo(() => {
    const hexes = []
    const hexRadius = size / 40 // Size of each hexagon
    const hexWidth = hexRadius * 2
    const hexHeight = hexRadius * Math.sqrt(3)
    const rows = Math.floor(size / (hexHeight * 0.75)) + 2
    const cols = Math.floor(size / hexWidth) + 2
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth + (row % 2) * hexRadius - hexWidth
        const y = row * hexHeight * 0.75 - hexHeight
        
        // Only include hexagons within circular boundary (compound eye shape)
        const centerX = size / 2
        const centerY = size / 2
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        
        if (distance < size / 2.2) {
          hexes.push({
            id: `${row}-${col}`,
            x,
            y,
            row,
            col,
            distance: distance / (size / 2),
            angle: Math.atan2(y - centerY, x - centerX)
          })
        }
      }
    }
    return hexes
  }, [size])

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1)
      
      // Change wave center occasionally
      if (Math.random() < 0.02) {
        setWaveCenter({
          x: 0.3 + Math.random() * 0.4,
          y: 0.3 + Math.random() * 0.4
        })
      }
      
      // Change detection mode every 4 seconds
      if (Math.random() < 0.008) {
        setDetectionMode(prev => (prev + 1) % 3)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Calculate hexagon activation based on current mode
  const getHexagonIntensity = (hex) => {
    const centerX = waveCenter.x * size
    const centerY = waveCenter.y * size
    const distance = Math.sqrt((hex.x - centerX) ** 2 + (hex.y - centerY) ** 2)
    
    switch (detectionMode) {
      case 0: // Wave patterns
        const wave1 = Math.sin(distance * 0.02 - time * 2) * 0.5 + 0.5
        const wave2 = Math.sin(hex.angle * 3 + time) * 0.3 + 0.3
        return Math.max(0, Math.min(1, wave1 * wave2))
        
      case 1: // Motion detection (radial patterns)
        const motionWave = Math.sin(distance * 0.03 - time * 3) * 0.6 + 0.4
        const radialPattern = Math.sin(hex.angle * 4 + time * 0.5) * 0.2 + 0.8
        return Math.max(0, Math.min(1, motionWave * radialPattern))
        
      case 2: // Edge detection (geometric patterns)
        const edgeX = Math.sin(hex.x * 0.02 + time) * 0.4 + 0.6
        const edgeY = Math.sin(hex.y * 0.02 + time * 1.2) * 0.4 + 0.6
        return Math.max(0, Math.min(1, edgeX * edgeY))
        
      default:
        return 0.1
    }
  }

  // Create hexagon path
  const createHexagonPath = (centerX, centerY, radius) => {
    const points = []
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      points.push(`${x},${y}`)
    }
    return `M ${points.join(' L ')} Z`
  }

  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Background circle for compound eye shape */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2.2}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
        
        {/* Hexagonal ommatidia */}
        {hexagons.map((hex) => {
          const intensity = getHexagonIntensity(hex)
          const hexRadius = size / 45
          
          return (
            <g key={hex.id}>
              {/* Hexagon shape */}
              <path
                d={createHexagonPath(hex.x, hex.y, hexRadius)}
                fill={`hsl(${20 + intensity * 40}, ${60 + intensity * 40}%, ${20 + intensity * 60}%)`}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity={0.3 + intensity * 0.7}
                className="transition-all duration-100"
              />
              
              {/* Central dot for high activity */}
              {intensity > 0.7 && (
                <circle
                  cx={hex.x}
                  cy={hex.y}
                  r={hexRadius * 0.3}
                  fill="currentColor"
                  opacity={intensity}
                  className="animate-pulse"
                />
              )}
            </g>
          )
        })}
        
        {/* Processing indicators */}
        <g opacity="0.6">
          {/* Central processing core */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r="3"
            fill="currentColor"
            opacity={0.8}
          >
            <animate
              attributeName="r"
              values="2;4;2"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Processing rings */}
          {[0.3, 0.5, 0.7].map((radius, i) => (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={size * radius / 2.2}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={0.2}
              strokeDasharray="2,4"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={`0 ${size/2} ${size/2};360 ${size/2} ${size/2}`}
                dur={`${4 + i * 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
      
      {/* Mode indicator */}
      <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">
        {detectionMode === 0 && "Wave Processing"}
        {detectionMode === 1 && "Motion Detection"}
        {detectionMode === 2 && "Edge Detection"}
      </div>
    </div>
  )
}

export default CompoundEye
