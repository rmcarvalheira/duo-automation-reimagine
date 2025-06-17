
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const clients = [
  { name: 'Raízen', id: 'raizen', logo: '/lovable-uploads/25f5606a-1a31-409e-adf6-b7ef7897c59e.png' },
  { name: 'São Martinho', id: 'sao-martinho', logo: '/lovable-uploads/2255b841-674b-4743-b320-b885486b2e65.png' },
  { name: 'Cocal', id: 'cocal', logo: '/lovable-uploads/13b1d487-349d-4d6f-80a1-27db24b377f1.png' },
  { name: 'Delta', id: 'delta', logo: '/lovable-uploads/77ebf72f-7706-4adf-b3b1-d0e89e349bfe.png' },
  { name: 'Santa Cruz', id: 'santa-cruz', logo: '/lovable-uploads/fc3ec48a-fa40-4ccd-986f-97af34abfa1a.png' },
  { name: 'Usina Lins', id: 'usina-lins', logo: '/lovable-uploads/88898cab-67ce-4942-8892-b141b3d03224.png' },
  { name: 'São Manoel', id: 'sao-manoel', logo: '/lovable-uploads/a6959ead-a72b-4ee0-9784-a99360b6fd35.png' },
  { name: 'Cofco', id: 'cofco', logo: '/lovable-uploads/9e94d088-6c28-4f03-89ff-c93d1908525f.png' },
  { name: 'USJ S.João', id: 'usj', logo: '/lovable-uploads/a2d5fb68-d54d-462f-847c-1320c3a0af40.png' },
  { name: 'Tereos', id: 'tereos', logo: '/lovable-uploads/69c7b437-9732-416c-8906-c6f6616670bd.png' },
  { name: 'Ipiranga', id: 'ipiranga', logo: '/lovable-uploads/6965cfba-5e60-4c9e-816f-ea02a93ed3df.png' },
  { name: 'Adecoagro', id: 'adecoagro', logo: '/lovable-uploads/ec660258-cda9-4161-8d6e-f52de71badbb.png' },
  { name: 'Viralcool', id: 'viralcool', logo: '/lovable-uploads/b44f8bb3-8d7d-473a-8925-7f0ff6b2ce74.png' },
  { name: 'Gerradinho Bio', id: 'gerradinho-bio', logo: '/lovable-uploads/088d4ba6-3832-4ce1-9139-62ced8c23fa6.png' },
  { name: 'Coa Energia', id: 'coa-energia', logo: '/lovable-uploads/869e6b10-ee4a-4ec0-8bf6-1669a112e84f.png' },
  { name: 'Jaco', id: 'jaco', logo: '/lovable-uploads/e77c2c8c-2ff5-45a5-b20f-f99ee571a675.png' },
  { name: 'Uisa', id: 'uisa', logo: '/lovable-uploads/d642ae9f-6c6b-42a0-b408-c72657524ab1.png' },
  { name: 'Zanini', id: 'zanini', logo: '/lovable-uploads/33d8c11f-6b28-4eba-8c6e-ce0b495d1820.png' },
  { name: 'CMP', id: 'cmp', logo: '/lovable-uploads/7779bb28-cd1f-462f-9e1d-b64ebc309648.png' }
];

const ClientLogos = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container">
        <h2 className="text-center text-xl text-gray-600 mb-8">{t('clientLogos.title')}</h2>
        
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100 flex items-center justify-center h-16"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`}
                  className="max-h-12 max-w-32 object-contain"
                />
              ) : (
                <span className="text-lg font-medium text-gray-500">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
