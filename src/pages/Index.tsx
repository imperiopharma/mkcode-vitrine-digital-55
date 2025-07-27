
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ForWhom from "@/components/ForWhom";
import Differentials from "@/components/Differentials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "MK CODE | Soluções digitais com identidade";
  }, []);

  // Observer para animações durante a rolagem
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando um elemento entra na viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Cast para HTMLElement para acessar style
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Seleciona todos os elementos com animação de fade-up
    const animateElements = document.querySelectorAll(".animate-fade-up");
    animateElements.forEach((el) => {
      // Garante que os elementos comecem invisíveis
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen bg-mk-bg text-mk-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-mk-border/20 to-transparent"></div>
        <About />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-mk-border/20 to-transparent"></div>
        <Products />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-mk-border/20 to-transparent"></div>
        <ForWhom />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-mk-border/20 to-transparent"></div>
        <Differentials />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-mk-border/20 to-transparent"></div>
        <CTASection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
