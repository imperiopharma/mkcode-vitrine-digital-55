
import React from "react";
import { ShoppingBag, Globe, Settings } from "lucide-react";
import AnimatedCard from "./ui/AnimatedCard";
import EnhancedButton from "./ui/EnhancedButton";
import { useIsMobile } from "@/hooks/use-mobile";

const Products = () => {
  const isMobile = useIsMobile();
  
  const products = [
    {
      id: 1,
      name: "MK COMMERCE",
      description: "Catálogo digital e pedidos via WhatsApp",
      icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Loja virtual personalizada", "Catálogo digital sob medida", "Gestão de pedidos integrada ao WhatsApp"],
      cta: "Quero uma loja digital",
      ctaIcon: <ShoppingBag className="w-4 h-4" />,
      available: true,
    },
    {
      id: 2,
      name: "Sites & Sistemas Sob Medida",
      description: "Criação de sites institucionais, landing pages e sistemas web",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Sites profissionais e responsivos", "Landing pages de alta conversão", "Sistemas web personalizados"],
      cta: "Quero criar meu site com MK CODE",
      ctaIcon: <Globe className="w-4 h-4" />,
      available: true,
    },
    {
      id: 3,
      name: "Automações Digitais",
      description: "Automatize processos e atendimento no seu negócio",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Chatbots e automação no WhatsApp", "Integração de sistemas (envio de pedidos, leads, notificações)", "Respostas automáticas e fluxos inteligentes"],
      cta: "Quero automatizar meu negócio",
      ctaIcon: <Settings className="w-4 h-4" />,
      available: true,
    },
  ];

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "FastAPI", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
    { name: "IA Generativa", icon: "🤖" },
  ];

  return (
    <section id="products" className="py-8 md:py-12 bg-gradient-to-b from-mk-bg to-mk-bg/95 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 fade-in-section">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto text-sm sm:text-base fade-in-section px-4">
            Ferramentas práticas que elevam seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-0">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="fade-in-section"
            >
              <AnimatedCard 
                glowEffect={true} 
                hoverEffect={true}
                shimmer={true}
                className="h-full flex flex-col p-4 sm:p-5"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {product.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-mk-muted mb-4 text-sm sm:text-base">{product.description}</p>
                
                <div className="mt-auto">
                  <ul className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-mk-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <EnhancedButton 
                    variant="primary"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                    icon={product.ctaIcon}
                    glow={true}
                    ripple={true}
                  >
                    {product.cta}
                  </EnhancedButton>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>

        {/* Seção de Tecnologias */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <p className="text-mk-muted text-sm sm:text-base">
              Tecnologias que impulsionam nossos projetos
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center space-y-2 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm text-mk-muted group-hover:text-mk-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elementos de fundo */}
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-mk-bg to-transparent"></div>
    </section>
  );
};

export default Products;
