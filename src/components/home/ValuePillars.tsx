
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ValuePillars = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('valuePillars.innovation.title'),
      description: t('valuePillars.innovation.description'),
      icon: '🔍',
    },
    {
      title: t('valuePillars.patent.title'),
      description: t('valuePillars.patent.description'),
      icon: '📜',
    },
    {
      title: t('valuePillars.results.title'),
      description: t('valuePillars.results.description'),
      icon: '📈',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-duo-blue mb-4">{t('valuePillars.title')}</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            {t('valuePillars.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-duo-yellow transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gray-100 rounded-full mb-4 group-hover:bg-duo-yellow/10 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-duo-blue mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
