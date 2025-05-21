
import React from 'react';

const Clients = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="heading-xl text-duo-blue mb-6">Clientes & Cases</h1>
            <p className="body-lg text-gray-700">
              Conheça as empresas que confiam nas soluções da Duo Automation e os resultados que alcançaram
            </p>
          </div>
          
          <div className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Raízen</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">São Martinho</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Cocal</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Delta</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Tereos</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Santa Cruz</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Usina Lins</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">São Manoel</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Cofco</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">USJ S.João</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Ipiranga</span>
              </div>
              <div className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-700">Adecoagro</span>
              </div>
            </div>
          </div>
          
          <h2 className="heading-lg text-duo-blue mb-8 text-center">Casos de Sucesso</h2>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-duo-blue p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Usina São Martinho</h3>
                  <p className="text-xl mb-6">Aumento de eficiência e segurança com o Robô EVA</p>
                  
                  <div className="mb-6">
                    <h4 className="text-duo-yellow font-medium mb-2">Desafio:</h4>
                    <p className="text-gray-300">
                      A limpeza manual dos evaporadores expunha funcionários a riscos à saúde e 
                      segurança, além de ter baixa eficiência e alto tempo de parada.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-duo-yellow font-medium mb-2">Solução:</h4>
                    <p className="text-gray-300">
                      Implementação do Robô EVA para automação completa do processo de limpeza 
                      dos evaporadores, eliminando a presença humana em ambiente insalubre.
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="font-bold text-xl mb-6 text-duo-blue">Resultados:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">75%</p>
                      <p className="text-gray-600">Redução no tempo de parada</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">100%</p>
                      <p className="text-gray-600">Eliminação de exposição humana</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">95%</p>
                      <p className="text-gray-600">Eficácia na limpeza</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">1.2M</p>
                      <p className="text-gray-600">Economia anual estimada (R$)</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic border-l-4 border-duo-yellow pl-4 text-gray-700">
                    "A implementação do Robô EVA transformou completamente nosso processo de manutenção, 
                    reduzindo custos e, mais importante, eliminando os riscos à saúde dos nossos colaboradores."
                    <footer className="mt-2 font-medium">— Diretor de Operações, Usina São Martinho</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:order-2 bg-duo-blue p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Raízen</h3>
                  <p className="text-xl mb-6">Monitoramento em tempo real com Duo Connect</p>
                  
                  <div className="mb-6">
                    <h4 className="text-duo-yellow font-medium mb-2">Desafio:</h4>
                    <p className="text-gray-300">
                      Falta de informações precisas e em tempo real sobre os parâmetros da moenda, 
                      dificultando a tomada de decisões e a antecipação de problemas.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-duo-yellow font-medium mb-2">Solução:</h4>
                    <p className="text-gray-300">
                      Implementação do sistema Duo Connect em todas as moendas, permitindo 
                      o monitoramento integral e em tempo real de múltiplos parâmetros.
                    </p>
                  </div>
                </div>
                
                <div className="md:order-1 p-8">
                  <h4 className="font-bold text-xl mb-6 text-duo-blue">Resultados:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">23%</p>
                      <p className="text-gray-600">Aumento na produtividade</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">68%</p>
                      <p className="text-gray-600">Redução em paradas não programadas</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">15%</p>
                      <p className="text-gray-600">Economia de energia</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg text-center">
                      <p className="text-3xl font-bold text-duo-blue mb-2">3.5M</p>
                      <p className="text-gray-600">Ganho financeiro anual (R$)</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic border-l-4 border-duo-yellow pl-4 text-gray-700">
                    "O Duo Connect nos colocou em outro patamar de controle operacional. A visibilidade 
                    que temos agora permite otimizações que antes eram impossíveis de implementar."
                    <footer className="mt-2 font-medium">— Gerente Industrial, Raízen</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
