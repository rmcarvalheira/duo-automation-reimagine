import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

// Product data would typically come from an API or CMS
const productData = {
  'robo-slim': {
    name: 'Robô Slim',
    tagline: 'Robô para chapisco com eletrodo',
    description: 'O Robô Slim é uma solução totalmente autônoma para chapisco com eletrodo, proporcionando economia média de 50% de consumível e maior segurança nas operações de manutenção de moendas.',
    detailedDescription: 'O Robô Slim foi desenvolvido para automatizar o processo de chapisco com eletrodo em moendas de qualquer tamanho, eliminando a necessidade de intervenção manual em um ambiente de alto risco. Seu design compacto e leve permite fácil transporte e instalação, enquanto sua tecnologia avançada garante um acabamento preciso e consistente, prolongando a vida útil dos equipamentos e reduzindo o tempo de parada para manutenção.',
    image: '/lovable-uploads/5d74b1e9-2a75-4c71-810d-5ea4c9954ea8.png',
    features: ['Totalmente autônomo', 'Média de 50% de economia de consumível', 'Qualquer tamanho de moenda', 'Rolos superiores e inferiores', 'Qualquer marca de eletrodo', 'Leve – transportado com as mãos'],
    specifications: [{
      name: 'Dimensões',
      value: '120 x 40 x 35 cm'
    }, {
      name: 'Peso',
      value: '25 kg'
    }, {
      name: 'Alimentação',
      value: '220V trifásico'
    }, {
      name: 'Consumo',
      value: '3.5 kWh'
    }, {
      name: 'Interface',
      value: 'Touch screen 7"'
    }, {
      name: 'Conectividade',
      value: 'Wi-Fi, Ethernet'
    }]
  },
  'robo-eva': {
    name: 'Robô EVA',
    tagline: 'Robô para limpeza de evaporadores',
    description: 'O Robô EVA garante a limpeza completa de todos os furos de evaporadores de forma 100% automática em menos de 12 horas, eliminando a necessidade de presença humana em ambientes insalubres.',
    detailedDescription: 'O Robô EVA representa uma revolução na manutenção de evaporadores, um dos processos mais desafiadores e perigosos da indústria sucroalcooleira. Com sistema de identificação de furos obstruídos e limpeza automatizada, o EVA elimina completamente a necessidade de intervenção humana dentro das caixas de evaporação, ambiente extremamente insalubre. Além dos ganhos em segurança ocupacional, o sistema proporciona economia significativa em comparação com os métodos tradicionais de limpeza manual.',
    image: '/lovable-uploads/f740303f-56e4-4f3b-8408-a73106f9904b.png',
    features: ['Limpa todos os furos de forma 100% automático', 'Garante a limpeza completa de todos os furos em menos de 12 horas', 'Identifica furos obstruídos', 'Sem necessidade de seres humanos dentro das caixas de evaporação', 'Custo anual inferior à limpeza manual', 'Processo seguro sem exposição a risco de acidentes'],
    specifications: [{
      name: 'Sistema de movimento',
      value: 'Eixos X, A, B, C e D'
    }, {
      name: 'Cabeçote',
      value: 'Carretel duplo'
    }, {
      name: 'Base',
      value: 'Fixada no centro das caixas'
    }, {
      name: 'Tempo médio de limpeza',
      value: '8-12 horas por evaporador'
    }, {
      name: 'Precisão',
      value: '0.1mm'
    }, {
      name: 'Interface',
      value: 'Painel de controle touch'
    }]
  },
  'duo-connect': {
    name: 'Duo Connect',
    tagline: 'Monitoramento online da moenda',
    description: 'Sistema completo para monitoramento online em tempo real dos parâmetros da moenda, acessível por PC, celular ou tablet, permitindo a visualização simultânea de várias moendas.',
    detailedDescription: 'O Duo Connect é uma plataforma avançada de IoT industrial desenvolvida especificamente para o monitoramento integral de moendas. O sistema coleta e processa dados em tempo real, permitindo o acompanhamento simultâneo de múltiplos parâmetros críticos como oscilação dos rolos, temperatura, pressão e muito mais. Com interface intuitiva e acessível em diversos dispositivos, o Duo Connect transforma dados em insights acionáveis, permitindo a tomada de decisões baseada em dados concretos para otimização do processo industrial.',
    image: '/lovable-uploads/bd0964d7-fc0f-45ee-ad3c-dd301a2ade8e.png',
    features: ['Oscilação dos dois lados dos rolos', 'RPM dos rolos', 'Temperatura do óleo', 'Pressão de esmagamento', 'Nível do donnely', 'Monitoramento online em tempo real por PC, celular ou tablet', 'Visualização de várias moendas em simultâneo', 'Modo consultor para várias usinas'],
    specifications: [{
      name: 'Sensores',
      value: 'Alta precisão industrial'
    }, {
      name: 'Escala Visual',
      value: '0 a 50 mm'
    }, {
      name: 'Transmissão',
      value: 'Wireless LoRa'
    }, {
      name: 'Alcance',
      value: 'Até 15 km em linha de visão'
    }, {
      name: 'Armazenamento',
      value: 'Cloud com backup local'
    }, {
      name: 'APIs',
      value: 'REST para integração com sistemas existentes'
    }]
  },
  'robo-picker': {
    name: 'Robô Picker',
    tagline: 'Robô para envase e paletização de açúcar',
    description: 'Solução completa para envase e paletização de açúcar, com alimentador automático de sacos, sistema de verificação dupla de pesagem e relatórios de operação na nuvem.',
    detailedDescription: 'O Robô Picker é uma solução end-to-end para o processo de envase e paletização de açúcar, integrando várias etapas que tradicionalmente demandariam múltiplos equipamentos e intervenção humana constante. Com capacidade para processar até 720 sacos por hora, o sistema inclui alimentação automática, verificação dupla de peso para garantia de qualidade, e sistema de rejeição para unidades fora de conformidade. Todo o processo é monitorado e registrado na nuvem, permitindo análises detalhadas de produtividade e rastreabilidade completa.',
    image: '/lovable-uploads/d334d8f4-79fb-4870-a445-fa842054c005.png',
    features: ['Alimentador de sacos automático', 'Dobra + Selagem, alarme automático para quebra ou término do fio de algodão', 'Dupla pesagem para verificação', 'Sacos de 50kgs', '720 sacos por hora', 'Relatórios de operação na nuvem'],
    specifications: [{
      name: 'Capacidade',
      value: '720 sacos/hora'
    }, {
      name: 'Precisão de pesagem',
      value: '±10g'
    }, {
      name: 'Peso do saco',
      value: '50kg standard'
    }, {
      name: 'Potência',
      value: '12 kW'
    }, {
      name: 'Dimensões',
      value: '8.5 x 4.2 x 3.5 m'
    }, {
      name: 'Conectividade',
      value: 'Ethernet/Wi-Fi para relatórios na nuvem'
    }]
  }
};
const ProductDetail = () => {
  const {
    productId
  } = useParams();

  // Get product data based on ID
  const product = productData[productId as keyof typeof productData];

  // Handle invalid product ID
  if (!product) {
    return <div className="pt-24 section-padding">
        <div className="container">
          <h1 className="heading-lg text-duo-blue mb-6">Produto não encontrado</h1>
          <p className="mb-4">O produto que você está procurando não existe ou foi removido.</p>
          <Button asChild variant="outline">
            <Link to="/produtos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para produtos
            </Link>
          </Button>
        </div>
      </div>;
  }
  return <main className="pt-24">
      {/* Product Header */}
      <section className="bg-duo-blue text-white py-12">
        <div className="container">
          <div className="flex items-center mb-8">
            <Link to="/produtos" className="flex items-center text-gray-300 hover:text-duo-yellow transition-colors">
              <ArrowLeft className="mr-1 h-4 w-4" /> Voltar para produtos
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="heading-xl mb-3">{product.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{product.tagline}</p>
              <p className="body-lg text-gray-300">{product.description}</p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="text-duo-blue font-bold bg-duo-yellow">
                  Solicitar orçamento
                </Button>
                <Button variant="outline" className="border-white hover:bg-white text-duo-blue font-bold">
                  <Download className="mr-2 h-4 w-4" /> Baixar catálogo
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-auto object-contain max-h-80" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-duo-blue mb-6">Descrição detalhada</h2>
              <p className="body-md text-gray-700 mb-8">{product.detailedDescription}</p>
              
              <h2 className="heading-md text-duo-blue mb-6">Características</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {product.features.map((feature, index) => <li key={index} className="flex items-start">
                    <span className="text-duo-yellow text-xl mr-3 font-bold">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>)}
              </ul>
              
              <h2 className="heading-md text-duo-blue mb-6">Vídeo demonstrativo</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-gray-500">Vídeo demonstrativo não disponível</p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h2 className="heading-sm text-duo-blue mb-6">Especificações técnicas</h2>
                <div className="space-y-4">
                  {product.specifications.map((spec, index) => <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-700 font-medium">{spec.name}:</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>)}
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-white text-duo-blue hover:bg-white/90 border-2 border-duo-blue font-bold">
                    <Download className="mr-2 h-4 w-4" /> Baixar especificações técnicas
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 bg-duo-blue text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Precisa de mais informações?</h3>
                <p className="text-gray-300 mb-4">Entre em contato com nossa equipe para obter mais detalhes sobre este produto.</p>
                <Button className="w-full bg-white text-duo-blue hover:bg-white/90 font-bold">
                  Fale com um especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default ProductDetail;