import React from "react";
import EnhancedButton from "./ui/EnhancedButton";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CTASection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 fade-in-section">
            Pronto pra tirar seu negócio do improviso e dar o <span className="text-gradient">próximo passo</span>?
          </h2>
          
          <div className="fade-in-section">
            <Dialog>
              <DialogTrigger asChild>
                <EnhancedButton 
                  variant="primary" 
                  size={isMobile ? "md" : "lg"}
                  icon={<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
                  className="animate-bounce-subtle"
                  glow={true}
                  ripple={true}
                >
                  Falar agora com o MK CODE
                </EnhancedButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Entre em contato</DialogTitle>
                  <DialogDescription>
                    Estamos prontos para ajudar seu negócio a crescer.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <p className="text-sm text-mk-muted">
                    Clique no botão abaixo para iniciar uma conversa pelo WhatsApp:
                  </p>
                  <EnhancedButton 
                    variant="primary"
                    icon={<MessageSquare className="w-4 h-4" />}
                    onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
                    className="w-full"
                    ripple={true}
                  >
                    Iniciar conversa
                  </EnhancedButton>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      
      {/* Elementos de fundo */}
      <div className="absolute -top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-mk-accent/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-mk-accent/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
      
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default CTASection;
