
import React from 'react';

const clients = [
  { name: 'Raízen', id: 'raizen' },
  { name: 'São Martinho', id: 'sao-martinho' },
  { name: 'Cocal', id: 'cocal' },
  { name: 'Delta', id: 'delta' },
  { name: 'Santa Cruz', id: 'santa-cruz' },
  { name: 'Usina Lins', id: 'usina-lins' },
  { name: 'São Manoel', id: 'sao-manoel' },
  { name: 'Cofco', id: 'cofco' },
  { name: 'USJ S.João', id: 'usj' },
  { name: 'Tereos', id: 'tereos' },
  { name: 'Ipiranga', id: 'ipiranga' },
  { name: 'Adecoagro', id: 'adecoagro' }
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
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <span className="text-lg font-medium text-gray-500">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
