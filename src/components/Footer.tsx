
import React from "react";
import { Github, Instagram, MessageSquare } from "lucide-react";
import ButtonMk from "./ui/ButtonMk";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mk-bg border-t border-mk-border/30 py-8 sm:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <img
            src="/lovable-uploads/122bf2f3-db17-44f6-a7c6-1bb03f153910.png"
            alt="MK CODE"
            className="h-8 sm:h-12 mb-5 sm:mb-6"
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-8">
            <ButtonMk 
              variant="primary" 
              size="sm" 
              icon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
            >
              Falar no WhatsApp
            </ButtonMk>
            
            <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <a href="#" className="bg-mk-border/80 hover:bg-mk-accent text-white hover:text-black transition-colors p-2 rounded-full">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-mk-border/80 hover:bg-mk-accent text-white hover:text-black transition-colors p-2 rounded-full">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm text-white">
              &copy; {currentYear} MK CODE. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/80 mt-2">
              Soluções digitais com identidade para seu negócio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
