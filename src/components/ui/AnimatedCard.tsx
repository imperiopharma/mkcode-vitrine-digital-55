
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  glowEffect?: boolean;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

const AnimatedCard = ({ 
  className, 
  children, 
  glowEffect = false,
  hoverEffect = false,
  style
}: AnimatedCardProps) => {
  return (
    <div
      style={style}
      className={cn(
        "bg-mk-border/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-300",
        glowEffect && "glow-border",
        hoverEffect && "hover:-translate-y-1 hover:bg-mk-border/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
