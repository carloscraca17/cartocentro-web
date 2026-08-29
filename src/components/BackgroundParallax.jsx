import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundParallax() {
  const containerRef = useRef(null);
  const layerSlowRef = useRef(null);
  const layerMediumRef = useRef(null);
  const layerFastRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll for layerSlow
      if (layerSlowRef.current) {
        gsap.to(layerSlowRef.current, {
          y: -180,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2
          }
        });
      }

      // Parallax effect for layerMedium
      if (layerMediumRef.current) {
        gsap.to(layerMediumRef.current, {
          y: -380,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8
          }
        });
      }

      // Parallax effect for layerFast
      if (layerFastRef.current) {
        gsap.to(layerFastRef.current, {
          y: -650,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#fbfbfd]"
      aria-hidden="true"
    >
      {/* 
        LAYER 1: SLOW PARALLAX - Giant Typography & Structural Watermarks
        Opacity: 3% to 6% (#1d1d1f or #b5906c)
      */}
      <div 
        ref={layerSlowRef} 
        className="absolute inset-0 w-full h-[180%] flex flex-col justify-between py-24 px-8"
      >
        <div className="flex justify-between items-start opacity-[0.05]">
          <span className="text-[140px] sm:text-[200px] font-extrabold font-mono tracking-tighter text-[#1d1d1f] leading-none">
            45 AÑOS
          </span>
          <span className="text-[100px] sm:text-[160px] font-bold tracking-widest text-[#b5906c] uppercase leading-none mt-20">
            ECT 44
          </span>
        </div>

        <div className="flex justify-around items-center opacity-[0.04]">
          <span className="text-[110px] sm:text-[180px] font-black uppercase text-[#1d1d1f] tracking-tight">
            CALZADO
          </span>
          <span className="text-[90px] sm:text-[150px] font-serif-italic text-[#b5906c]">
            ALIMENTOS
          </span>
        </div>

        <div className="flex justify-between items-end opacity-[0.05]">
          <span className="text-[120px] sm:text-[220px] font-black tracking-tighter uppercase text-[#1d1d1f] leading-none">
            INDUSTRIAL
          </span>
          <span className="text-[80px] sm:text-[140px] font-mono font-bold text-[#b5906c]">
            BCT 1200N
          </span>
        </div>
      </div>

      {/* 
        LAYER 2: MEDIUM PARALLAX - Die-Cut Structural Blueprints & Folding Angle Lines
        Opacity: 4% to 7% (#b5906c and #1d1d1f)
      */}
      <div 
        ref={layerMediumRef}
        className="absolute inset-0 w-full h-[220%] pointer-events-none"
      >
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dashed pattern for folding lines */}
            <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#b5906c" strokeWidth="1" strokeDasharray="4 4" opacity="0.05" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          {/* Registration Targets & Crosses */}
          <g stroke="#1d1d1f" strokeWidth="1.5" fill="none" opacity="0.06">
            {/* Target Cross 1 */}
            <circle cx="15%" cy="18%" r="18" />
            <line x1="15%" y1="14%" x2="15%" y2="22%" />
            <line x1="12%" y1="18%" x2="18%" y2="18%" />

            {/* Target Cross 2 */}
            <circle cx="85%" cy="42%" r="22" stroke="#b5906c" />
            <line x1="85%" y1="37%" x2="85%" y2="47%" stroke="#b5906c" />
            <line x1="81%" y1="42%" x2="89%" y2="42%" stroke="#b5906c" />

            {/* Target Cross 3 */}
            <circle cx="25%" cy="75%" r="16" />
            <line x1="25%" y1="71%" x2="25%" y2="79%" />
            <line x1="22%" y1="75%" x2="28%" y2="75%" />
          </g>

          {/* Box Net Fold Lines & Creasing Angle Indicators */}
          <g stroke="#b5906c" fill="none" opacity="0.07">
            {/* Unfolded Box Outline 1 (Top Left) */}
            <rect x="8%" y="10%" width="280" height="190" strokeWidth="1.5" strokeDasharray="6 4" />
            <line x1="8%" y1="16%" x2="35%" y2="16%" strokeWidth="2" stroke="#1d1d1f" />
            <text x="9%" y="9%" fill="#1d1d1f" fontSize="12" fontFamily="monospace" opacity="0.8">
              BLEED: 3.0mm | FLUTE-C
            </text>

            {/* Angle Indicator (Mid Right) */}
            <path d="M 72% 32% L 78% 32% L 78% 38%" strokeWidth="2" />
            <path d="M 75% 32% A 8 8 0 0 1 78% 35%" strokeDasharray="2 2" />
            <text x="79%" y="34%" fill="#b5906c" fontSize="14" fontFamily="sans-serif">
              90.0°
            </text>

            {/* Dimension Lines (Lower Center) */}
            <line x1="30%" y1="58%" x2="65%" y2="58%" strokeWidth="1.5" strokeDasharray="8 4" />
            <line x1="30%" y1="56%" x2="30%" y2="60%" strokeWidth="2" stroke="#1d1d1f" />
            <line x1="65%" y1="56%" x2="65%" y2="60%" strokeWidth="2" stroke="#1d1d1f" />
            <text x="44%" y="57%" fill="#1d1d1f" fontSize="13" fontFamily="monospace">
              290mm × 180mm × 100mm
            </text>

            {/* Unfolded Box Net 2 (Bottom Right) */}
            <rect x="62%" y="78%" width="320" height="220" strokeWidth="1.5" />
            <line x1="62%" y1="84%" x2="94%" y2="84%" strokeDasharray="5 5" />
            <line x1="72%" y1="78%" x2="72%" y2="100%" strokeDasharray="5 5" />
            <text x="63%" y="77%" fill="#b5906c" fontSize="12" fontFamily="monospace">
              DIE-CUT MATRIX REF #B2B-CARTON
            </text>
          </g>
        </svg>
      </div>

      {/* 
        LAYER 3: FAST PARALLAX - Floating Technical Badges & Cut Coordinates
        Opacity: 4% to 8% (#1d1d1f)
      */}
      <div 
        ref={layerFastRef}
        className="absolute inset-0 w-full h-[260%] pointer-events-none flex flex-col justify-between py-32 px-12"
      >
        <div className="flex justify-between items-center opacity-[0.06]">
          <div className="border border-[#1d1d1f] p-3 rounded font-mono text-xs text-[#1d1d1f]">
            X: 420.50 | Y: 180.25 | Z-LOCK
          </div>
          <div className="border border-[#b5906c] p-3 rounded font-mono text-xs text-[#b5906c]">
            ROBOTIC CUTTING SPEED: 120m/min
          </div>
        </div>

        <div className="flex justify-around items-center opacity-[0.05]">
          <div className="font-mono text-sm tracking-widest text-[#1d1d1f] uppercase border-b border-[#1d1d1f]">
            ★ CARTOCENTRO STRUCTURAL PATTERN
          </div>
          <div className="font-mono text-sm tracking-widest text-[#b5906c] uppercase border-b border-[#b5906c]">
            BCT COMPRESSION GUARANTEE
          </div>
        </div>

        <div className="flex justify-between items-center opacity-[0.06]">
          <div className="font-mono text-xs text-[#b5906c]">
            ISO 9001:2015 CORRUGATED STANDARD
          </div>
          <div className="font-mono text-xs text-[#1d1d1f]">
            CANAL SIMPLE / MICRO / DOBLE
          </div>
        </div>
      </div>

    </div>
  );
}
