'use client';

import React, { useEffect, useRef } from 'react';

interface EarthProps {
  scale?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

const Earth: React.FC<EarthProps> = ({
  scale = 1,
  baseColor = [0.2, 0.2, 0.3],
  markerColor = [1, 0.8, 0],
  glowColor = [0.3, 0.5, 1],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200 * scale;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;

    // Draw glow
    const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    glowGradient.addColorStop(0, `rgba(${glowColor[0] * 255}, ${glowColor[1] * 255}, ${glowColor[2] * 255}, 0.3)`);
    glowGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, size, size);

    // Draw earth circle
    const earthGradient = ctx.createRadialGradient(centerX - 20, centerY - 20, 0, centerX, centerY, radius);
    earthGradient.addColorStop(0, `rgba(${baseColor[0] * 255}, ${baseColor[1] * 255}, ${baseColor[2] * 255}, 1)`);
    earthGradient.addColorStop(1, `rgba(${baseColor[0] * 255 * 0.5}, ${baseColor[1] * 255 * 0.5}, ${baseColor[2] * 255 * 0.5}, 1)`);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = earthGradient;
    ctx.fill();

    // Draw some markers (dots)
    const markerCount = 8;
    for (let i = 0; i < markerCount; i++) {
      const angle = (Math.PI * 2 * i) / markerCount;
      const markerX = centerX + Math.cos(angle) * (radius * 0.7);
      const markerY = centerY + Math.sin(angle) * (radius * 0.7);
      
      ctx.beginPath();
      ctx.arc(markerX, markerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${markerColor[0] * 255}, ${markerColor[1] * 255}, ${markerColor[2] * 255}, 0.8)`;
      ctx.fill();
    }

    // Simple rotation animation
    let rotation = 0;
    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      
      // Redraw with rotation
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.translate(-centerX, -centerY);
      
      // Draw glow
      const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      glowGradient.addColorStop(0, `rgba(${glowColor[0] * 255}, ${glowColor[1] * 255}, ${glowColor[2] * 255}, 0.3)`);
      glowGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, size, size);

      // Draw earth
      const earthGradient = ctx.createRadialGradient(centerX - 20, centerY - 20, 0, centerX, centerY, radius);
      earthGradient.addColorStop(0, `rgba(${baseColor[0] * 255}, ${baseColor[1] * 255}, ${baseColor[2] * 255}, 1)`);
      earthGradient.addColorStop(1, `rgba(${baseColor[0] * 255 * 0.5}, ${baseColor[1] * 255 * 0.5}, ${baseColor[2] * 255 * 0.5}, 1)`);
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = earthGradient;
      ctx.fill();

      // Draw markers
      for (let i = 0; i < markerCount; i++) {
        const angle = (Math.PI * 2 * i) / markerCount;
        const markerX = centerX + Math.cos(angle) * (radius * 0.7);
        const markerY = centerY + Math.sin(angle) * (radius * 0.7);
        
        ctx.beginPath();
        ctx.arc(markerX, markerY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${markerColor[0] * 255}, ${markerColor[1] * 255}, ${markerColor[2] * 255}, 0.8)`;
        ctx.fill();
      }
      
      ctx.restore();
      
      rotation += 0.005;
      requestAnimationFrame(animate);
    };

    animate();
  }, [scale, baseColor, markerColor, glowColor]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export default Earth;

