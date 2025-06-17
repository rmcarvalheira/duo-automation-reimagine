
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 'robo-slim',
      name: t('productOverview.roboSlim.name'),
      tagline: 'Robô para chapisco com eletrodo',
      description: t('productOverview.roboSlim.description'),
      image: '/lovable-uploads/37d70281-7c79-4b39-a5c7-3ff018f6c0c1.png',
      features: [
        'Totalmente autônomo',
        'Média de 50% de economia de consumível',
        'Qualquer tamanho de moenda',
        'Rolos superiores e inferiores',
        'Qualquer marca de eletrodo',
        'Leve – transportado com as mãos',
      ]
    },
    {
      id: 'robo-eva',
      name: t('productOverview.roboEva.name'),
      tagline: 'Robô para limpeza de evaporadores',
      description: t('productOverview.roboEva.description'),
      image: '/lovable-uploads/79924496-c228-4b3e-9a6e-3cd2d97ee48a.png',
      features: [
        'Limpa todos os furos de forma 100% automático',
        'Garante a limpeza completa de todos os furos em menos de 12 horas',
        'Identifica furos obstruídos',
        'Sem necessidade de seres humanos dentro das caixas de evaporação',
        'Custo anual inferior à limpeza manual',
        'Processo seguro sem exposição a risco de acidentes',
      ]
    },
    {
      id: 'duo-connect',
      name: t('productOverview.duoConnect.name'),
      tagline: 'Monitoramento online da moenda',
      description: t('productOverview.duoConnect.description'),
      image: '/lovable-uploads/f587cc4f-5b62-462f-9ebb-bfb99a0b8ee6.png',
      features: [
        'Oscilação dos dois lados dos rolos',
        'RPM dos rolos',
        'Temperatura do óleo',
        'Pressão de esmagamento',
        'Nível do donnely',
        'Monitoramento online em tempo real por PC, celular ou tablet',
        'Visualização de várias moendas em simultâneo',
        'Modo consultor para várias usinas',
      ]
    },
    {
      id: 'robo-picker',
      name: t('productOverview.roboPicker.name'),
      tagline: 'Robô para envase e paletização de açúcar',
      description: t('productOverview.roboPicker.description'),
      image: '/lovable-uploads/c45da574-cf7d-4bda-ae96-35e63d3e273f.png',
      features: [
        'Alimentador de sacos automático',
        'Dobra + Selagem, alarme automático para quebra ou término do fio de algodão',
        'Dupla pesagem para verificação',
        'Sacos de 50kgs',
        '720 sacos por hora',
        'Relatórios de operação na nuvem',
      ]
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="heading-xl text-duo-blue mb-6">{t('products.title')}</h1>
            <p className="body-lg text-gray-700">
              {t('products.subtitle')}
            </p>
          </div>
          
          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto object-contain max-h-80"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="heading-md text-duo-blue mb-2">{product.name}</h2>
                  <p className="text-lg font-medium text-gray-600 mb-4">{product.tagline}</p>
                  <p className="body-md text-gray-700 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">{t('products.features')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-duo-yellow mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="bg-white text-duo-blue hover:bg-white/90 border-2 border-duo-blue font-bold">
                    <Link to={`/produtos/${product.id}`}>
                      {t('products.seeDetails')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
