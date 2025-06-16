
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
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
                Pronto para revolucionar sua produção com automação inteligente?
              </h2>
              <p className="body-md text-gray-300 mb-6">
                Converse com nossa equipe e descubra como nossas soluções podem aumentar a eficiência e segurança da sua indústria.
              </p>
            </div>
            
            <Button asChild size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 py-6 text-lg font-bold">
              <Link to="/contato">Solicite um orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
