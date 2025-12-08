'use client';

interface CircularLogoProps {
  size?: number;
  className?: string;
}

export default function CircularLogo({ size = 400, className = '' }: CircularLogoProps) {
  // Create the repeating text for a full circle
  const repeatText = 'dgital addis . ';
  const fullCircleText = repeatText.repeat(8); // Repeat enough to fill the circle

  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        width: size, 
        height: size,
      }}
    >
      <style jsx>{`
        @keyframes smoothRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotating-text {
          animation: smoothRotate 25s linear infinite;
          transform-origin: 250px 250px;
          will-change: transform;
        }
      `}</style>
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Digital Addis logo"
        className="w-full h-full"
      >
        <defs>
          {/* Path for outer text - full circle */}
          <path
            id="outerCirclePath"
            d="M250,45 a205,205 0 1,1 0,410 a205,205 0 1,1 0,-410"
            fill="none"
          />
        </defs>

        {/* Big filled circle */}
        <circle cx="250" cy="250" r="180" fill="#ddfe00" />

        {/* GROUP: outer circular text (rotating) - WHITE text */}
        <g className="rotating-text">
          <text
            fontSize="17"
            fill="#ffffff"
            fontFamily="'Inter', 'Poppins', sans-serif"
            fontWeight="600"
            style={{ letterSpacing: '0.06em' }}
          >
            <textPath 
              href="#outerCirclePath" 
              startOffset="0%"
              textLength="1288"
              lengthAdjust="spacingAndGlyphs"
            >
              {fullCircleText}
            </textPath>
          </text>
        </g>

        {/* CENTER: letters "DGAITL" - contained within circle */}
        <g fill="#1a1a1a" fontFamily="'Poppins', 'Inter', sans-serif" fontWeight="900">
          {/* Top row: D G A - safely inside circle */}
          <text x="115" y="210" fontSize="105" transform="rotate(-18 115 210)">D</text>
          <text x="200" y="180" fontSize="115" transform="rotate(5 200 180)">G</text>
          <text x="280" y="215" fontSize="105" transform="rotate(22 280 215)">A</text>
          {/* Bottom row: I T L - safely inside circle */}
          <text x="145" y="345" fontSize="105" transform="rotate(-8 145 345)">I</text>
          <text x="210" y="360" fontSize="100" transform="rotate(0 210 360)">T</text>
          <text x="280" y="350" fontSize="95" transform="rotate(15 280 350)">L</text>
        </g>
      </svg>
    </div>
  );
}

