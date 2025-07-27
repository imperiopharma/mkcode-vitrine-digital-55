import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { FileText, Clock, Rocket } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-8 md:py-12 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 fade-in-section">
            <span className="text-gradient">Portfólio</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto text-sm sm:text-base fade-in-section px-4">
            Nossos projetos em desenvolvimento e em breve
          </p>
        </div>

        <AnimatedCard 
          className="max-w-2xl mx-auto text-center p-6 sm:p-8 fade-in-section"
          glowEffect={true}
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-mk-accent animate-float" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Portfólio em Construção
            </h3>
            <p className="text-mk-muted text-sm sm:text-base">
              Estamos organizando nossos melhores projetos para mostrar aqui
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center justify-center p-4 bg-mk-border/20 rounded-lg">
              <FileText className="w-5 h-5 text-mk-accent mr-3" />
              <span className="text-sm">Cases reais</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-mk-border/20 rounded-lg">
              <Clock className="w-5 h-5 text-mk-accent mr-3" />
              <span className="text-sm">Em breve</span>
            </div>
          </div>

          <div className="mt-6 text-xs text-mk-muted">
            <p>Trabalhamos com transparência e não mostramos projetos que não existem.</p>
            <p className="mt-1">Nosso portfólio será atualizado com projetos reais em breve.</p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Portfolio;