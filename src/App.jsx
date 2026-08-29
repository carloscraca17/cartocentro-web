import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';
import CategoryGalleryModal from './components/CategoryGalleryModal';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen font-sans-custom bg-[#060913] text-white selection:bg-[#00C2FF] selection:text-black">
        
        {/* Navigation Header */}
        <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Page Routes */}
        <main className="relative z-10">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenQuote={() => setIsQuoteOpen(true)} 
                  onSelectCategory={(cat) => setSelectedCategory(cat)}
                />
              } 
            />
            <Route 
              path="/nosotros" 
              element={<AboutPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/preguntas-frecuentes" 
              element={<FaqPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
          </Routes>
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

        {/* Interactive Quote Calculator Modal */}
        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={() => setIsQuoteOpen(false)} 
        />

      </div>
    </Router>
  );
}
