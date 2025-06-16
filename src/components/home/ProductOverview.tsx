
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Robô Slim',
    description: 'Robô para chapisco com eletrodo, totalmente autônomo e com economia média de 50% de consumível.',
    image: '/lovable-uploads/5d74b1e9-2a75-4c71-810d-5ea4c9954ea8.png',
    slug: 'robo-slim',
  },
  {
    name: 'Robô EVA',
    description: 'Robô para limpeza de evaporadores que garante a limpeza completa de todos os furos em menos de 12 horas.',
    image: '/lovable-uploads/f740303f-56e4-4f3b-8408-a73106f9904b.png',
    slug: 'robo-eva',
  },
  {
    name: 'Duo Connect',
    description: 'Sistema de monitoramento online da moenda em tempo real, acessível por PC, celular ou tablet.',
    image: '/lovable-uploads/bd0964d7-fc0f-45ee-ad3c-dd301a2ade8e.png',
    slug: 'duo-connect',
  },
  {
    name: 'Robô Picker',
    description: 'Robô para envase e paletização de açúcar, com alimentador automático de sacos e relatórios de operação na nuvem.',
    image: '/lovable-uploads/f0e93a72-adfb-4b1c-9146-1a74969d2e47.png',
    slug: 'robo-picker',
  },
];

const ProductOverview = () => {
  return (
    <section className="section-padding gradient-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-duo-blue mb-4">Nossos Produtos</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Conheça as soluções de automação desenvolvidas pela Duo para aumentar a produtividade e segurança da sua indústria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:border-duo-yellow transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-duo-blue mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <Link 
                  to={`/produtos/${product.slug}`}
                  className="flex items-center text-duo-blue font-medium hover:text-duo-yellow transition-colors mt-auto"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 font-bold">
            <Link to="/produtos">Ver todos os produtos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
