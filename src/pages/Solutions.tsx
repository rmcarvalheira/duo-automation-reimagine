import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-duo-blue mb-6">Soluções de Automação</h1>
            <p className="body-lg text-gray-700 mb-8">
              Além dos produtos em linha, a Duo Automation desenvolve soluções customizadas para as necessidades específicas da sua indústria.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Engenheiros de automação trabalhando em desenvolvimento de soluções industriais"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="heading-md text-duo-blue mb-4">Projetos sob medida</h2>
                <p className="body-md text-gray-700 mb-6">
                  Nossa equipe de engenheiros e técnicos altamente qualificados desenvolve soluções 
                  personalizadas para automatizar processos específicos da sua indústria, considerando 
                  suas particularidades e necessidades únicas.
                </p>
                <p className="body-md text-gray-700">
                  Cada projeto é tratado de forma exclusiva, desde a análise inicial até a implementação 
                  e suporte contínuo, garantindo que a solução proposta atenda perfeitamente aos 
                  desafios e objetivos do seu negócio.
                </p>
              </div>
            </div>
            
            <h2 className="heading-md text-duo-blue mb-8">Como desenvolvemos soluções personalizadas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">1</div>
                <h3 className="font-bold text-lg mb-3">Análise</h3>
                <p className="text-gray-700">
                  Estudo detalhado do processo atual, identificação de gargalos e oportunidades de melhoria.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">2</div>
                <h3 className="font-bold text-lg mb-3">Projeto</h3>
                <p className="text-gray-700">
                  Desenvolvimento do conceito da solução, criação de protótipos e validação técnica.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-duo-yellow/20 text-duo-blue rounded-full font-bold text-xl mb-4">3</div>
                <h3 className="font-bold text-lg mb-3">Implementação</h3>
                <p className="text-gray-700">
                  Fabricação, instalação, testes e comissionamento da solução na sua planta industrial.
                </p>
              </div>
            </div>
            
            <div className="bg-duo-blue text-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Setores que atendemos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Sucroenergético</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Alimentício</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Agroindustrial</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Bioenergia</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Siderúrgico</span>
                </div>
                <div className="flex items-center">
                  <span className="text-duo-yellow mr-2">•</span>
                  <span>Automotivo</span>
                </div>
              </div>
            </div>
            
            {/* Solution Inquiry Form */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="heading-md text-duo-blue mb-6">Solicite uma solução personalizada</h2>
              <p className="body-md text-gray-700 mb-8">
                Preencha o formulário abaixo para iniciar uma conversa sobre como podemos desenvolver uma solução de automação específica para a sua necessidade.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                    Setor de atuação
                  </label>
                  <select
                    id="sector"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="sucroenergético">Sucroenergético</option>
                    <option value="alimentício">Alimentício</option>
                    <option value="agroindustrial">Agroindustrial</option>
                    <option value="bioenergia">Bioenergia</option>
                    <option value="siderúrgico">Siderúrgico</option>
                    <option value="automotivo">Automotivo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição da necessidade
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none"
                    placeholder="Descreva o processo que deseja automatizar e os desafios atuais"
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <Button className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 py-6 text-lg">
                    Enviar solicitação
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
