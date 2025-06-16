
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'robo-slim',
    name: 'Robô Slim',
    tagline: 'Robô para chapisco com eletrodo',
    description: 'Solução totalmente autônoma para chapisco com eletrodo, proporcionando economia média de 50% de consumível e maior segurança nas operações.',
    image: '/lovable-uploads/5d74b1e9-2a75-4c71-810d-5ea4c9954ea8.png',
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
    name: 'Robô EVA',
    tagline: 'Robô para limpeza de evaporadores',
    description: 'Garantia de limpeza completa de todos os furos de evaporadores de forma 100% automática em menos de 12 horas, eliminando a necessidade de presença humana em ambientes insalubres.',
    image: '/lovable-uploads/f740303f-56e4-4f3b-8408-a73106f9904b.png',
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
    name: 'Duo Connect',
    tagline: 'Monitoramento online da moenda',
    description: 'Sistema completo para monitoramento online em tempo real dos parâmetros da moenda, acessível por PC, celular ou tablet, permitindo a visualização simultânea de várias moendas.',
    image: '/lovable-uploads/bd0964d7-fc0f-45ee-ad3c-dd301a2ade8e.png',
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
    name: 'Robô Picker',
    tagline: 'Robô para envase e paletização de açúcar',
    description: 'Solução completa para envase e paletização de açúcar, com alimentador automático de sacos, sistema de verificação dupla de pesagem e relatórios de operação na nuvem.',
    image: '/lovable-uploads/d334d8f4-79fb-4870-a445-fa842054c005.png',
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

const Products = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="heading-xl text-duo-blue mb-6">Nossos Produtos</h1>
            <p className="body-lg text-gray-700">
              Conheça as soluções de automação desenvolvidas pela Duo para aumentar a produtividade e segurança da sua indústria
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
                    <h3 className="font-semibold mb-3">Características:</h3>
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
                      Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
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
