import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-duo-blue text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <img 
              src="/lovable-uploads/52fd567d-8a0c-47bd-a3dc-60e1af2d60da.png" 
              alt="Duo Automation Logo" 
              className="h-12 w-auto mb-4"
            />
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
                <span>+55 (16) 3512-9260</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <a href="mailto:contato@duo.com.br" className="hover:text-duo-yellow transition-colors">
                  contato@duo.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <address className="not-italic">
                  Ribeirão Preto - SP, Brazil
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur">
          <h3 className="text-xl font-bold mb-4 text-duo-yellow">Fale Conosco</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Nome" 
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow"
            />
            <input 
              type="email" 
              placeholder="E-mail" 
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow"
            />
            <div className="md:col-span-2">
              <select 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow"
              >
                <option value="" disabled selected>Segmento</option>
                <option value="sucroenergético">Sucroenergético</option>
                <option value="alimentício">Alimentício</option>
                <option value="agrícola">Agrícola</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <textarea 
                placeholder="Mensagem" 
                rows={4}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-duo-yellow text-duo-blue font-bold rounded-md hover:bg-duo-yellow/90 transition-colors"
              >
                Enviar Mensagem
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
