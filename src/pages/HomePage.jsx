import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategoriesSection from '../components/ProductCategoriesSection';
import CustomPackagesSection from '../components/CustomPackagesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenQuote, onSelectCategory }) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* Categorías de Productos */}
      <ProductCategoriesSection 
        onOpenQuote={onOpenQuote} 
        onSelectCategory={onSelectCategory}
      />

      {/* Empaques a la Medida */}
      <CustomPackagesSection onOpenQuote={onOpenQuote} />

      {/* Contacto Corporativo */}
      <ContactSection onOpenQuote={onOpenQuote} />
    </>
  );
}
