
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const InstitutionalVideo = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-duo-blue mb-4">{t('institutionalVideo.title')}</h2>
          <p className="body-md text-gray-600 max-w-3xl mx-auto">
            {t('institutionalVideo.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              {/* YouTube Iframe - Always Visible */}
              <iframe
                src="https://www.youtube.com/embed/F8rTfknqCnk?autoplay=0&controls=1&rel=0&showinfo=0&modestbranding=1"
                title="Duo Automation Institutional Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalVideo;
