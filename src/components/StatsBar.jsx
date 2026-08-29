import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const VenezuelaFlag = () => (
  <svg className="w-9 h-6 rounded-[3px] shadow-md shrink-0 inline-block align-middle" viewBox="0 0 640 426" aria-label="Bandera de Venezuela">
    <rect width="640" height="142" fill="#FCD116" />
    <rect y="142" width="640" height="142" fill="#0038A8" />
    <rect y="284" width="640" height="142" fill="#CE1126" />
    <g fill="#FFFFFF">
      <circle cx="230" cy="205" r="5" />
      <circle cx="256" cy="188" r="5" />
      <circle cx="286" cy="178" r="5" />
      <circle cx="320" cy="175" r="5" />
      <circle cx="354" cy="178" r="5" />
      <circle cx="384" cy="188" r="5" />
      <circle cx="410" cy="205" r="5" />
      <circle cx="320" cy="200" r="5" />
    </g>
  </svg>
);

export default function StatsBar() {
  const [counts, setCounts] = useState({
    years: 0,
    lines: 0,
    custom: 0,
    hours: 0
  });

  useEffect(() => {
    let animationFrameId;
    let timeoutId;
    let isCancelled = false;

    const startAnimation = () => {
      if (isCancelled) return;

      const duration = 1800; // 1.8s count-up duration
      const startTime = performance.now();

      const animateCounters = (now) => {
        if (isCancelled) return;

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic curve formula
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts({
          years: Math.floor(easeOut * 45),
          lines: Math.floor(easeOut * 8),
          custom: Math.floor(easeOut * 100),
          hours: Math.floor(easeOut * 24)
        });

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCounters);
        } else {
          // Pause for 5 seconds after reaching target, then restart loop cleanly
          timeoutId = setTimeout(() => {
            if (!isCancelled) {
              setCounts({ years: 0, lines: 0, custom: 0, hours: 0 });
              startAnimation();
            }
          }, 5000);
        }
      };

      animationFrameId = requestAnimationFrame(animateCounters);
    };

    startAnimation();

    return () => {
      isCancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-[#0A0F1D]/90 backdrop-blur-md border border-white/10 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,194,255,0.08)] space-y-6">
      
      {/* 5-Column Grid with Proportional Sizing & Clean Spacing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 text-center items-stretch">
        
        {/* Metric 1 */}
        <div className="flex flex-col items-center justify-between text-center px-1 sm:px-2 py-1 lg:border-r lg:border-white/10 min-h-[96px] w-full">
          <div className="h-[48px] flex items-center justify-center w-full">
            <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums text-center whitespace-nowrap">
              {counts.years}+
            </span>
          </div>
          <div className="min-h-[36px] flex items-center justify-center w-full px-1">
            <span className="text-[10px] sm:text-[11px] xl:text-[12px] uppercase font-bold tracking-wider text-slate-400 text-center leading-tight">
              AÑOS DE HISTORIA
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center justify-between text-center px-1 sm:px-2 py-1 lg:border-r lg:border-white/10 min-h-[96px] w-full">
          <div className="h-[48px] flex items-center justify-center w-full">
            <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums text-center whitespace-nowrap">
              {counts.lines}
            </span>
          </div>
          <div className="min-h-[36px] flex items-center justify-center w-full px-1">
            <span className="text-[10px] sm:text-[11px] xl:text-[12px] uppercase font-bold tracking-wider text-slate-400 text-center leading-tight">
              LÍNEAS DE PRODUCCIÓN
            </span>
          </div>
        </div>

        {/* Metric 3 - Accent Cyan Highlight */}
        <div className="flex flex-col items-center justify-between text-center px-1 sm:px-2 py-1 lg:border-r lg:border-white/10 min-h-[96px] w-full">
          <div className="h-[48px] flex items-center justify-center w-full">
            <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#00C2FF] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(0,194,255,0.4)] tabular-nums text-center whitespace-nowrap">
              {counts.custom}%
            </span>
          </div>
          <div className="min-h-[36px] flex items-center justify-center w-full px-1">
            <span className="text-[10px] sm:text-[11px] xl:text-[12px] uppercase font-bold tracking-wider text-slate-400 text-center leading-tight">
              A LA MEDIDA
            </span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="flex flex-col items-center justify-between text-center px-1 sm:px-2 py-1 lg:border-r lg:border-white/10 min-h-[96px] w-full">
          <div className="h-[48px] flex items-center justify-center w-full">
            <span className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums text-center whitespace-nowrap">
              {counts.hours > 0 ? `${counts.hours}-48h` : '24-48h'}
            </span>
          </div>
          <div className="min-h-[36px] flex items-center justify-center w-full px-1">
            <span className="text-[10px] sm:text-[11px] xl:text-[12px] uppercase font-bold tracking-wider text-slate-400 text-center leading-tight">
              PRESUPUESTOS
            </span>
          </div>
        </div>

        {/* Metric 5 */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-between text-center px-1 sm:px-2 py-1 min-h-[96px] w-full">
          <div className="h-[48px] flex items-center justify-center w-full">
            <VenezuelaFlag />
          </div>
          <div className="min-h-[36px] flex items-center justify-center w-full px-1">
            <span className="text-[10px] sm:text-[11px] xl:text-[12px] uppercase font-bold tracking-wider text-slate-400 text-center leading-tight">
              COBERTURA NACIONAL
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Contact Row */}
      <div className="border-t border-white/10 pt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
        
        {/* Phone Contact Pill */}
        <a 
          href="tel:+582418002278"
          className="rounded-full border border-white/20 hover:border-[#00C2FF] bg-black/40 hover:bg-[#00C2FF]/10 backdrop-blur-md px-5 py-2.5 flex items-center gap-2.5 text-[12px] sm:text-[13px] font-mono font-bold text-white transition-all cursor-pointer shadow-md group"
        >
          <Phone className="w-4 h-4 text-[#00C2FF] group-hover:scale-110 transition-transform" />
          <span>(0800) CARTON-B2B</span>
        </a>

        {/* Email Contact Pill */}
        <a 
          href="mailto:ventas@cartocentro.com"
          className="rounded-full border border-white/20 hover:border-[#00C2FF] bg-black/40 hover:bg-[#00C2FF]/10 backdrop-blur-md px-5 py-2.5 flex items-center gap-2.5 text-[12px] sm:text-[13px] font-mono font-bold text-white transition-all cursor-pointer shadow-md group"
        >
          <Mail className="w-4 h-4 text-[#00C2FF] group-hover:scale-110 transition-transform" />
          <span>ventas@cartocentro.com</span>
        </a>

      </div>

    </div>
  );
}
