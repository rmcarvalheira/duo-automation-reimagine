
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-duo-blue overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-duo-blue/70 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/410544653.sd.mp4?s=b8bd6953e73cc396d735f6aded249d391183dcea&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
            <Button size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8">
              Fale com nosso time
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
