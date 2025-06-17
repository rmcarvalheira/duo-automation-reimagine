
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductOverview = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: t('productOverview.roboSlim.name'),
      description: t('productOverview.roboSlim.description'),
      image: '/lovable-uploads/37d70281-7c79-4b39-a5c7-3ff018f6c0c1.png',
      slug: 'robo-slim',
    },
    {
      name: t('productOverview.roboEva.name'),
      description: t('productOverview.roboEva.description'),
      image: '/lovable-uploads/79924496-c228-4b3e-9a6e-3cd2d97ee48a.png',
      slug: 'robo-eva',
    },
    {
      name: t('productOverview.duoConnect.name'),
      description: t('productOverview.duoConnect.description'),
      image: '/lovable-uploads/f587cc4f-5b62-462f-9ebb-bfb99a0b8ee6.png',
      slug: 'duo-connect',
    },
    {
      name: t('productOverview.roboPicker.name'),
      description: t('productOverview.roboPicker.description'),
      image: '/lovable-uploads/c45da574-cf7d-4bda-ae96-35e63d3e273f.png',
      slug: 'robo-picker',
    },
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-duo-blue mb-4">{t('productOverview.title')}</h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            {t('productOverview.subtitle')}
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
                  {t('productOverview.seeMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 font-bold">
            <Link to="/produtos">{t('productOverview.seeAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
