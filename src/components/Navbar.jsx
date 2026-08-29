import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#0A0F1D]/90 backdrop-blur-md border-b border-[#00C2FF]/20 shadow-xl' 
        : 'py-5 md:py-6 bg-gradient-to-b from-[#060913]/90 via-[#060913]/60 to-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="bg-[#F7F3EA] px-3 py-1.5 rounded-[6px] shadow-md border border-[#00C2FF]/30 group-hover:border-[#00C2FF] transition-all">
            <img 
              src="https://i.ibb.co/y25ymBs/LOGO-carto-color.png" 
              alt="Cartocentro" 
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Navigation Links - Hidden at <= 760px (md:flex) */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium tracking-wide text-white">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('categorias')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Productos
          </button>
          <button 
            onClick={() => scrollToSection('medida')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Sistema a la Medida
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Preguntas Frecuentes
          </button>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00C2FF] hover:after:w-full after:transition-all cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="btn-electric-primary px-5 py-2.5 text-[13px] sm:text-[14px] font-bold tracking-wide flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Cotizar Volumen B2B</span>
          </button>
        </div>

      </div>
    </header>
  );
}
