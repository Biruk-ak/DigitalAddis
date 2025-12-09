'use client';

import Image from 'next/image';

interface CircularLogoProps {
  size?: number;
  className?: string;
}

export default function CircularLogo({ size = 400, className = '' }: CircularLogoProps) {
  const repeatText = 'digital addis . ';
  const fullCircleText = repeatText.repeat(8);

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
          transform-origin: center center;
          will-change: transform;
        }
      `}</style>
      
      {/* SVG for rotating text around the circle */}
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <path
            id="outerCirclePath"
            d="M250,40 a210,210 0 1,1 0,420 a210,210 0 1,1 0,-420"
            fill="none"
          />
        </defs>

        {/* Rotating text around the circle */}
        <g className="rotating-text">
          <text
            fontSize="17"
            fill="#ffffff"
            fontFamily="'Inter', 'Poppins', sans-serif"
            fontWeight="600"
            style={{ letterSpacing: '0.08em' }}
          >
            <textPath 
              href="#outerCirclePath" 
              startOffset="0%"
              textLength="1320"
              lengthAdjust="spacingAndGlyphs"
            >
              {fullCircleText}
            </textPath>
          </text>
        </g>
      </svg>

      {/* Center logo image (static) */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: size * 0.12 }}
      >
        <Image
          src="/newda.png"
          alt="Digital Addis Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
