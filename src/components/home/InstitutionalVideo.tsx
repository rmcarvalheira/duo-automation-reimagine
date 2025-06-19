
import React from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InstitutionalVideo = () => {
  const { t } = useLanguage();

  const handleVideoClick = () => {
    window.open('https://youtu.be/F8rTfknqCnk?si=v87gHlCSWqO6Nbji', '_blank');
  };

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
          <div className="relative group cursor-pointer" onClick={handleVideoClick}>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <img 
                src="https://img.youtube.com/vi/F8rTfknqCnk/maxresdefault.jpg"
                alt="Duo Automation Institutional Video"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                <div className="w-20 h-20 bg-duo-yellow rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-duo-blue ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Video Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Duo Automation</p>
                <h3 className="text-lg font-semibold">{t('institutionalVideo.title')}</h3>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-duo-yellow text-duo-blue font-bold rounded-lg hover:bg-duo-yellow/90 transition-colors duration-300 shadow-lg">
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                {t('institutionalVideo.watchVideo')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalVideo;
