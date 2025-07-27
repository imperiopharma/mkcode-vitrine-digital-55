
import React from "react";
import { ShoppingBag, Link, MessageSquare, Globe } from "lucide-react";
import AnimatedCard from "./ui/AnimatedCard";
import ButtonMk from "./ui/ButtonMk";
import { useIsMobile } from "@/hooks/use-mobile";

const Products = () => {
  const isMobile = useIsMobile();
  
  const products = [
    {
      id: 1,
      name: "MK COMMERCE",
      description: "Catálogo online com pedido via WhatsApp",
      icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Loja virtual", "Catálogo digital", "Pedidos pelo WhatsApp"],
      cta: "Quero uma loja digital",
      ctaIcon: <ShoppingBag className="w-4 h-4" />,
      available: true,
    },
    {
      id: 4,
      name: "Sites e Páginas Sob Medida",
      description: "Criação de sites e sistemas personalizados",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Sites institucionais", "Landing pages", "Sistemas web"],
      cta: "Quero criar meu site com a MK CODE",
      ctaIcon: <Globe className="w-4 h-4" />,
      available: true,
    },
    {
      id: 2,
      name: "ABREVIO",
      description: "Encurtador de link com painel e identidade",
      icon: <Link className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Domínio: abrev.io", "Links personalizados", "Estatísticas"],
      cta: "Conhecer o abrev.io",
      ctaIcon: <Link className="w-4 h-4" />,
      available: true,
    },
    {
      id: 3,
      name: "Automação WhatsApp",
      description: "Atendimento automatizado com WhatsApp",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-mk-accent" />,
      features: ["Chatbot", "Respostas automáticas", "Fluxos de atendimento"],
      cta: "Quero ser avisado",
      ctaIcon: <MessageSquare className="w-4 h-4" />,
      available: false,
    },
  ];

  return (
    <section id="products" className="py-8 md:py-12 bg-gradient-to-b from-mk-bg to-mk-bg/95 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto text-sm sm:text-base animate-fade-up opacity-0 px-4" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Ferramentas práticas que elevam seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-0">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-up opacity-0" 
              style={{ animationDelay: `${0.3 + 0.15 * index}s`, animationFillMode: "forwards" }}
            >
              <AnimatedCard 
                glowEffect={true} 
                hoverEffect={true}
                className="h-full flex flex-col p-4 sm:p-5"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {product.icon}
                  {!product.available && (
                    <span className="px-2 py-0.5 bg-mk-border text-xs rounded-full">Em breve</span>
                  )}
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
                  
                  <ButtonMk 
                    variant={product.available ? "primary" : "outline"} 
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                    icon={product.ctaIcon}
                  >
                    {product.cta}
                  </ButtonMk>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos de fundo */}
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-mk-bg to-transparent"></div>
    </section>
  );
};

export default Products;
