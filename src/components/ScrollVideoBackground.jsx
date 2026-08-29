import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoBackground() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId;
    let triggerInstance;

    const initScrubber = () => {
      video.pause();

      // ScrollTrigger calculates target playback time based on scroll progress
      triggerInstance = ScrollTrigger.create({
        trigger: 'main',
        start: 'top+=70vh top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (video.duration) {
            targetTimeRef.current = self.progress * video.duration;
          }
        }
      });

      // Ultra-smooth 60fps linear interpolation (Lerp) loop for fluid frame scrubbing
      const render = () => {
        const diff = targetTimeRef.current - currentTimeRef.current;
        
        if (Math.abs(diff) > 0.001) {
          // Smooth Lerp coefficient (0.12) eliminates jitter during fast or slow scrolling
          currentTimeRef.current += diff * 0.12;
          
          if (video.duration && !isNaN(video.currentTime)) {
            video.currentTime = currentTimeRef.current;
          }
        }
        
        rafId = requestAnimationFrame(render);
      };

      rafId = requestAnimationFrame(render);
    };

    if (video.readyState >= 1) {
      initScrubber();
    } else {
      video.addEventListener('loadedmetadata', initScrubber);
    }

    return () => {
      video.removeEventListener('loadedmetadata', initScrubber);
      if (rafId) cancelAnimationFrame(rafId);
      if (triggerInstance) triggerInstance.kill();
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#060913]"
      aria-hidden="true"
    >
      {/* High-End Motion Graphics Background Video with Full Opacity (100%) */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/ahsxrxpv/video/upload/v1788035466/High_end_D_motion_graphics_an.mp4"
        className="w-full h-full object-cover opacity-100"
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
