import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { X, CheckCircle, Calculator, Box, Send, Loader2 } from 'lucide-react';

const EMAILJS_PUBLIC_KEY = '1bcggy_1fJD0-DqCJ';
const EMAILJS_SERVICE_ID = 'service_kcc7yzy';
const EMAILJS_TEMPLATE_CONTACT = 'template_lk1b6sf'; // Contact us / Internal notification to Cartocentro
const EMAILJS_TEMPLATE_AUTOREPLY = 'template_59oj8fb'; // Automated response to client

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [quantity, setQuantity] = useState(3000);
  const [lengthCm, setLengthCm] = useState(30);
  const [widthCm, setWidthCm] = useState(20);
  const [heightCm, setHeightCm] = useState(15);
  const [fluteType, setFluteType] = useState('Onda C');
  const [sector, setSector] = useState('Calzado');

  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    notas: ''
  });

  if (!isOpen) return null;

  // Calculate estimated m² area per box
  const perimeterM = (2 * (Number(lengthCm) + Number(widthCm)) + 5) / 100;
  const heightM = (Number(widthCm) + Number(heightCm) + 3) / 100;
  const areaPerBoxM2 = (perimeterM * heightM).toFixed(3);
  const totalM2 = (areaPerBoxM2 * quantity).toLocaleString('es-ES');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      empresa: formData.empresa,
      contacto: formData.contacto,
      email: formData.email,
      telefono: formData.telefono,
      sector: sector,
      medidas: `${lengthCm} x ${widthCm} x ${heightCm} cm`,
      carton: fluteType,
      unidades: `${quantity.toLocaleString('es-ES')} u`,
      m2_total: `${totalM2} m²`,
      to_email: 'saccartocentro@hotmail.com'
    };

    try {
      // 1. Send internal quote notification email to Cartocentro
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONTACT,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send automated confirmation reply email to client
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_AUTOREPLY,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (autoErr) {
        console.warn('Autoreply notification trigger note:', autoErr);
      }

    } catch (err) {
      console.error('Error dispatching quote email via EmailJS:', err);
    } finally {
      setSending(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#060913]/85 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0A0F1D] text-white rounded-[12px] border border-[#00C2FF]/30 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#060913] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white flex items-center justify-center font-bold shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight text-white">
                Cotizador B2B de Volumen
              </h3>
              <p className="text-[12px] text-slate-400">
                Presupuesto técnico oficial para lotes desde 3.000 unidades.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00C2FF] hover:text-black flex items-center justify-center transition-colors cursor-pointer text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-6 bg-[#0A0F1D]">
            <div className="w-16 h-16 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] border border-[#00C2FF] mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold tracking-tight text-white">
                ¡Solicitud de Cotización Recibida!
              </h4>
              <p className="text-[15px] text-slate-300 max-w-md mx-auto">
                Hemos registrado su requerimiento de <span className="font-bold text-[#00C2FF]">{quantity.toLocaleString('es-ES')} unidades</span> para <span className="font-bold text-white">{formData.empresa || 'su empresa'}</span>.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-slate-950 text-white max-w-md mx-auto text-left text-[13px] space-y-2 font-mono border border-slate-800">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-[#00C2FF]">Sector:</span>
                <span>{sector}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-[#00C2FF]">Medidas (L x A x H):</span>
                <span>{lengthCm} x {widthCm} x {heightCm} cm</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-[#00C2FF]">Cartón Especificado:</span>
                <span>{fluteType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-[#00C2FF]">Consumo Estimado:</span>
                <span>{totalM2} m² corrugado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#00C2FF]">Notificación Enviada a:</span>
                <span className="text-slate-300">saccartocentro@hotmail.com</span>
              </div>
            </div>

            <p className="text-[13px] text-slate-400 italic">
              Un ingeniero de empaque de Cartocentro le contactará en un plazo de 24 a 48 horas con el cálculo de costo de troquel y producción.
            </p>

            <button
              onClick={handleReset}
              className="btn-electric-primary px-8 py-3 text-[14px] font-bold cursor-pointer shadow-lg"
            >
              Cerrar y Volver a la Web
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto bg-[#0A0F1D]">
            
            {/* Sector Selector */}
            <div className="space-y-2">
              <label className="text-[13px] uppercase font-bold tracking-wider text-[#00C2FF]">
                1. Sector Industrial
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Calzado', 'Alimenticio', 'Industrial / Comercio'].map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => setSector(sec)}
                    className={`py-2 px-3 rounded-[8px] text-[13px] font-semibold border transition-all cursor-pointer ${
                      sector === sec 
                        ? 'bg-[#00C2FF] text-black border-[#00C2FF] font-bold' 
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-[#00C2FF]/50'
                    }`}
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </div>

            {/* Box Dimensions */}
            <div className="space-y-2">
              <label className="text-[13px] uppercase font-bold tracking-wider text-[#00C2FF]">
                2. Dimensiones Interiores Abierta (cm)
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1">Largo (cm)</span>
                  <input
                    type="number"
                    min="5"
                    max="200"
                    value={lengthCm}
                    onChange={(e) => setLengthCm(e.target.value)}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[14px] font-bold text-white focus:outline-none focus:border-[#00C2FF]"
                    required
                  />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1">Ancho (cm)</span>
                  <input
                    type="number"
                    min="5"
                    max="200"
                    value={widthCm}
                    onChange={(e) => setWidthCm(e.target.value)}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[14px] font-bold text-white focus:outline-none focus:border-[#00C2FF]"
                    required
                  />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1">Profundidad (cm)</span>
                  <input
                    type="number"
                    min="5"
                    max="200"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[14px] font-bold text-white focus:outline-none focus:border-[#00C2FF]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Volume Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[13px] uppercase font-bold tracking-wider text-[#00C2FF]">
                  3. Volumen de Pedido (Mínimo 3.000 u.)
                </label>
                <span className="font-bold text-[16px] text-[#00C2FF] font-mono">
                  {Number(quantity).toLocaleString('es-ES')} UNIDADES
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="50000"
                step="1000"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#00C2FF] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>3.000 u (Fábrica)</span>
                <span>15.000 u</span>
                <span>50.000+ u (Gran Volumen)</span>
              </div>
            </div>

            {/* Flute Selector */}
            <div className="space-y-2">
              <label className="text-[13px] uppercase font-bold tracking-wider text-[#00C2FF]">
                4. Tipo de Cartón Corrugado
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Onda E', label: 'Microcorrugado' },
                  { name: 'Onda C', label: 'Onda Simple (4mm)' },
                  { name: 'Onda BC', label: 'Doble Corrugado' }
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setFluteType(item.name)}
                    className={`py-2 px-3 rounded-[8px] text-[12px] font-semibold border transition-all text-center cursor-pointer ${
                      fluteType === item.name 
                        ? 'bg-[#00C2FF] text-[#0A0F1D] border-[#00C2FF] font-bold' 
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-[#00C2FF]/50'
                    }`}
                  >
                    <div className="font-bold">{item.name}</div>
                    <div className="text-[10px] opacity-80">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Metric Highlight */}
            <div className="p-4 rounded-[10px] bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Box className="w-5 h-5 text-[#00C2FF]" />
                <div>
                  <span className="block text-[12px] font-bold text-white">Estimación Material Industrial</span>
                  <span className="text-[11px] text-slate-400 font-mono">{areaPerBoxM2} m² por caja</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Materia Prima Total</span>
                <span className="text-[15px] font-bold font-mono text-[#00C2FF]">{totalM2} m²</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <label className="text-[13px] uppercase font-bold tracking-wider text-[#00C2FF] block">
                5. Datos de la Empresa Solicitante
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nombre de la Empresa / RIF"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[13px] text-white focus:outline-none focus:border-[#00C2FF]"
                  required
                />
                <input
                  type="text"
                  placeholder="Persona de Contacto"
                  value={formData.contacto}
                  onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                  className="p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[13px] text-white focus:outline-none focus:border-[#00C2FF]"
                  required
                />
                <input
                  type="email"
                  placeholder="Correo Corporativo"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[13px] text-white focus:outline-none focus:border-[#00C2FF]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono Directo"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="p-2.5 bg-slate-900 border border-slate-700 rounded-[8px] text-[13px] text-white focus:outline-none focus:border-[#00C2FF]"
                  required
                />
              </div>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={sending}
              className="w-full btn-electric-primary py-4 text-[15px] font-bold tracking-wide flex items-center justify-center gap-3 cursor-pointer shadow-lg disabled:opacity-50"
            >
              {sending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Enviando Cotización...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white" />
                  <span>Enviar Solicitud Formal de Cotización</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
