import React from 'react';
import UpscaledImage from '../components/UpscaledImage';
const About = () => {
  return <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-duo-blue mb-6">Sobre a Duo Automation</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img src="/lovable-uploads/12b14934-fe26-4359-a5e7-5e372359ccae.png" alt="Sede da Duo Automation" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
              <div>
                <p className="body-lg mb-4">
                  A Duo Automation é líder em soluções de automação industrial para o setor sucroenergético, 
                  desenvolvendo tecnologias que aumentam a produtividade e segurança nas usinas.
                </p>
                <p className="body-md text-gray-700">
                  Nossa empresa nasceu da necessidade de trazer inovação para o setor agroindustrial brasileiro, 
                  desenvolvendo robôs e sistemas que substituem mão de obra humana em trabalhos perigosos e insalubres.
                </p>
              </div>
            </div>
            
            <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="heading-md text-duo-blue mb-6">Missão</h2>
              <p className="body-md text-gray-700 mb-8">
                Aumentar a produtividade da agroindústria e salvar vidas substituindo mão de obra por robôs em trabalhos 
                perigosos e insalubres
              </p>
              
              <h2 className="heading-md text-duo-blue mb-6">Visão</h2>
              <p className="body-md text-gray-700">
                Ser a maior empresa de robótica da América Latina
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="heading-md text-duo-blue mb-6">Nossa História</h2>
              <div className="space-y-6">
                <p className="body-md text-gray-700">Fundada em 1992, a Duo Automation começou com foco em desenvolver soluções específicas para os desafios do setor sucroenergético brasileiro. Ao longo dos anos, expandimos nosso portfólio de produtos para atender diversas necessidades da agroindústria.</p>
                <p className="body-md text-gray-700">
                  Nossa equipe multidisciplinar de engenheiros, programadores e técnicos trabalha constantemente no 
                  desenvolvimento de novas tecnologias que possam aumentar a eficiência, segurança e produtividade 
                  de nossos clientes.
                </p>
                <p className="body-md text-gray-700">
                  Hoje, a Duo Automation é reconhecida como pioneira no segmento de robótica para o setor sucroenergético, 
                  com produtos patenteados e uma base de clientes que inclui as principais usinas e grupos do Brasil.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">30+</div>
                <p className="text-gray-700">Anos de mercado</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">50+</div>
                <p className="text-gray-700">Clientes atendidos</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl text-duo-yellow font-bold mb-2">7</div>
                <p className="text-gray-700">Polos de atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-duo-blue mb-8 text-center">Polos de Atendimento</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <UpscaledImage src="/lovable-uploads/88efcfb8-a005-4d94-984f-9ed366a53ef9.png" alt="Mapa dos polos de atendimento" className="w-full h-auto rounded-lg mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Ribeiro Preto - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Presidente Prudente - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Americana – SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Igarapava – SP
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Votuporanga - SP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Rio Verde – GO
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-duo-blue mr-2"></span>
                    Ivinhema – MS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default About;