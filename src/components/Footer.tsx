
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

const Footer = () => {
  const { submitContactForm, isLoading } = useContactForm();

  const handleFooterFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const contactData = {
      name: formData.get('nome') as string,
      email: formData.get('email') as string,
      segmento: formData.get('segmento') as string || undefined,
      message: formData.get('mensagem') as string,
    };

    const result = await submitContactForm(contactData, 'footer');
    
    if (result.success) {
      // Reset form
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <footer className="bg-duo-blue text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <img src="/lovable-uploads/52fd567d-8a0c-47bd-a3dc-60e1af2d60da.png" alt="Duo Automation Logo" className="h-12 w-auto mb-4" />
            <p className="mt-4 text-sm text-gray-300">
              Soluções de automação industrial para aumentar a produtividade e segurança da agroindústria, substituindo mão de obra por robôs em trabalhos perigosos e insalubres.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Sobre a Duo
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Clientes & Cases
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Soluções de Automação
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos/robo-slim" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Robô Slim
                </Link>
              </li>
              <li>
                <Link to="/produtos/robo-eva" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Robô EVA
                </Link>
              </li>
              <li>
                <Link to="/produtos/duo-connect" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Duo Connect
                </Link>
              </li>
              <li>
                <Link to="/produtos/robo-picker" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  Robô Picker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <span>+55 (19) 98182-9096</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <a href="mailto:contato@duo.com.br" className="hover:text-duo-yellow transition-colors">
                  contato@duo.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <address className="not-italic">Americana - SP, Brazil</address>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur">
          <h3 className="text-xl font-bold mb-4 text-duo-yellow">Fale Conosco</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleFooterFormSubmit}>
            <input type="text" name="nome" placeholder="Nome" className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" required />
            <input type="email" name="email" placeholder="E-mail" className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" required />
            <div className="md:col-span-2">
              <select name="segmento" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow">
                <option value="" disabled selected>Segmento</option>
                <option value="sucroenergético">Sucroenergético</option>
                <option value="alimentício">Alimentício</option>
                <option value="agrícola">Agrícola</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <textarea name="mensagem" placeholder="Mensagem" rows={4} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" required></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full md:w-auto px-8 py-3 bg-white text-duo-blue font-bold rounded-md hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Duo Automation. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
