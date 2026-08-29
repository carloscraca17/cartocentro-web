import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Footprints, Utensils, Building2, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-about-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      id="nosotros" 
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-[96px] max-w-[1400px] mx-auto"
    >
      {/* Dark Electric Glass Card */}
      <div className="section-edge-card p-8 sm:p-12 md:p-16 rounded-[12px] shadow-2xl relative overflow-hidden bg-[#0F172A]/90 border border-[#00C2FF]/20">
        
        {/* Glowing cyan top bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#38BDF8]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Tag */}
            <div className="gsap-about-anim inline-flex items-center gap-2 px-3 py-1 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full">
              <Award className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#00C2FF]">
                Trayectoria y Confianza
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="gsap-about-anim text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Empresa familiar con alcance <br className="hidden sm:block" />
              <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
                en toda Venezuela
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="gsap-about-anim text-[16px] sm:text-[17px] text-slate-300 font-normal leading-[1.65]">
              Somos una empresa de origen familiar impulsada por un equipo multidisciplinario enfocado en el diseño, fabricación y comercialización de empaques de cartón corrugado a la medida.
            </p>

            {/* Paragraph 2 */}
            <p className="gsap-about-anim text-[15px] sm:text-[16px] text-slate-400 font-normal leading-[1.6]">
              Fabricamos soluciones especializadas en 8 líneas clave de producción: Agrícola, Bandejas, Cajas para Placas, Calzado, Delivery, E-commerce, Manteles Semigrasos y RSC Embalaje.
            </p>

            {/* Industry Sectors Badges */}
            <div className="gsap-about-anim pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-[8px] bg-slate-900/80 border border-slate-800">
                <Footprints className="w-5 h-5 text-[#00C2FF]" />
                <span className="text-[13px] font-semibold text-slate-200">Industria Calzado</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-[8px] bg-slate-900/80 border border-slate-800">
                <Utensils className="w-5 h-5 text-[#00C2FF]" />
                <span className="text-[13px] font-semibold text-slate-200">Sector Alimenticio</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-[8px] bg-slate-900/80 border border-slate-800">
                <Building2 className="w-5 h-5 text-[#00C2FF]" />
                <span className="text-[13px] font-semibold text-slate-200">Sector Industrial</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Metric Card */}
          <div className="lg:col-span-5 gsap-about-anim">
            <div className="relative rounded-[12px] bg-[#0A0F1D] text-white p-8 sm:p-10 shadow-2xl border border-[#00C2FF]/30 overflow-hidden group">
              
              {/* Background watermark effect */}
              <div className="absolute -right-8 -bottom-8 text-[140px] font-bold text-[#00C2FF]/5 select-none pointer-events-none leading-none font-sans-custom">
                45
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white text-[11px] font-bold tracking-widest uppercase rounded-full">
                  Legado e Innovación
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-bold tracking-tight text-white font-sans-custom">
                    45
                  </span>
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-serif-italic text-[#00C2FF] leading-none">
                      Años
                    </span>
                    <span className="text-[13px] uppercase tracking-wider text-slate-400 font-semibold">
                      de Experiencia
                    </span>
                  </div>
                </div>

                <p className="text-[14px] text-slate-300 leading-relaxed border-t border-slate-800 pt-5">
                  Más de cuatro décadas superando los estándares mecánicos de resistencia a la compresión (ECT) y estibado para las industrias más exigentes.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2.5 pt-2 text-[13px] text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                    <span>Control total de calibre y corrugado</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                    <span>Resistencia optimizada para despacho nacional</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                    <span>Capacidad de entrega masiva B2B</span>
                  </li>
                </ul>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
