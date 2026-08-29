import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Send, ShieldCheck } from 'lucide-react';

export default function CategoryGalleryModal({ category, isOpen, onClose, onOpenQuote }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [category]);

  if (!isOpen || !category) return null;

  const images = category.images || [];

  const handleNext = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#060913]/85 backdrop-blur-lg transition-opacity duration-300 animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#0A0F1D] text-white rounded-[12px] shadow-2xl overflow-hidden border border-[#00C2FF]/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-[#060913] text-white flex items-center justify-between border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white">
                {category.tag}
              </span>
              <span className="text-[12px] text-slate-400 font-mono">
                Galería de Productos
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {category.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-[#00C2FF] hover:text-black transition-colors text-white cursor-pointer"
            aria-label="Cerrar galería"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#0A0F1D]">
          
          {/* Main Image Showcase */}
          <div className="relative bg-slate-950 rounded-[10px] overflow-hidden border border-slate-800 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[500px]">
            {images.length > 0 ? (
              <img
                src={images[activeImageIdx]}
                alt={`${category.title} - Imagen ${activeImageIdx + 1}`}
                className="max-h-[480px] w-auto object-contain p-2 sm:p-4 rounded-[6px] shadow-xl transition-transform duration-300 hover:scale-[1.01]"
              />
            ) : (
              <div className="text-center p-8 text-slate-400 space-y-2">
                <ImageIcon className="w-12 h-12 mx-auto text-[#00C2FF]/50" />
                <p>No hay imágenes adicionales para esta categoría.</p>
              </div>
            )}

            {/* Navigation Arrows for Multiple Images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#060913]/80 hover:bg-[#00C2FF] text-white hover:text-black flex items-center justify-center transition-colors shadow-lg cursor-pointer border border-slate-700"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#060913]/80 hover:bg-[#00C2FF] text-white hover:text-black flex items-center justify-center transition-colors shadow-lg cursor-pointer border border-slate-700"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails list if > 1 image */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-16 rounded-[8px] overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    activeImageIdx === idx 
                      ? 'border-[#00C2FF] ring-2 ring-[#00C2FF]/30 scale-105' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description & Details */}
          <div className="p-5 rounded-[10px] bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="font-bold text-[16px] text-white">
              {category.subtitle}
            </h4>
            <p className="text-[14px] text-slate-300 leading-relaxed">
              {category.desc}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#060913] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[12px] text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
            <span>Diseños estructurales a la medida y troquelado industrial.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(category);
            }}
            className="w-full sm:w-auto btn-electric-primary px-7 py-3 text-[14px] font-bold tracking-wide flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Solicitar Cotización para {category.title}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
