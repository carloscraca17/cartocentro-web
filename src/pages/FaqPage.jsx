import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HelpCircle } from 'lucide-react';
import FaqSection from '../components/FaqSection';

export default function FaqPage({ onOpenQuote }) {
  return (
    <div className="pt-[100px] min-h-screen bg-[#060913]">
      
      {/* Subpage Header Banner */}
      <div className="relative py-16 md:py-24 bg-gradient-to-b from-[#0A0F1D] to-[#060913] border-b border-slate-800/80 overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C2FF]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#00C2FF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#00C2FF]">Preguntas Frecuentes</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#00C2FF]">
                Centro de Ayuda Técnica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              Preguntas Frecuentes <br />
              <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
                Respuestas a sus dudas técnicas e industriales.
              </span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-slate-300 font-normal leading-relaxed">
              Encuentre respuestas detalladas sobre capacidades de producción, tipos de flauta, volúmenes de pedido, tiempos de entrega y especificaciones mecánicas.
            </p>
          </div>

        </div>
      </div>

      {/* Main FAQ Section */}
      <FaqSection onOpenQuote={onOpenQuote} />

    </div>
  );
}
