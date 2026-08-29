import React from 'react';
import { ArrowRight, ShieldCheck, Award, Factory, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function AboutPage({ onOpenQuote }) {
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
            <span className="text-[#00C2FF]">Nosotros</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              Quiénes Somos <br />
              <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
                45 años de historia, solidez e innovación.
              </span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-slate-300 font-normal leading-relaxed">
              Somos la planta industrial referente en Venezuela para el diseño y fabricación de empaques estructurales de cartón corrugado a gran escala.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
            <div className="p-4 rounded-[10px] bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-[#00C2FF] font-mono mb-1">45+</div>
              <div className="text-xs text-slate-400 font-medium">Años de Trayectoria</div>
            </div>
            <div className="p-4 rounded-[10px] bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-white font-mono mb-1">100%</div>
              <div className="text-xs text-slate-400 font-medium">Cobertura Nacional</div>
            </div>
            <div className="p-4 rounded-[10px] bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-[#00C2FF] font-mono mb-1">ECT 44</div>
              <div className="text-xs text-slate-400 font-medium">Resistencia Certificada</div>
            </div>
            <div className="p-4 rounded-[10px] bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-white font-mono mb-1">24h</div>
              <div className="text-xs text-slate-400 font-medium">Respuesta Comercial</div>
            </div>
          </div>

        </div>
      </div>

      {/* Main About Section */}
      <AboutSection />

      {/* Contact Section at the Bottom */}
      <ContactSection onOpenQuote={onOpenQuote} />

    </div>
  );
}
