import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sprout, 
  PackageCheck, 
  Square, 
  Footprints, 
  UtensilsCrossed, 
  ShoppingBag, 
  ScrollText, 
  Box,
  Eye,
  Send
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const PRODUCT_CATEGORIES = [
  {
    id: "agricola",
    title: "Agrícola",
    subtitle: "Empaques para campo y exportación",
    desc: "Cajas estructuradas con ventilación óptima y alta resistencia a la humedad para el transporte de frutas y hortalizas.",
    icon: Sprout,
    tag: "Alta Ventilación",
    images: [
      "https://i.ibb.co/6RP8Gzpx/Whats-App-Image-2026-08-29-at-13-30-05.jpg"
    ]
  },
  {
    id: "bandejas",
    title: "Bandejas",
    subtitle: "Bandejas autosoportadas",
    desc: "Soluciones auto-ensamblables para apilado directo en tarimas, exhibición en punto de venta y almacenamiento masivo.",
    icon: PackageCheck,
    tag: "Apilado Seguro",
    images: [
      "https://i.ibb.co/DD1QKmRb/Whats-App-Image-2026-08-29-at-13-27-52-1.jpg",
      "https://i.ibb.co/VYtwrfYx/Whats-App-Image-2026-08-29-at-13-27-52-2.jpg",
      "https://i.ibb.co/chxXtYdd/Whats-App-Image-2026-08-29-at-13-27-52.jpg"
    ]
  },
  {
    id: "placas",
    title: "Cajas para Placas",
    subtitle: "Empaques reforzados de perfil plano",
    desc: "Diseños especiales de formato extendido para la protección de láminas, losas cerámicas y placas industriales.",
    icon: Square,
    tag: "Perfil Plano",
    images: [
      "https://i.ibb.co/Rk6Hbb5R/Whats-App-Image-2026-08-29-at-13-31-21.jpg"
    ]
  },
  {
    id: "calzado",
    title: "Calzado",
    subtitle: "Líderes nacionales en empaque de calzado",
    desc: "Cajas de microcorrugado con precisión milimétrica, acabado estético superior y excelente presentación de marca.",
    icon: Footprints,
    tag: "Microcorrugado Premium",
    images: [
      "https://i.ibb.co/67Jb4Hj1/Whats-App-Image-2026-08-29-at-13-29-01.jpg"
    ]
  },
  {
    id: "delivery",
    title: "Delivery",
    subtitle: "Empaques para alimentos y entregas",
    desc: "Cajas térmicas, resistentes a la humedad y grasas, diseñadas para preservar la calidad del producto durante el traslado.",
    icon: UtensilsCrossed,
    tag: "Grado Alimenticio",
    images: [
      "https://i.ibb.co/7thM7pdT/Whats-App-Image-2026-08-29-at-13-27-11-1.jpg",
      "https://i.ibb.co/3986HRnd/Whats-App-Image-2026-08-29-at-13-27-11.jpg"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Cajas auto-armables de envío seguro",
    desc: "Empaques de alta rigidez estructural con cierre de seguridad integrado para despachos nacionales e interactivos.",
    icon: ShoppingBag,
    tag: "Cierre de Seguridad",
    images: [
      "https://i.ibb.co/CKckQBBm/Whats-App-Image-2026-08-29-at-13-28-20.jpg"
    ]
  },
  {
    id: "semigrasos",
    title: "Manteles Semigrasos",
    subtitle: "Protección física de grado sanitario",
    desc: "Láminas separadoras de papel tratado con barrera antigrasa para protección y empaque directo de alimentos.",
    icon: ScrollText,
    tag: "Barrera Antigrasa",
    images: [
      "https://i.ibb.co/r2t2h9f2/Whats-App-Image-2026-08-29-at-13-31-37.jpg"
    ]
  },
  {
    id: "rsc",
    title: "RSC Embalaje",
    subtitle: "Regular Slotted Container estándar",
    desc: "Empaque clásico de máxima eficiencia estructural y relación costo-beneficio para transporte de carga pesada masiva.",
    icon: Box,
    tag: "Formato RSC Estándar",
    images: [
      "https://i.ibb.co/tP193TR6/Whats-App-Image-2026-08-29-at-13-30-37.jpg"
    ]
  }
];

export default function ProductCategoriesSection({ onOpenQuote, onSelectCategory }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-cat-card',
        { opacity: 0, y: 24 },
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

  return (
    <section 
      id="categorias" 
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-[96px] max-w-[1400px] mx-auto"
    >
      {/* Light Gray Section Card Container */}
      <div className="section-edge-card p-8 sm:p-12 md:p-16 rounded-[16px] shadow-2xl space-y-12 bg-[#F1F5F9] border border-slate-300 relative overflow-hidden text-slate-900">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#38BDF8] z-20" />

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066FF]/10 border border-[#0066FF]/25 rounded-full">
            <Box className="w-3.5 h-3.5 text-[#0066FF]" />
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#0066FF]">
              Líneas de Producción Especializada
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Categorías de Productos <br />
            <span className="font-serif-italic text-[#0066FF] block sm:inline font-normal">
              diseñadas para cada sector industrial.
            </span>
          </h2>

          <p className="text-[16px] text-slate-600 font-normal leading-relaxed">
            Haga clic en cualquier categoría para visualizar la galería de imágenes reales de producto.
          </p>
        </div>

        {/* 8 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {PRODUCT_CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const primaryImage = cat.images[0];

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat)}
                className="gsap-cat-card rounded-[12px] bg-white text-slate-900 border border-slate-200 hover:border-[#0066FF] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                {/* Photo Preview Container */}
                <div className="relative h-44 w-full bg-slate-200 overflow-hidden border-b border-slate-200">
                  <img
                    src={primaryImage}
                    alt={cat.title}
                    className="w-full h-full object-cover max-sm:grayscale-0 max-sm:opacity-90 sm:grayscale sm:opacity-75 sm:group-hover:grayscale-0 sm:group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[6px] bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0066FF] transition-colors">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-[12px] font-semibold text-[#0066FF]">
                      {cat.subtitle}
                    </p>

                    <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Separate Action Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    
                    {/* View Photos Trigger */}
                    <span className="text-[12px] font-semibold text-slate-500 group-hover:text-slate-900 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Ver Fotos</span>
                    </span>

                    {/* Dedicated Cotizar Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote(cat);
                      }}
                      className="px-4 py-1.5 rounded-full btn-electric-primary text-[12px] font-bold tracking-wide flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Send className="w-3 h-3 text-white" />
                      <span>Cotizar</span>
                    </button>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
