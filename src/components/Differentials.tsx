
import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { Users, Palette, MessageSquare, DollarSign, HeadphonesIcon, Smartphone, TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Differentials = () => {
  const isMobile = useIsMobile();
  
  const differentials = [
    {
      title: "Mentalidade de sócio",
      description: "Entendemos seu negócio e crescemos junto com você",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Visual bonito, sem exagero",
      description: "Design moderno e profissional que valoriza sua marca",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Pedido direto no WhatsApp",
      description: "Facilidade para seus clientes e controle para você",
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Sem taxa por venda",
      description: "Preço fixo e previsível, sem surpresas na fatura",
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Suporte humano no WhatsApp",
      description: "Atendimento pessoal e ágil quando você precisar",
      icon: <HeadphonesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Funciona no celular",
      description: "Gerencie seu negócio de qualquer lugar, a qualquer hora",
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
    {
      title: "Começa pequeno, cresce junto",
      description: "Soluções escaláveis que evoluem com seu negócio",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-mk-accent" />,
    },
  ];

  return (
    <section id="differentials" className="py-8 md:py-12 bg-gradient-to-b from-mk-bg/95 to-mk-bg relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto px-3 text-sm sm:text-base animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            O que torna a MK CODE a parceira ideal para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-3 sm:px-0">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${0.3 + 0.08 * index}s`, animationFillMode: "forwards" }}
            >
              <AnimatedCard 
                className="h-full p-3 sm:p-4 transform transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2" 
                hoverEffect={true}
              >
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 p-1.5 sm:p-2 bg-mk-border/50 rounded-lg">
                    {differential.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">{differential.title}</h3>
                    <p className="text-xs sm:text-sm text-mk-muted">{differential.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos de fundo */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-mk-bg to-transparent"></div>
    </section>
  );
};

export default Differentials;
