import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    if (target.startsWith('/#')) {
      const elementId = target.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(target);
      }
    } else if (target === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(target);
    }
  };

  const isSubpage = location.pathname !== '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isSubpage ? 'py-3.5' : 'py-5 md:py-6'
    }`}>
      {/* Seamless background layer with backdrop blur */}
      <div 
        className={`absolute inset-0 -z-10 backdrop-blur-md transition-all duration-300 ${
          scrolled || isSubpage 
            ? 'bg-[#0A0F1D]/95 shadow-2xl opacity-100' 
            : 'bg-gradient-to-b from-[#060913]/95 via-[#060913]/60 to-transparent opacity-95'
        }`} 
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between relative z-10">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="bg-[#F7F3EA] px-3 py-1.5 rounded-[6px] shadow-md border border-slate-700/50 group-hover:border-[#00C2FF] transition-all">
            <img 
              src="https://i.ibb.co/y25ymBs/LOGO-carto-color.png" 
              alt="Cartocentro" 
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium tracking-wide text-white">
          <button 
            onClick={() => handleNavClick('/')} 
            className={`hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer ${
              location.pathname === '/' ? 'text-[#00C2FF] font-semibold' : ''
            }`}
          >
            Inicio
          </button>
          <button 
            onClick={() => handleNavClick('/nosotros')} 
            className={`hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer ${
              location.pathname === '/nosotros' ? 'text-[#00C2FF] font-semibold' : ''
            }`}
          >
            Nosotros
          </button>
          <button 
            onClick={() => handleNavClick('/#categorias')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer"
          >
            Productos
          </button>
          <button 
            onClick={() => handleNavClick('/#medida')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer"
          >
            Sistema a la Medida
          </button>
          <button 
            onClick={() => handleNavClick('/preguntas-frecuentes')} 
            className={`hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer ${
              location.pathname === '/preguntas-frecuentes' ? 'text-[#00C2FF] font-semibold' : ''
            }`}
          >
            Preguntas Frecuentes
          </button>
          <button 
            onClick={() => handleNavClick('/#contacto')} 
            className="hover:text-[#00C2FF] transition-colors relative py-1 cursor-pointer"
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
            <span>Cotizar por Volumen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
