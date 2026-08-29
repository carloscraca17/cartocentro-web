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
    <footer className="relative z-10 bg-[#060913] text-white pt-16 pb-12 border-t border-[#00C2FF]/20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[96px] space-y-12">
        
        {/* Minimized Contact Section with Integrated Map (Exclusive to Subpages: Nosotros & FAQ) */}
        {isSubpage && (
          <div className="p-6 md:p-8 rounded-[12px] bg-[#0A0F1D] border border-[#00C2FF]/30 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#00C2FF]" />
                  <span>Contacto & Ubicación de Planta</span>
                </h3>
                <p className="text-[13px] text-slate-300">
                  99 Av. Güigüe, Maracay 2103, Aragua, Venezuela — Planta Industrial
                </p>
              </div>

              <a 
                href="https://maps.app.goo.gl/jsGqWztXSSpQtD8c8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-electric-pill-outline px-4 py-2 text-[12px] font-bold inline-flex items-center gap-2 shrink-0 self-start md:self-auto"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Cómo Llegar en Google Maps</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-3.5 rounded-[8px] bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">WhatsApp & Teléfono</div>
                    <a href="https://wa.me/584243620946" target="_blank" rel="noopener noreferrer" className="text-[14px] font-mono font-bold text-[#25D366] hover:underline">
                      +58 424 362 0946
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-[8px] bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Correo Electrónico</div>
                    <a href="mailto:saccartocentro@hotmail.com" className="text-[14px] font-mono font-medium text-[#00C2FF] hover:underline">
                      saccartocentro@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-[8px] bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Horario de Atención</div>
                    <div className="text-[13px] text-slate-200">Lunes a Viernes: 7:30 a. m. – 4:00 p. m.</div>
                  </div>
                </div>
              </div>

              {/* Minimized Embedded Google Map */}
              <div className="lg:col-span-7 h-[220px] rounded-[10px] overflow-hidden border border-slate-800 relative shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.6167787259016!2d-67.5813692304142!3d10.223858819179021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803ccf0dc0f14b%3A0x1fa42681d9c6774c!2sCarto%20Centro!5e0!3m2!1ses!2sar!4v1788039728442!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Google Map Cartocentro"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

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
