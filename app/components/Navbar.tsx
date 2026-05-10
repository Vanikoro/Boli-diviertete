"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${
        // En móvil (bg-white) siempre tiene fondo para que no se pierda el logo
        // En desktop (md:bg-transparent) solo se pone blanco al hacer scroll
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-white md:bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Ajustado para que no sea gigante en móvil */}
        <div className="scale-90 md:scale-100 origin-left">
          <Logo />
        </div>

        {/* Navegación Derecha */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Links: Ocultos en móvil, se ven desde md (768px) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#" className="hover:text-boli-blue transition-colors">Inicio</a>
            <a href="#catalogo" className="hover:text-boli-blue transition-colors">Catálogo</a>
            <a href="#galeria" className="hover:text-boli-blue transition-colors">Galería</a>
          </div>

          {/* Botón de Acción: Siempre visible pero ajustado */}
          <a 
            href="https://wa.me/573118417533" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-boli-blue text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-slate-900 hover:shadow-lg transition-all text-xs md:text-sm font-bold"
          >
            <FaWhatsapp size={18} className="md:w-5 md:h-5" />
            <span>Reservar</span>
          </a>
        </div>
      </div>
    </nav>
  );
}