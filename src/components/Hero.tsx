
import React from "react";
import EnhancedButton from "./ui/EnhancedButton";
import { MessageSquare, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MatrixCodeRain from "./MatrixCodeRain";
import ParallaxBackground from "./ui/ParallaxBackground";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-20 overflow-hidden relative">
      {/* Matrix Code Rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MatrixCodeRain opacity={0.25} />
      </div>
      
      {/* Parallax background elements */}
      <ParallaxBackground intensity={0.3} />

      <div className="section-container">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Logo com animação aprimorada */}
          <div className="flex justify-center mb-6 md:mb-8 fade-in-section">
            <img
              src="/lovable-uploads/122bf2f3-db17-44f6-a7c6-1bb03f153910.png"
              alt="MK CODE - Soluções digitais com identidade"
              className="h-52 sm:h-52 md:h-64 lg:h-72 w-auto hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight fade-in-section">
            Seu negócio, <span className="text-gradient">nossa estrutura.</span>
          </h1>
          
          {/* Melhorando a legibilidade com animações suaves */}
          <div className="rounded-lg bg-black/40 backdrop-blur-sm p-4 mb-6 md:mb-8 fade-in-section hover-lift">
            <p className="text-base sm:text-lg md:text-xl text-white mb-0 max-w-2xl mx-auto">
              Soluções digitais com identidade – pra quem vende pelo WhatsApp, Instagram ou no balcão. 
              <span className="font-semibold text-mk-accent block mt-2">
                Construímos qualquer tipo de site ou plataforma sob encomenda.
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 fade-in-section" 
               style={{ animationDelay: "0.6s" }}>
            <EnhancedButton 
              variant="primary" 
              size={isMobile ? "md" : "lg"} 
              className="w-full sm:w-auto"
              icon={<Rocket className="w-4 h-4" />}
              glow={true}
              ripple={true}
            >
              Quero minha estrutura digital
            </EnhancedButton>
            <EnhancedButton 
              variant="outline" 
              size={isMobile ? "md" : "lg"} 
              icon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto mt-2 sm:mt-0"
              ripple={true}
            >
              Falar com MK CODE
            </EnhancedButton>
          </div>
        </div>
      </div>

      {/* Decorative elements - optimized for mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[600px] h-[400px] sm:h-[600px] bg-mk-accent/5 rounded-full blur-[80px] sm:blur-[100px] -z-10"></div>
      
      <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-mk-accent/10 rounded-full blur-[30px] sm:blur-[50px] animate-pulse -z-10"></div>
      
      <div className="absolute -bottom-10 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-mk-accent/10 rounded-full blur-[40px] sm:blur-[60px] animate-pulse -z-10"></div>
      
      <div className="absolute top-20 right-5 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-mk-accent rounded-full animate-ping"></div>
      
      <div className="absolute bottom-20 left-5 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-mk-accent rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
      
      <div className="absolute top-1/3 -left-10 sm:-left-20 w-20 sm:w-40 h-[1px] bg-gradient-to-r from-transparent via-mk-accent/50 to-transparent rotate-45"></div>
      
      <div className="absolute bottom-1/3 -right-10 sm:-right-20 w-20 sm:w-40 h-[1px] bg-gradient-to-r from-transparent via-mk-accent/50 to-transparent -rotate-45"></div>
    </section>
  );
};

export default Hero;
