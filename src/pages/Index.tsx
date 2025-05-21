
import React from 'react';
import Hero from '@/components/home/Hero';
import ValuePillars from '@/components/home/ValuePillars';
import ProductOverview from '@/components/home/ProductOverview';
import ClientLogos from '@/components/home/ClientLogos';
import CTABanner from '@/components/home/CTABanner';

const Index = () => {
  return (
    <main>
      <Hero />
      <ValuePillars />
      <ProductOverview />
      <ClientLogos />
      <CTABanner />
    </main>
  );
};

export default Index;
