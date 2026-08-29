import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
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
          scrolled || isSubpage || mobileMenuOpen
            ? 'bg-[#0A0F1D]/95 shadow-2xl opacity-100' 
            : 'bg-gradient-to-b from-[#060913]/95 via-[#060913]/60 to-transparent opacity-95'
        }`} 
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between relative z-10">
        
        {/* Brand Logo */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group focus:outline-none">
          <div className="bg-[#F7F3EA] px-3 py-1.5 rounded-[6px] shadow-md border border-slate-700/50 group-hover:border-[#00C2FF] transition-all">
            <img 
              src="https://i.ibb.co/y25ymBs/LOGO-carto-color.png" 
              alt="Cartocentro" 
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Header Action & Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="hidden sm:flex btn-electric-primary px-4 sm:px-5 py-2.5 text-[13px] sm:text-[14px] font-bold tracking-wide items-center gap-2 cursor-pointer shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Cotizar por Volumen</span>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-[8px] bg-slate-900/90 border border-slate-800 text-white hover:text-[#00C2FF] hover:border-[#00C2FF]/40 focus:outline-none transition-all cursor-pointer shadow-md"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#00C2FF]" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-[#0A0F1D]/98 border-b border-[#00C2FF]/30 backdrop-blur-xl shadow-2xl py-6 px-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          
          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('/')}
              className={`flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium transition-colors ${
                location.pathname === '/' ? 'bg-[#00C2FF]/10 text-[#00C2FF] font-bold' : 'text-slate-200 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <span>Inicio</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('/nosotros')}
              className={`flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium transition-colors ${
                location.pathname === '/nosotros' ? 'bg-[#00C2FF]/10 text-[#00C2FF] font-bold' : 'text-slate-200 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <span>Nosotros</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('/#categorias')}
              className="flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium text-slate-200 hover:bg-slate-900 hover:text-white transition-colors"
            >
              <span>Productos</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('/#medida')}
              className="flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium text-slate-200 hover:bg-slate-900 hover:text-white transition-colors"
            >
              <span>Sistema a la Medida</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('/preguntas-frecuentes')}
              className={`flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium transition-colors ${
                location.pathname === '/preguntas-frecuentes' ? 'bg-[#00C2FF]/10 text-[#00C2FF] font-bold' : 'text-slate-200 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <span>Preguntas Frecuentes</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('/#contacto')}
              className="flex items-center justify-between p-3 rounded-[8px] text-[15px] font-medium text-slate-200 hover:bg-slate-900 hover:text-white transition-colors"
            >
              <span>Contacto</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </nav>

          {/* Action Button & Contact Info inside Drawer */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn-electric-primary w-full py-3 text-[14px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Cotizar por Volumen</span>
            </button>

            <div className="flex items-center justify-around pt-2 text-[12px] text-slate-400">
              <a href="https://wa.me/584243620946" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-mono font-bold">+58 424 362 0946</span>
              </a>
              <a href="mailto:saccartocentro@hotmail.com" className="flex items-center gap-1.5 hover:text-[#00C2FF] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#00C2FF]" />
                <span className="font-mono">Email SAC</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
