
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import UpscaledImage from '../components/UpscaledImage';

const About = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-duo-blue mb-6">{t('about.title')}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="/lovable-uploads/12b14934-fe26-4359-a5e7-5e372359ccae.png" 
                  alt={t('about.title')} 
                  className="rounded-lg shadow-lg w-full h-auto" 
                />
              </div>
              <div>
                <p className="body-lg mb-4">
                  {t('about.description1')}
                </p>
                <p className="body-md text-gray-700">
                  {t('about.description2')}
                </p>
              </div>
            </div>
            
            <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="heading-md text-duo-blue mb-6">{t('about.mission')}</h2>
              <p className="body-md text-gray-700 mb-8">
                {t('about.missionText')}
              </p>
              
              <h2 className="heading-md text-duo-blue mb-6">{t('about.vision')}</h2>
              <p className="body-md text-gray-700">
                {t('about.visionText')}
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="heading-md text-duo-blue mb-6">{t('about.history')}</h2>
              <div className="space-y-6">
                <p className="body-md text-gray-700">{t('about.historyText1')}</p>
                <p className="body-md text-gray-700">
                  {t('about.historyText2')}
                </p>
                <p className="body-md text-gray-700">
                  {t('about.historyText3')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">30+</div>
                <p className="text-gray-700">{t('about.yearsMarket')}</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">50+</div>
                <p className="text-gray-700">{t('about.clientsServed')}</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">7</div>
                <p className="text-gray-700">{t('about.servicePoles')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-duo-blue mb-8 text-center">{t('about.servicePolesTitle')}</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <img 
                src="/lovable-uploads/88efcfb8-a005-4d94-984f-9ed366a53ef9.png" 
                alt={t('about.servicePolesTitle')} 
                className="w-full h-auto rounded-lg mb-6" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Ribeiro Preto - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Presidente Prudente - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Americana – SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Igarapava – SP
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Votuporanga - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Rio Verde – GO
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Ivinhema – MS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
