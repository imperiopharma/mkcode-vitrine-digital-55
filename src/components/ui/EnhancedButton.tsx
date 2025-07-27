import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ripple?: boolean;
  glow?: boolean;
}

const EnhancedButton = ({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "left",
  ripple = true,
  glow = false,
  onClick,
  ...props
}: EnhancedButtonProps) => {
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    }
    if (onClick) onClick(e);
  };

  const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mk-accent/50 disabled:opacity-50 overflow-hidden transform active:scale-95";

  const variantStyles = {
    primary: "bg-mk-accent text-black hover:bg-mk-hover font-semibold shadow-lg shadow-mk-accent/20 hover:shadow-mk-hover/40 hover:scale-105",
    secondary: "bg-mk-border text-white hover:bg-mk-border/80 font-semibold hover:scale-105",
    outline: "bg-transparent border border-mk-border hover:bg-mk-accent/90 text-white hover:text-black font-semibold hover:scale-105 hover:border-mk-accent",
    ghost: "bg-transparent text-mk-accent hover:bg-mk-accent/10 hover:scale-105",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3",
  };

  const glowStyles = glow ? "shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)]" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        glowStyles,
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple effect */}
      {ripple && isRippling && (
        <span className="absolute inset-0 bg-white/20 rounded-md animate-ping"></span>
      )}
      
      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-200 group-hover:scale-110">
          {React.cloneElement(icon as React.ReactElement, { 
            className: cn((icon as React.ReactElement).props.className, 
            variant === "primary" ? "text-black" : "text-current")
          })}
        </span>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-200 group-hover:scale-110">
          {React.cloneElement(icon as React.ReactElement, { 
            className: cn((icon as React.ReactElement).props.className, 
            variant === "primary" ? "text-black" : "text-current")
          })}
        </span>
      )}
    </button>
  );
};

export default EnhancedButton;