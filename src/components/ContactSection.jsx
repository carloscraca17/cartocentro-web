import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({ onOpenQuote }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-contact-anim',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-[96px] max-w-[1400px] mx-auto"
    >
      <div className="section-edge-card p-8 sm:p-12 md:p-16 rounded-[12px] shadow-2xl space-y-12 bg-[#0F172A]/90 border border-[#00C2FF]/20 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#38BDF8]" />

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full">
            <Phone className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#00C2FF]">
              Contacto Corporativo Directo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Atención a Plantas e Industria <br />
            <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
              en toda Venezuela.
            </span>
          </h2>

          <p className="text-[16px] text-slate-300 font-normal">
            Comuníquese directamente con nuestro departamento técnico comercial para atención rápida en volumen B2B.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Direct Channels (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Plant Location Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Ubicación de Planta</h4>
                  <p className="text-[14px] text-slate-300">
                    Zona Industrial Principal CARTOCENTRO, Estado Carabobo / Gran Caracas, Venezuela.
                  </p>
                </div>
              </div>

              {/* Phone Sales Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Línea Directa B2B</h4>
                  <p className="text-[15px] font-mono font-bold text-[#00C2FF]">
                    (0800) CARTON-B2B / +58 (241) 800-2278
                  </p>
                  <p className="text-[12px] text-slate-400">Atención de Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Email Sales Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Correo Corporativo</h4>
                  <p className="text-[15px] font-mono font-semibold text-[#00C2FF]">
                    ventas@cartocentro.com
                  </p>
                  <p className="text-[12px] text-slate-400">Respuesta garantizada en 24 a 48 horas laborales.</p>
                </div>
              </div>

            </div>

            {/* Response Commitment Badge */}
            <div className="gsap-contact-anim p-4 rounded-[8px] bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center gap-3 text-[13px] font-semibold text-slate-200">
              <Clock className="w-4 h-4 text-[#00C2FF] shrink-0" />
              <span>Respuesta técnica prioritaria para lotes de producción industrial B2B.</span>
            </div>
          </div>

          {/* Quick Contact Form Card (Right 6 Cols) */}
          <div className="lg:col-span-6 gsap-contact-anim">
            <div className="bg-[#0A0F1D] text-white p-8 rounded-[12px] border border-[#00C2FF]/30 shadow-2xl h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white text-[11px] font-bold tracking-widest uppercase rounded-full">
                  Canal Prioritario B2B
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  ¿Necesita un presupuesto urgente para su empresa?
                </h3>

                <p className="text-[14px] text-slate-300 leading-relaxed">
                  Complete nuestro cotizador interactivo para especificar dimensiones de caja, tipo de cartón y requerimientos de estibado.
                </p>

                <div className="p-4 rounded-[8px] bg-slate-900/80 border border-slate-800 space-y-2 text-[13px]">
                  <div className="flex items-center gap-2 text-[#00C2FF] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Asesoría Técnica Gratuita</span>
                  </div>
                  <p className="text-slate-400 text-[12px]">
                    Nuestros ingenieros calculan la resistencia ECT exacta sin compromiso.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenQuote}
                  className="w-full btn-electric-primary py-4 text-[15px] font-bold tracking-wide flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Solicitar Cotización Personalizada</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
