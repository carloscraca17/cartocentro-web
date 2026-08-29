import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  Compass, 
  Box, 
  Scissors, 
  Truck, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Identificación de la necesidad",
    desc: "Análisis exhaustivo del producto a embalar: peso, puntos de presión, apilamiento en tarima y condiciones de transporte.",
    icon: Search,
    detail: "Evaluación técnica de ECT (Edge Crush Test) y BCT (Box Crush Test)."
  },
  {
    num: "02",
    title: "Diseño y desarrollo del nuevo empaque",
    desc: "Modelado estructural a la medida especificando el tipo de onda, gramaje de papel liner y canal estructural idóneo.",
    icon: Compass,
    detail: "Optimización de espacio para reducir costos logísticos de flete."
  },
  {
    num: "03",
    title: "Realización del prototipo",
    desc: "Corte muestra en mesa plotter física para pruebas reales de ajuste, ensamblado y prueba de resistencia de caída.",
    icon: Box,
    detail: "Validación 100% interactiva antes de autorizar troqueles."
  },
  {
    num: "04",
    title: "Desarrollo y fabricación del troquel",
    desc: "Fabricación de la matriz de corte y hendido con tolerancias milimétricas CNC para producción en alta velocidad.",
    icon: Scissors,
    detail: "Troquelado plano o rotativo según el volumen de producción."
  },
  {
    num: "05",
    title: "Entrega del nuevo empaque personalizado",
    desc: "Producción industrial masiva, paletizado seguro y despacho directamente en las plantas del cliente.",
    icon: Truck,
    detail: "Cumplimiento estricto del cronograma de entrega acordado."
  }
];

const FLUTE_TYPES = [
  {
    id: "micro",
    name: "Microcorrugado (Onda E)",
    thickness: "1.5 mm",
    idealFor: "Calzado premium, cosméticos y empaques individuales estéticos.",
    resistance: "Alta rigidez de superficie e impresión flexo fina."
  },
  {
    id: "onda-c",
    name: "Onda Simple (Onda C)",
    thickness: "4.0 mm",
    idealFor: "Cajas estándar de envío industrial, alimentos y consumo masivo.",
    resistance: "Excelente amortiguación y resistencia al apilamiento."
  },
  {
    id: "doble-bc",
    name: "Doble Corrugado (Onda BC)",
    thickness: "7.0 mm",
    idealFor: "Carga pesada, piezas industriales, motores y exportación internacional.",
    resistance: "Máxima protección estructural y súper resistencia ECT."
  }
];

export default function CustomPackagesSection({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedFlute, setSelectedFlute] = useState(FLUTE_TYPES[1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-step-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="medida" 
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-[96px] max-w-[1400px] mx-auto"
    >
      <div className="section-edge-card p-8 sm:p-12 md:p-16 rounded-[12px] shadow-2xl space-y-16 bg-[#0F172A]/90 border border-[#00C2FF]/20 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#38BDF8]" />

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full">
            <Layers className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#00C2FF]">
              Ingeniería a la Medida
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Desarrollo Personalizado <br />
            <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
              adaptado a su producto y funcionalidad.
            </span>
          </h2>

          <p className="text-[16px] text-slate-300 font-normal leading-relaxed">
            Estructuras adaptadas a su producto y funcionalidad. Proceso integral de diseño, muestras físicas y fabricación masiva.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Timeline List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              ETAPAS DEL PROCESO TÉCNICO B2B
            </h3>

            <div className="space-y-3">
              {PROCESS_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`gsap-step-card p-5 rounded-[10px] border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#0A0F1D] text-white border-[#00C2FF] shadow-[0_0_25px_rgba(0,194,255,0.2)] translate-x-1' 
                        : 'bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-9 h-9 rounded-[6px] flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive ? 'bg-[#00C2FF] text-black' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {step.num}
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-[16px] tracking-tight text-white">
                            {step.title}
                          </h4>
                          <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#00C2FF]' : 'text-slate-500'}`} />
                        </div>
                        <p className={`text-[14px] leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>
                          {step.desc}
                        </p>
                        
                        {isActive && (
                          <div className="pt-3 border-t border-slate-800 mt-3 flex items-center gap-2 text-[12px] text-[#00C2FF] font-medium">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{step.detail}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Flute Spec Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#0A0F1D] text-white p-6 sm:p-8 rounded-[12px] border border-[#00C2FF]/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-[12px] uppercase font-bold tracking-wider text-[#00C2FF]">
                  Selector Técnico de Calibres
                </span>
                <span className="text-[11px] bg-[#00C2FF]/20 text-[#00C2FF] px-2.5 py-1 rounded-full font-mono">
                  ISO Corrugated Specs
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] text-slate-300 font-medium">
                  Seleccione el Tipo de Onda / Canal:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {FLUTE_TYPES.map((flute) => (
                    <button
                      key={flute.id}
                      onClick={() => setSelectedFlute(flute)}
                      className={`w-full text-left px-4 py-3 rounded-[8px] border text-[13px] font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        selectedFlute.id === flute.id
                          ? 'bg-[#00C2FF] text-black border-[#00C2FF] shadow-md font-bold'
                          : 'bg-slate-900/80 text-slate-200 border-slate-800 hover:border-[#00C2FF]/50'
                      }`}
                    >
                      <span>{flute.name}</span>
                      <span className="font-mono text-[12px] opacity-80">{flute.thickness}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Spec Box */}
              <div className="p-4 rounded-[8px] bg-slate-900/80 border border-slate-800 space-y-3">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#00C2FF] font-bold">
                    Aplicación Ideal
                  </span>
                  <p className="text-[13px] text-slate-200">
                    {selectedFlute.idealFor}
                  </p>
                </div>
                
                <div className="border-t border-slate-800 pt-2">
                  <span className="block text-[11px] uppercase tracking-wider text-[#00C2FF] font-bold">
                    Comportamiento Mecánico
                  </span>
                  <p className="text-[13px] text-slate-300">
                    {selectedFlute.resistance}
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full btn-electric-primary py-3.5 text-[14px] font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Solicitar Prototipo con esta Onda</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
