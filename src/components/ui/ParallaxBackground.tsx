import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  className?: string;
  intensity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  className = '', 
  intensity = 0.5 
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * intensity;
        backgroundRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return (
    <div 
      ref={backgroundRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {/* Geometric patterns */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-mk-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-mk-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-mk-accent/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-mk-accent/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      
      {/* Lines */}
      <div className="absolute top-1/3 left-0 w-20 h-px bg-gradient-to-r from-transparent via-mk-accent/30 to-transparent rotate-45"></div>
      <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-r from-transparent via-mk-accent/20 to-transparent -rotate-45"></div>
    </div>
  );
};

export default ParallaxBackground;