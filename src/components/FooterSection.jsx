import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function FooterSection({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#060913] text-white pt-20 pb-12 border-t border-[#00C2FF]/20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[96px] space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
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
              Fábrica B2B de empaques de cartón corrugado a la medida. 45 años garantizando resistencia estructural, precisión dimensional y cobertura a nivel nacional en toda Venezuela.
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
                <a href="#inicio" className="hover:text-[#00C2FF] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#00C2FF] transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#00C2FF] transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#medida" className="hover:text-[#00C2FF] transition-colors">
                  Sistema a la Medida
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00C2FF] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00C2FF] transition-colors">
                  Contacto B2B
                </a>
              </li>
            </ul>
          </div>

          {/* B2B Direct Contact */}
          <div className="md:col-span-4 space-y-4 text-[14px]">
            <h4 className="text-[12px] uppercase font-bold tracking-wider text-[#00C2FF]">
              Atención Corporativa B2B
            </h4>

            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0 mt-1" />
                <span>Planta Industrial CARTOCENTRO, Zona Industrial Principal.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>Atención a Ventas: (0800) CARTON-B2B</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>ventas@cartocentro.com</span>
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
