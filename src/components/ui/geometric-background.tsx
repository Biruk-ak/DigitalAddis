'use client';

/**
 * GeometricBackground Component
 * Creates a 3D cube-like geometric pattern background
 * Uses pure CSS animations for optimal performance
 */
export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient layer - Reduced opacity to show 3D cubes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-black/20 dark:via-transparent dark:to-black/10"></div>

      {/* 3D Cube Pattern Layer 1 - Large cubes in background */}
      <div className="absolute inset-0">
        {/* Cube 1 - Top Left */}
        <div
          className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-40 dark:opacity-30"
          style={{
            transform: 'perspective(1000px) rotateX(60deg) rotateY(-45deg) translateZ(0)',
            transformStyle: 'preserve-3d',
            animation: 'floatCube1 20s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(221, 254, 0, 0.35) 0%, rgba(221, 254, 0, 0.15) 50%, transparent 70%),
                linear-gradient(225deg, rgba(221, 254, 0, 0.25) 0%, rgba(221, 254, 0, 0.1) 50%, transparent 70%)
              `,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/50 dark:border-[#ddfe00]/40"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 8px rgba(221, 254, 0, 0.3))',
            }}
          />
        </div>

        {/* Cube 2 - Top Right */}
        <div
          className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 opacity-35 dark:opacity-25"
          style={{
            transform: 'perspective(1000px) rotateX(60deg) rotateY(45deg) translateZ(0)',
            transformStyle: 'preserve-3d',
            animation: 'floatCube2 25s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg, rgba(221, 254, 0, 0.32) 0%, rgba(221, 254, 0, 0.15) 50%, transparent 70%),
                linear-gradient(315deg, rgba(221, 254, 0, 0.22) 0%, rgba(221, 254, 0, 0.1) 50%, transparent 70%)
              `,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/45 dark:border-[#ddfe00]/35"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 8px rgba(221, 254, 0, 0.3))',
            }}
          />
        </div>

        {/* Cube 3 - Bottom Left */}
        <div
          className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] opacity-38 dark:opacity-28"
          style={{
            transform: 'perspective(1000px) rotateX(-60deg) rotateY(-45deg) translateZ(0)',
            transformStyle: 'preserve-3d',
            animation: 'floatCube3 22s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(225deg, rgba(221, 254, 0, 0.34) 0%, rgba(221, 254, 0, 0.16) 50%, transparent 70%),
                linear-gradient(135deg, rgba(221, 254, 0, 0.24) 0%, rgba(221, 254, 0, 0.12) 50%, transparent 70%)
              `,
              clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/48 dark:border-[#ddfe00]/38"
            style={{
              clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)',
              filter: 'drop-shadow(0 0 8px rgba(221, 254, 0, 0.3))',
            }}
          />
        </div>

        {/* Cube 4 - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-36 dark:opacity-26"
          style={{
            transform: 'perspective(1000px) rotateX(-60deg) rotateY(45deg) translateZ(0)',
            transformStyle: 'preserve-3d',
            animation: 'floatCube4 24s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(315deg, rgba(221, 254, 0, 0.33) 0%, rgba(221, 254, 0, 0.15) 50%, transparent 70%),
                linear-gradient(45deg, rgba(221, 254, 0, 0.23) 0%, rgba(221, 254, 0, 0.1) 50%, transparent 70%)
              `,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/46 dark:border-[#ddfe00]/36"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 8px rgba(221, 254, 0, 0.3))',
            }}
          />
        </div>
      </div>

      {/* Medium cubes - Center area */}
      <div className="absolute inset-0">
        {/* Center Left Cube */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 opacity-30 dark:opacity-22"
          style={{
            transform: 'perspective(800px) rotateX(45deg) rotateY(-30deg) translateZ(0)',
            animation: 'floatCube5 18s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(221, 254, 0, 0.28) 0%, rgba(221, 254, 0, 0.14) 50%, transparent 70%),
                linear-gradient(225deg, rgba(221, 254, 0, 0.18) 0%, rgba(221, 254, 0, 0.08) 50%, transparent 70%)
              `,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/40 dark:border-[#ddfe00]/30"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 6px rgba(221, 254, 0, 0.25))',
            }}
          />
        </div>

        {/* Center Right Cube */}
        <div
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 opacity-32 dark:opacity-24"
          style={{
            transform: 'perspective(800px) rotateX(45deg) rotateY(30deg) translateZ(0)',
            animation: 'floatCube6 19s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg, rgba(221, 254, 0, 0.3) 0%, rgba(221, 254, 0, 0.15) 50%, transparent 70%),
                linear-gradient(315deg, rgba(221, 254, 0, 0.2) 0%, rgba(221, 254, 0, 0.1) 50%, transparent 70%)
              `,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/42 dark:border-[#ddfe00]/32"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 6px rgba(221, 254, 0, 0.25))',
            }}
          />
        </div>
      </div>

      {/* Small accent cubes */}
      <div className="absolute inset-0">
        {/* Small cube 1 */}
        <div
          className="absolute top-1/4 left-1/3 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-28 dark:opacity-20"
          style={{
            transform: 'perspective(600px) rotateX(50deg) rotateY(-20deg) translateZ(0)',
            animation: 'floatCube7 16s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/38 dark:border-[#ddfe00]/28"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 5px rgba(221, 254, 0, 0.2))',
            }}
          />
        </div>

        {/* Small cube 2 */}
        <div
          className="absolute bottom-1/4 right-1/3 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 opacity-30 dark:opacity-22"
          style={{
            transform: 'perspective(600px) rotateX(-50deg) rotateY(20deg) translateZ(0)',
            animation: 'floatCube8 17s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-0 border-2 border-[#ddfe00]/40 dark:border-[#ddfe00]/30"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 5px rgba(221, 254, 0, 0.2))',
            }}
          />
        </div>
      </div>

      {/* Soft light streaks */}
      <div className="absolute inset-0">
        {/* Diagonal streak 1 */}
        <div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ddfe00]/40 to-transparent"
          style={{
            transform: 'rotate(25deg) translateX(-50%)',
            transformOrigin: 'left center',
            animation: 'streakMove1 15s ease-in-out infinite',
          }}
        />
        {/* Diagonal streak 2 */}
        <div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#ddfe00]/35 to-transparent"
          style={{
            transform: 'rotate(-25deg) translateX(50%)',
            transformOrigin: 'right center',
            animation: 'streakMove2 18s ease-in-out infinite',
          }}
        />
      </div>

    </div>
  );
}

