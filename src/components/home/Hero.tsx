
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VideoBackground from '../VideoBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-duo-blue overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-duo-blue/70 z-10"></div>
        <VideoBackground 
          src="https://uaapedxgvyucrhppeeiv.supabase.co/storage/v1/object/public/videos//hero.mp4"
          fallbackSrc="/lovable-uploads/hero-video.mp4"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="heading-xl mb-6 text-white">
            {t('hero.title')}
            <span className="text-duo-yellow">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="body-lg mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 font-bold">
              <Link to="/contato">{t('hero.talkToTeam')}</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-duo-blue hover:bg-white/90 px-8 font-bold">
              <Link to="/produtos">{t('hero.knowProducts')}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - moved to bottom right */}
      <div className="hidden md:block absolute bottom-10 right-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <p className="text-white text-sm mt-2 text-center">{t('hero.scrollDown')}</p>
      </div>
    </section>
  );
};

export default Hero;
