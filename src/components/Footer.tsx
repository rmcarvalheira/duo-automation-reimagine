
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const {
    submitContactForm,
    isLoading
  } = useContactForm();

  const handleFooterFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get('nome') as string,
      email: formData.get('email') as string,
      segmento: formData.get('segmento') as string || undefined,
      message: formData.get('mensagem') as string
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
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.aboutDuo')}
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.products')}
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.clients')}
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos/robo-slim" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.roboSlim')}
                </Link>
              </li>
              <li>
                <Link to="/produtos/robo-eva" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.roboEva')}
                </Link>
              </li>
              <li>
                <Link to="/produtos/duo-connect" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.duoConnect')}
                </Link>
              </li>
              <li>
                <Link to="/produtos/robo-picker" className="text-gray-300 hover:text-duo-yellow transition-colors">
                  {t('navbar.roboPicker')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <span>+55 (19) 98182-9096</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-duo-yellow" />
                <a href="mailto:contato@duo.com.br" className="hover:text-duo-yellow transition-colors">marcos.calebe@duo.com.br</a>
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
          <h3 className="text-xl font-bold mb-4 text-duo-yellow">{t('footer.talkToUs')}</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleFooterFormSubmit}>
            <input 
              type="text" 
              name="nome" 
              placeholder={t('footer.name')} 
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder={t('footer.email')} 
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" 
              required 
            />
            <div className="md:col-span-2">
              <select 
                name="segmento" 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow"
              >
                <option value="" disabled selected>{t('footer.segment')}</option>
                <option value="sucroenergético">{t('footer.segments.sucroenergetic')}</option>
                <option value="alimentício">{t('footer.segments.food')}</option>
                <option value="agrícola">{t('footer.segments.agricultural')}</option>
                <option value="outro">{t('footer.segments.other')}</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <textarea 
                name="mensagem" 
                placeholder={t('footer.message')} 
                rows={4} 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-duo-yellow" 
                required
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full md:w-auto px-8 py-3 bg-white text-duo-blue font-bold rounded-md hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? t('footer.sending') : t('footer.sendMessage')}
              </button>
            </div>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Duo Automation. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
