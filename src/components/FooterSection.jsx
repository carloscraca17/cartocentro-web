import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Clock, Navigation } from 'lucide-react';

export default function FooterSection({ onOpenQuote }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isSubpage = location.pathname !== '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="relative z-10 bg-[#060913] text-white pt-20 pb-12 border-t border-[#00C2FF]/20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[96px] space-y-16">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          
          {/* Brand & Legacy Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block bg-[#F7F3EA] p-2 rounded-[6px] shadow-md border border-[#00C2FF]/30">
              <img 
                src="https://i.ibb.co/y25ymBs/LOGO-carto-color.png" 
                alt="Cartocentro" 
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            
            <p className="text-[14px] text-slate-300 max-w-md leading-relaxed font-normal">
              Fábrica de empaques de cartón corrugado a la medida. 45 años garantizando resistencia estructural, precisión dimensional y cobertura a nivel nacional en toda Venezuela.
            </p>

            <div className="flex items-center gap-3 text-[12px] text-[#00C2FF] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de Calidad e Inspección Mecánica ECT</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-[14px]">
            <h4 className="text-[12px] uppercase font-bold tracking-wider text-[#00C2FF]">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li>
                <button onClick={() => handleNavClick('/')} className="hover:text-[#00C2FF] transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#00C2FF] transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('/#categorias')} className="hover:text-[#00C2FF] transition-colors cursor-pointer">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/#medida')} className="hover:text-[#00C2FF] transition-colors cursor-pointer">
                  Sistema a la Medida
                </button>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="hover:text-[#00C2FF] transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('/#contacto')} className="hover:text-[#00C2FF] transition-colors cursor-pointer">
                  Contacto Directo
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4 text-[14px]">
            <h4 className="text-[12px] uppercase font-bold tracking-wider text-[#00C2FF]">
              Atención Corporativa
            </h4>

            <div className="space-y-3 text-slate-300">
              <a 
                href="https://maps.app.goo.gl/jsGqWztXSSpQtD8c8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#00C2FF] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0 mt-1" />
                <span className="leading-snug">
                  99 Av. Güigüe, Maracay 2103, Aragua, Venezuela <Navigation className="w-3 h-3 inline-block ml-1 opacity-70 group-hover:opacity-100" />
                </span>
              </a>
              
              <a 
                href="https://wa.me/584243620946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-mono font-bold">+58 424 362 0946</span>
              </a>
              
              <a 
                href="mailto:saccartocentro@hotmail.com"
                className="flex items-center gap-3 hover:text-[#00C2FF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span className="font-mono">saccartocentro@hotmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-[13px]">
                <Clock className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>Lun a Vie: 7:30 a.m. – 4:00 p.m.</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="mt-2 btn-electric-primary w-full py-3 text-[13px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Solicitar Cotización de Lote</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400">
          <div>
            © {new Date().getFullYear()} CARTOCENTRO C.A. Todos los derechos reservados. 45 Años de Excelencia Industrial.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#00C2FF] transition-colors cursor-pointer"
          >
            Volver al inicio ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
