import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, Navigation, MessageCircle } from 'lucide-react';

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

        {/* Main 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Direct Channels & Hours (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Plant Location Card with Exact Address & Direct Google Maps Link */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-[16px] text-white">Ubicación de Planta</h4>
                    <a 
                      href="https://maps.app.goo.gl/jsGqWztXSSpQtD8c8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#00C2FF] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Cómo Llegar</span>
                    </a>
                  </div>
                  <p className="text-[14px] text-slate-300 leading-relaxed">
                    <a 
                      href="https://maps.app.goo.gl/jsGqWztXSSpQtD8c8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#00C2FF] transition-colors"
                    >
                      99 Av. Güigüe, Maracay 2103, Aragua, Venezuela.
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Teléfono & WhatsApp Directo</h4>
                  <a 
                    href="https://wa.me/584243620946?text=Hola%20Cartocentro,%20deseo%20solicitar%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-mono font-bold text-[#25D366] hover:underline block"
                  >
                    +58 424 362 0946
                  </a>
                  <p className="text-[12px] text-slate-400">Atención inmediata a requerimientos B2B.</p>
                </div>
              </div>

              {/* Email Sales Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Correo Electrónico Oficial</h4>
                  <a 
                    href="mailto:saccartocentro@hotmail.com"
                    className="text-[15px] font-mono font-semibold text-[#00C2FF] hover:underline block"
                  >
                    saccartocentro@hotmail.com
                  </a>
                  <p className="text-[12px] text-slate-400">Recepción de solicitudes de presupuesto y órdenes.</p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="gsap-contact-anim p-6 rounded-[10px] bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] text-white">Horarios de Atención</h4>
                  <p className="text-[14px] font-medium text-slate-200">
                    Lunes a Viernes: <span className="text-[#00C2FF] font-bold">7:30 a. m. – 4:00 p. m.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Response Commitment Badge */}
            <div className="gsap-contact-anim p-4 rounded-[8px] bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center gap-3 text-[13px] font-semibold text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF] shrink-0" />
              <span>Respuesta técnica prioritaria para lotes de producción industrial B2B.</span>
            </div>
          </div>

          {/* Interactive Google Map & Quote Trigger (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between gsap-contact-anim">
            
            {/* Embedded Google Maps Box */}
            <div className="bg-[#0A0F1D] text-white p-6 rounded-[12px] border border-[#00C2FF]/30 shadow-2xl space-y-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#00C2FF]" />
                    <span>Ubicación y Cómo Llegar</span>
                  </h3>
                  <p className="text-[13px] text-slate-300">
                    99 Av. Güigüe, Maracay 2103, Aragua, Venezuela
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/jsGqWztXSSpQtD8c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric-primary px-4 py-2 text-[12px] font-bold flex items-center gap-2 rounded-full shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>Abrir Mapa</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="w-full rounded-[10px] overflow-hidden border border-white/10 flex-1 min-h-[280px] relative bg-slate-950 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.6167787259016!2d-67.5813692304142!3d10.223858819179021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803ccf0dc0f14b%3A0x1fa42681d9c6774c!2sCarto%20Centro!5e0!3m2!1ses!2sar!4v1788039728442!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '280px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Mapa de Ubicación de Carto Centro"
                  className="w-full h-full min-h-[280px] rounded-[8px]"
                />
              </div>
            </div>

            {/* Quick Quote Banner */}
            <div className="p-6 rounded-[12px] bg-gradient-to-r from-slate-900 via-[#0A0F1D] to-slate-900 border border-[#00C2FF]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-[16px] font-bold text-white">¿Desea solicitar un presupuesto personalizado?</h4>
                <p className="text-[13px] text-slate-300">Respuesta ágil en 24-48h hábiles.</p>
              </div>
              <button
                onClick={onOpenQuote}
                className="btn-electric-primary px-6 py-3 text-[14px] font-bold flex items-center gap-2 shrink-0 rounded-full cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Cotizar Ahora</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
