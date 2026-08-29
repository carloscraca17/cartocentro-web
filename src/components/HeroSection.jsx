import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import StatsBar from './StatsBar';

export default function HeroSection({ onOpenQuote }) {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure hero video auto-plays smoothly in normal loop mode
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });
    }

    // GSAP Reveal Animation on Load
    const ctx = gsap.context(() => {
      const elements = textRef.current?.querySelectorAll('.gsap-hero-reveal');
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.2
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="inicio"
      ref={heroRef} 
      className="hero relative min-h-[100svh] w-full flex items-center justify-end z-10 overflow-hidden bg-[#060913]"
    >
      {/* Background Video (Normal Automatic Continuous Loop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-85"
          src="https://res.cloudinary.com/ahsxrxpv/video/upload/v1788018495/0829_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Dark Gradient Overlay matching reference image */}
      <div className="edge hero-edge absolute inset-0 pointer-events-none z-1 transition-all duration-500" />

      {/* Hero Content Container - Right Aligned with Generous Max-Width for 5-Column Stats */}
      <div 
        ref={textRef}
        className="relative z-10 w-full max-w-[960px] 
                   px-[22px] sm:px-8 md:px-12 lg:px-[50px]
                   pt-[140px] pb-[70px]
                   flex flex-col items-end text-right justify-center min-h-[100svh]"
      >
        {/* Eyebrow Tag with cyan accent line matching reference */}
        <div className="gsap-hero-reveal flex items-center gap-3 mb-4">
          <span className="h-[2px] w-8 bg-[#00C2FF]" />
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#00C2FF]">
            CARTOCENTRO C.A. — Fábrica B2B de Empaques
          </span>
        </div>

        {/* H1 Main Title */}
        <h1 className="gsap-hero-reveal hero-h1 text-white mb-6 font-semibold tracking-tight text-right w-full leading-[0.94]">
          Ingeniería estructural <br />
          que protege <br />
          <span className="font-serif-italic text-cyan-gradient inline-block font-normal">
            tu legado.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="gsap-hero-reveal max-w-[540px] text-[15px] sm:text-[17px] text-slate-300 font-normal leading-[1.6] mb-8 text-right">
          45 años de trayectoria. Transformamos el cartón corrugado en garantía, resistencia y solidez para la industria en toda Venezuela.
        </p>

        {/* Primary Electric Pill Button */}
        <div className="gsap-hero-reveal flex flex-wrap items-center justify-end gap-4 mb-10 w-full">
          <button
            onClick={onOpenQuote}
            className="btn-electric-primary px-8 sm:px-9 py-4 text-[15px] sm:text-[16px] font-bold tracking-wide flex items-center justify-between gap-4 cursor-pointer min-h-[58px] group shadow-2xl"
          >
            <span>Solicitar Cotización Personalizada</span>
            <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4.5 h-4.5 text-white" />
            </div>
          </button>
        </div>

        {/* Interactive StatsBar Floating Card Component */}
        <div className="gsap-hero-reveal w-full">
          <StatsBar />
        </div>

      </div>
    </section>
  );
}
