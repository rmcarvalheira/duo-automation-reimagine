
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-duo-blue overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-duo-blue/70 z-10"></div>
        <iframe 
          src="https://www.youtube.com/embed/w2hNqVOlen8?autoplay=1&mute=1&loop=1&playlist=w2hNqVOlen8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="heading-xl mb-6 text-white">
            Soluções de automação que
            <span className="text-duo-yellow"> revolucionam a agroindústria</span>
          </h1>
          <p className="body-lg mb-8 text-gray-200">
            Aumentamos a produtividade e segurança da indústria substituindo mão de obra por robôs em trabalhos perigosos e insalubres.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 font-bold">
              Fale com nosso time
            </Button>
            <Button size="lg" className="bg-white text-duo-blue hover:bg-white/90 px-8 font-bold">
              Conheça nossos produtos
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
            </div>
            <p className="text-white text-sm mt-2 text-center">Role para baixo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
