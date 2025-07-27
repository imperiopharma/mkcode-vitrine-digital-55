
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ButtonMk from "./ui/ButtonMk";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-mk-bg/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                src="/lovable-uploads/122bf2f3-db17-44f6-a7c6-1bb03f153910.png"
                alt="MK CODE"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-mk-muted hover:text-mk-text transition-colors"
            >
              Sobre
            </a>
            <a
              href="#products"
              className="text-mk-muted hover:text-mk-text transition-colors"
            >
              Produtos
            </a>
            <a
              href="#for-whom"
              className="text-mk-muted hover:text-mk-text transition-colors"
            >
              Para quem é
            </a>
            <a
              href="#differentials"
              className="text-mk-muted hover:text-mk-text transition-colors"
            >
              Diferenciais
            </a>
          </nav>

          <div className="hidden md:flex">
            <ButtonMk variant="primary" size="md">
              Falar com a MK CODE
            </ButtonMk>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-mk-border/30 rounded-md p-2 text-mk-muted hover:text-mk-text"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-mk-bg/95 backdrop-blur-md border-t border-mk-border/50 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-mk-muted hover:text-mk-text hover:bg-mk-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-mk-muted hover:text-mk-text hover:bg-mk-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#for-whom"
              className="block px-3 py-2 rounded-md text-base font-medium text-mk-muted hover:text-mk-text hover:bg-mk-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Para quem é
            </a>
            <a
              href="#differentials"
              className="block px-3 py-2 rounded-md text-base font-medium text-mk-muted hover:text-mk-text hover:bg-mk-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </a>
            <div className="pt-2">
              <ButtonMk variant="primary" size="md" className="w-full">
                Falar com a MK CODE
              </ButtonMk>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
