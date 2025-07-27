
import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { Zap, Palette, LayoutList, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 fade-in-section">
            Sobre <span className="text-gradient">MK CODE</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>

        <AnimatedCard 
          className="max-w-3xl mx-auto backdrop-blur-xl fade-in-section px-4 sm:px-6" 
          hoverEffect={true}
          shimmer={true}
        >
          <p className="text-base sm:text-lg text-center leading-relaxed mb-4">
            MK CODE é uma empresa de automações e tecnologia que existe pra 
            <span className="text-gradient font-medium"> melhorar a vida de quem empreende</span>.
          </p>
          <p className="text-base sm:text-lg text-center leading-relaxed mb-4">
            Criamos ferramentas que ajudam desde quem tá começando até empresas já consolidadas
            — com foco em loja, atendimento e experiência real do cliente.
          </p>
          <p className="text-base sm:text-lg text-center leading-relaxed font-medium">
            <span className="text-gradient">Construímos qualquer tipo de site ou plataforma sob encomenda</span>, 
            sempre com a sua identidade e necessidades específicas em mente.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            <div className="text-center fade-in-section interactive-element">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3 hover-glow">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Automação</h3>
              <p className="text-sm text-mk-muted">Processos otimizados</p>
            </div>
            
            <div className="text-center fade-in-section interactive-element">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3 hover-glow">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Identidade</h3>
              <p className="text-sm text-mk-muted">Visual personalizado</p>
            </div>
            
            <div className="text-center fade-in-section interactive-element">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3 hover-glow">
                <LayoutList className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Simplicidade</h3>
              <p className="text-sm text-mk-muted">Fácil de usar</p>
            </div>
            
            <div className="text-center fade-in-section interactive-element">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3 hover-glow">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Sob encomenda</h3>
              <p className="text-sm text-mk-muted">Projetos personalizados</p>
            </div>
          </div>
        </AnimatedCard>
      </div>
      
      {/* Elementos de fundo */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mk-border to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mk-border to-transparent"></div>
    </section>
  );
};

export default About;
