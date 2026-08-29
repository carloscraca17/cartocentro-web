import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    id: 1,
    question: "¿Cómo mido una caja?",
    answer: "La secuencia adecuada de dimensiones es largo × ancho × profundidad. Coloque la caja de cartón delante de usted con el extremo abierto hacia arriba. La longitud es la medida más larga del extremo abierto de izquierda a derecha. El ancho es la dimensión más corta del extremo abierto de adelante a atrás. La profundidad es la dimensión restante de arriba a abajo."
  },
  {
    id: 2,
    question: "¿Cuándo puedo recibir un presupuesto?",
    answer: "Para la mayoría de los proyectos, una vez que conocemos el estilo, dimensiones, tipo de cartón, requisitos de impresión y cantidad, podemos ofrecerle un presupuesto en 24 a 48 horas."
  },
  {
    id: 3,
    question: "¿Cuánto tiempo llevará recibir mis productos personalizados?",
    answer: "Como regla general, nos llevará entre 22 y 30 días hábiles producir sus productos impresos y diseñados a medida."
  },
  {
    id: 4,
    question: "¿Puedo tener una caja diseñada y hecha a la medida?",
    answer: "Somos su solución en empaques. Diseñamos y construimos cada proyecto según las necesidades individuales del cliente. Todas nuestras cajas están hechas a medida según sus necesidades de diseño y embalaje."
  },
  {
    id: 5,
    question: "¿Hay un requisito mínimo de pedido?",
    answer: "Dependerá de las medidas del producto por usted requerido. Nuestra cantidad mínima de pedido de fábrica es de 3.000 unidades para medidas estimadas de 290 mm × 180 mm × 100 mm."
  },
  {
    id: 6,
    question: "¿Puedo tener una muestra?",
    answer: "Sí, en algunos artículos de stock. Sin embargo, se aplicará un cargo de envío si aplica. Las muestras personalizadas se basan en su solicitud y requerimientos técnicos; su fabricación toma entre 1 y 2 semanas y debe ser aprobada para avanzar con la producción."
  },
  {
    id: 7,
    question: "¿Venden algún producto adicional no incluido en su catálogo en línea?",
    answer: "Somos su solución integral en empaques y constantemente desarrollamos nuevos productos y soluciones personalizadas."
  },
  {
    id: 8,
    question: "¿Tiene un catálogo con lista de precios?",
    answer: "Somos un fabricante profesional de envases impresos de cartón corrugado y microcorrugado. Todos nuestros productos se fabrican 100% a medida según las especificaciones técnicas y artes de cada cliente, por lo que no manejamos una lista de precios fija estándar."
  },
  {
    id: 9,
    question: "¿Cuáles son sus horas de oficina?",
    answer: "De lunes a viernes entre las 8:00 AM y las 4:00 PM (excepto días festivos)."
  }
];

export default function FaqSection({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const [openId, setOpenId] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
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

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-[96px] max-w-[1400px] mx-auto"
    >
      <div className="section-edge-card p-8 sm:p-12 md:p-16 rounded-[12px] shadow-2xl space-y-12 bg-[#0F172A]/90 border border-[#00C2FF]/20 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#38BDF8]" />

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#00C2FF]">
              Resolución de Dudas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Preguntas Frecuentes <br />
            <span className="font-serif-italic text-cyan-gradient block sm:inline font-normal">
              para compradores e ingenieros de empaque.
            </span>
          </h2>

          <p className="text-[16px] text-slate-300 font-normal">
            Respuestas claras sobre dimensiones, muestras, tiempos de entrega y volumen de manufactura.
          </p>
        </div>

        {/* Accordion Disclosure */}
        <div className="max-w-4xl space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className="gsap-faq-item rounded-[10px] border border-slate-800 bg-slate-900/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-[16px] sm:text-[18px] text-white hover:text-[#00C2FF] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[13px] text-[#00C2FF] font-bold shrink-0">
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-[6px] bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#00C2FF] text-black' : 'text-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Disclosure Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100 p-5 sm:p-6 pt-0' : 'max-h-0 opacity-0 p-0'
                  }`}
                >
                  <div className="border-t border-slate-800 pt-4">
                    <p className="text-[15px] sm:text-[16px] text-slate-300 font-normal leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Quote Banner */}
        <div className="p-6 sm:p-8 rounded-[12px] bg-[#0A0F1D] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#00C2FF]/30 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold tracking-tight">
              ¿Tiene especificaciones técnicas especiales?
            </h4>
            <p className="text-[14px] text-slate-300">
              Nuestro equipo de ingeniería estructural está listo para asesorarle en su proyecto.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="btn-electric-primary px-6 py-3 text-[14px] font-bold tracking-wide flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Consultar Asesor Técnico</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
