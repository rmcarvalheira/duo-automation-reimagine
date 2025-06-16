
import React from 'react';

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
  { name: 'Tereos', id: 'tereos' },
  { name: 'Ipiranga', id: 'ipiranga' },
  { name: 'Adecoagro', id: 'adecoagro', logo: '/lovable-uploads/ec660258-cda9-4161-8d6e-f52de71badbb.png' }
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container">
        <h2 className="text-center text-xl text-gray-600 mb-8">Confiado por empresas líderes do setor</h2>
        
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
