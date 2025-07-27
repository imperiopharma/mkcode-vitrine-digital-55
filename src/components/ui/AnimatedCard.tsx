
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  glowEffect?: boolean;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
  shimmer?: boolean;
}

const AnimatedCard = ({ 
  className, 
  children, 
  glowEffect = false,
  hoverEffect = false,
  shimmer = false,
  style
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={style}
      className={cn(
        "relative bg-mk-border/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 overflow-hidden",
        glowEffect && "glow-border",
        hoverEffect && "hover:-translate-y-2 hover:bg-mk-border/50 hover:shadow-xl hover:shadow-mk-accent/20",
        shimmer && "group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect */}
      {shimmer && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer transition-all duration-1000"></div>
      )}
      
      {/* Glow effect on hover */}
      {isHovered && hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-mk-accent/5 via-mk-accent/10 to-mk-accent/5 rounded-xl transition-opacity duration-300"></div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
