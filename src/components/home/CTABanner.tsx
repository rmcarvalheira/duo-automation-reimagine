
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTABanner = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-duo-blue py-16">
      <div className="container">
        <div className="rounded-xl bg-gradient-to-r from-duo-blue to-[#003b7a] p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-duo-yellow"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="heading-lg text-white mb-4">
                {t('ctaBanner.title')}
              </h2>
              <p className="body-md text-gray-300 mb-6">
                {t('ctaBanner.subtitle')}
              </p>
            </div>
            
            <Button asChild size="lg" className="bg-white text-duo-blue hover:bg-white/90 px-8 py-6 text-lg font-bold">
              <Link to="/contato">{t('ctaBanner.requestQuote')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
