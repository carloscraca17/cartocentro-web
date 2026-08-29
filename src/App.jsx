import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductCategoriesSection from './components/ProductCategoriesSection';
import CustomPackagesSection from './components/CustomPackagesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import CategoryGalleryModal from './components/CategoryGalleryModal';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="relative min-h-screen font-sans-custom bg-[#060913] text-white selection:bg-[#00C2FF] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Hero Section (Contains HERO background video playing normally in loop) */}
        <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 1: ¿QUIÉNES SOMOS? */}
        <AboutSection />

        {/* Section 2: CATEGORÍAS DE PRODUCTOS */}
        <ProductCategoriesSection 
          onOpenQuote={() => setIsQuoteOpen(true)} 
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Section 3: EMPAQUES A LA MEDIDA */}
        <CustomPackagesSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 4: PREGUNTAS FRECUENTES (FAQ B2B) */}
        <FaqSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 5: CONTACTO CORPORATIVO B2B */}
        <ContactSection onOpenQuote={() => setIsQuoteOpen(true)} />
      </main>

      {/* Footer Section */}
      <FooterSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp Button Component */}
      <WhatsAppButton />

      {/* Interactive Category Photo Gallery Modal */}
      <CategoryGalleryModal
        category={selectedCategory}
        isOpen={Boolean(selectedCategory)}
        onClose={() => setSelectedCategory(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Interactive B2B Quote Calculator Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />

    </div>
  );
}
