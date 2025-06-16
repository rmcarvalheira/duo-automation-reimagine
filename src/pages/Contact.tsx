import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = `Contato do site - ${formData.get('interesse') || 'Geral'}`;
    const body = `
Nome: ${formData.get('name')}
Email: ${formData.get('email')}
Telefone: ${formData.get('phone')}
Empresa: ${formData.get('company')}
Segmento: ${formData.get('segmento')}
Interesse: ${formData.get('interesse')}

Mensagem:
${formData.get('message')}
    `.trim();
    const mailtoLink = `mailto:contato@duo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519981829096"; // Formato internacional sem símbolos
    const message = "Olá! Gostaria de saber mais sobre as soluções da Duo Automation.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="heading-xl text-duo-blue mb-6">Entre em Contato</h1>
              <p className="body-lg text-gray-700 max-w-3xl mx-auto">
                Estamos à disposição para esclarecer suas dúvidas, receber sugestões e ajudar a encontrar a melhor solução para sua indústria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="heading-md text-duo-blue mb-6">Envie uma mensagem</h2>
                
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo
                      </label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none" required />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-1">
                      Segmento
                    </label>
                    <select id="segmento" name="segmento" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none">
                      <option value="">Selecione</option>
                      <option value="sucroenergético">Sucroenergético</option>
                      <option value="alimentício">Alimentício</option>
                      <option value="agrícola">Agrícola</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1">
                      Interesse
                    </label>
                    <select id="interesse" name="interesse" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none">
                      <option value="">Selecione</option>
                      <option value="roboslim">Robô Slim</option>
                      <option value="roboeva">Robô EVA</option>
                      <option value="duoconnect">Duo Connect</option>
                      <option value="robopicker">Robô Picker</option>
                      <option value="solucoes">Soluções Customizadas</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-duo-yellow focus:outline-none" placeholder="Escreva sua mensagem aqui" required></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 px-8 py-6 text-lg">
                      Enviar mensagem
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="font-bold text-lg mb-4 text-duo-blue">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <PhoneCall className="h-5 w-5 mr-3 mt-1 text-duo-yellow flex-shrink-0" />
                      <div className="space-y-2">
                        <p className="font-medium">Telefones:</p>
                        <div className="text-gray-700 space-y-1">
                          <p><span className="font-medium">Administrativo:</span> (19) 3455-7352</p>
                          <p><span className="font-medium">Vendas:</span> (19) 98182-9096</p>
                          <p><span className="font-medium">Suporte técnico:</span> (19) 99628-8687</p>
                          <p><span className="font-medium">Suprimentos:</span> (19) 99840-7086</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-1 text-duo-yellow" />
                      <div>
                        <p className="font-medium">E-mail:</p>
                        <a href="mailto:contato@duo.com.br" className="text-gray-700 hover:text-duo-blue transition-colors">
                          contato@duo.com.br
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-duo-yellow" />
                      <div>
                        <p className="font-medium">Matriz:</p>
                        <address className="not-italic text-gray-700">Americana - SP, Brasil</address>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-duo-blue text-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg mb-4">Atendimento Rápido</h3>
                  <p className="mb-4 text-gray-300">
                    Precisa de uma resposta rápida? Entre em contato pelo WhatsApp e fale diretamente com nossa equipe.
                  </p>
                  <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" className="h-5 w-5 mr-2" fill="white">
                      <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.91-.73-1.284-.4-.188-1.065-2.873-1.38-3.132-.312-.258-.73-.188-1.546-.188-.8 0-1.784.22-2.463.644-.536.33-1.635 1.593-1.635 3.88 0 2.287 1.747 4.5 1.99 4.785 1.146 1.442 2.765 2.615 4.754 3.407.647.258 2.45 1.032 3.25 1.032.63 0 2.6-1.032 2.6-1.89 0-.473-.107-.394-.287-.587-.537-.143-2.764-.816-3.063-.946-.3-.076-.534-.253-.6-.516a.932.932 0 0 1 .3-.73c.152-.152 1.253-.994 1.35-1.093.106-.258.13-.645-.215-.946a.777.777 0 0 0-.188-.15l-.36-.017z" />
                      <path d="M16.063 0C7.14 0 0 7.076 0 16c0 2.695.65 5.255 1.926 7.5L.258 31.246c-.14.455.194.857.645.857.112 0 .232-.025.336-.08l7.79-3.46c2.21 1.2 4.72 1.8 7.25 1.8 8.924 0 16.063-7.076 16.063-16S24.988 0 16.063 0zm0 30c-2.374 0-4.768-.587-6.874-1.7a.616.616 0 0 0-.546-.047l-6.42 2.85 2.86-6.283a.623.623 0 0 0-.054-.554C3.614 22.207 2.938 19.288 2.938 16 2.938 8.7 8.763 2.938 16.063 2.938 23.364 2.938 30 8.7 30 16s-5.637 14-13.937 14z" fill-rule="evenodd" />
                    </svg>
                    Falar via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="heading-md text-duo-blue mb-6 text-center">Nossa Localização</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234567890123!2d-47.30123456789012!3d-22.73456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8822b123456789%3A0x123456789abcdef0!2sRua%20do%20Serralheiro%2C%20197%20-%20Jardim%20Werner%20Plaas%2C%20Americana%20-%20SP%2C%2013478-731%2C%20Brazil!5e0!3m2!1sen!2sus!4v1652365674360!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="Duo Automation Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg mb-4">Polos de Atendimento</h3>
              <p className="mb-6">
                Contamos com equipes técnicas em diversos polos para atendimento rápido e eficiente.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-md shadow-sm">Ribeiro Preto - SP</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Presidente Prudente - SP</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Americana – SP</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Igarapava – SP</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Votuporanga - SP</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Rio Verde – GO</div>
                <div className="p-3 bg-white rounded-md shadow-sm">Ivinhema – MS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
