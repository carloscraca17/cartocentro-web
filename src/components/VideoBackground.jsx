import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoBackground({ videoRef, isLoaded, setIsLoaded, currentTime, setCurrentTime, duration, setDuration }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration || 1);
      setIsLoaded(true);
      // Ensure video is paused so GSAP controls current time
      video.pause();
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef, setDuration, setIsLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded || !duration) return;

    // ScrollTrigger to scrub video currentTime
    const ctx = gsap.context(() => {
      let targetTime = 0;
      let animationFrameId = null;

      const renderVideoFrame = () => {
        if (video && Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
          setCurrentTime(video.currentTime);
        }
        animationFrameId = requestAnimationFrame(renderVideoFrame);
      };

      animationFrameId = requestAnimationFrame(renderVideoFrame);

      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const newTime = self.progress * duration;
          targetTime = Math.min(Math.max(newTime, 0), duration - 0.05);
        }
      });

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, duration, videoRef, setCurrentTime]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#1c1917]">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/ahsxrxpv/video/upload/v1788018495/0829_1.mp4"
        muted
        playsInline
        preload="auto"
      />
      
      {/* Subtle overlay to enhance contrast while keeping video vivid */}
      <div className="absolute inset-0 bg-black/15 mix-blend-multiply pointer-events-none" />
    </div>
  );
}
