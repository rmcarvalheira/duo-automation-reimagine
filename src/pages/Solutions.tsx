
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-duo-blue mb-6">{t('solutions.title')}</h1>
            <p className="body-lg text-gray-700 mb-8">
              {t('solutions.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt={t('solutions.customProjects')}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="heading-md text-duo-blue mb-4">{t('solutions.customProjects')}</h2>
                <p className="body-md text-gray-700 mb-6">
                  {t('solutions.customDescription1')}
                </p>
                <p className="body-md text-gray-700">
                  {t('solutions.customDescription2')}
                </p>
              </div>
            </div>
            
            <h2 className="heading-md text-duo-blue mb-8">{t('solutions.howWeDevelop')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">1</div>
                <h3 className="font-bold text-lg mb-3">{t('solutions.analysis')}</h3>
                <p className="text-gray-700">
                  {t('solutions.analysisText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">2</div>
                <h3 className="font-bold text-lg mb-3">{t('solutions.project')}</h3>
                <p className="text-gray-700">
                  {t('solutions.projectText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">3</div>
                <h3 className="font-bold text-lg mb-3">{t('solutions.implementation')}</h3>
                <p className="text-gray-700">
                  {t('solutions.implementationText')}
                </p>
              </div>
            </div>
            
            <div className="bg-duo-blue text-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">{t('solutions.sectorsWeServe')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.sucroenergetic')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.food')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.agroindustrial')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.bioenergy')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.steel')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>{t('solutions.sectors.automotive')}</span>
                </div>
              </div>
            </div>
            
            {/* Solution Inquiry Form */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="heading-md text-duo-blue mb-6">{t('solutions.requestCustomSolution')}</h2>
              <p className="body-md text-gray-700 mb-8">
                {t('solutions.requestDescription')}
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('solutions.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('solutions.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('solutions.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('solutions.sector')}
                  </label>
                  <select
                    id="sector"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  >
                    <option value="">{t('solutions.select')}</option>
                    <option value="sucroenergético">{t('solutions.sectors.sucroenergetic')}</option>
                    <option value="alimentício">{t('solutions.sectors.food')}</option>
                    <option value="agroindustrial">{t('solutions.sectors.agroindustrial')}</option>
                    <option value="bioenergia">{t('solutions.sectors.bioenergy')}</option>
                    <option value="siderúrgico">{t('solutions.sectors.steel')}</option>
                    <option value="automotivo">{t('solutions.sectors.automotive')}</option>
                    <option value="outro">{t('contact.segments.other')}</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('solutions.needDescription')}
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    placeholder={t('solutions.needPlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <Button className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 py-6 text-lg">
                    {t('solutions.sendRequest')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
