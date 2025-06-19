
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const cycleLanguage = () => {
    const languages = ['pt', 'en', 'es'] as const;
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const getLanguageDisplay = () => {
    switch (language) {
      case 'pt': return 'PT';
      case 'en': return 'EN';
      case 'es': return 'ES';
      default: return 'PT';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/52fd567d-8a0c-47bd-a3dc-60e1af2d60da.png" 
            alt="Duo Automation Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/sobre" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            {t('navbar.aboutDuo')}
          </Link>
          <div className="relative group">
            <button className="flex items-center text-duo-blue hover:text-duo-blue/80 font-medium">
              {t('navbar.products')} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/produtos/robo-slim" className="block px-4 py-2 hover:bg-gray-100">
                {t('navbar.roboSlim')}
              </Link>
              <Link to="/produtos/robo-eva" className="block px-4 py-2 hover:bg-gray-100">
                {t('navbar.roboEva')}
              </Link>
              <Link to="/produtos/duo-connect" className="block px-4 py-2 hover:bg-gray-100">
                {t('navbar.duoConnect')}
              </Link>
              <Link to="/produtos/robo-picker" className="block px-4 py-2 hover:bg-gray-100">
                {t('navbar.roboPicker')}
              </Link>
            </div>
          </div>
          <Link to="/clientes" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            {t('navbar.clients')}
          </Link>
          <Link to="/solucoes" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            {t('navbar.solutions')}
          </Link>
          <Link to="/contato" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            {t('navbar.contact')}
          </Link>
          <button 
            onClick={cycleLanguage}
            className="flex items-center text-duo-blue hover:text-duo-blue/80"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{getLanguageDisplay()}</span>
          </button>
        </div>
        
        <div className="hidden lg:block">
          <Button asChild className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 font-bold">
            <Link to="/contato">{t('navbar.talkToTeam')}</Link>
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={cycleLanguage}
            className="mr-4 text-duo-blue flex items-center"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{getLanguageDisplay()}</span>
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-duo-blue z-[70] relative"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          {/* Overlay/Backdrop - clickable to close menu */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={closeMenu}
          />
          
          {/* Menu Content */}
          <div className="lg:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out pt-20">
            <div className="bg-white/98 backdrop-blur-sm shadow-xl border-t border-gray-200 h-full overflow-auto">
              <div className="container flex flex-col space-y-4 p-6">
                <Link 
                  to="/sobre" 
                  className="py-3 text-lg font-medium border-b border-gray-200 text-duo-blue hover:text-duo-blue/80 transition-colors" 
                  onClick={closeMenu}
                >
                  {t('navbar.aboutDuo')}
                </Link>
                
                <div className="py-3 text-lg font-medium border-b border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-duo-blue">{t('navbar.products')}</span>
                    <ChevronDown className="h-4 w-4 text-duo-blue" />
                  </div>
                  <div className="ml-4 flex flex-col space-y-3 mt-3">
                    <Link 
                      to="/produtos/robo-slim" 
                      className="py-2 text-duo-blue/80 hover:text-duo-blue transition-colors" 
                      onClick={closeMenu}
                    >
                      {t('navbar.roboSlim')}
                    </Link>
                    <Link 
                      to="/produtos/robo-eva" 
                      className="py-2 text-duo-blue/80 hover:text-duo-blue transition-colors" 
                      onClick={closeMenu}
                    >
                      {t('navbar.roboEva')}
                    </Link>
                    <Link 
                      to="/produtos/duo-connect" 
                      className="py-2 text-duo-blue/80 hover:text-duo-blue transition-colors" 
                      onClick={closeMenu}
                    >
                      {t('navbar.duoConnect')}
                    </Link>
                    <Link 
                      to="/produtos/robo-picker" 
                      className="py-2 text-duo-blue/80 hover:text-duo-blue transition-colors" 
                      onClick={closeMenu}
                    >
                      {t('navbar.roboPicker')}
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/clientes" 
                  className="py-3 text-lg font-medium border-b border-gray-200 text-duo-blue hover:text-duo-blue/80 transition-colors" 
                  onClick={closeMenu}
                >
                  {t('navbar.clients')}
                </Link>
                
                <Link 
                  to="/solucoes" 
                  className="py-3 text-lg font-medium border-b border-gray-200 text-duo-blue hover:text-duo-blue/80 transition-colors" 
                  onClick={closeMenu}
                >
                  {t('navbar.solutions')}
                </Link>
                
                <Link 
                  to="/contato" 
                  className="py-3 text-lg font-medium border-b border-gray-200 text-duo-blue hover:text-duo-blue/80 transition-colors" 
                  onClick={closeMenu}
                >
                  {t('navbar.contact')}
                </Link>
                
                <Button 
                  asChild 
                  className="w-full mt-6 bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90 font-bold py-3"
                >
                  <Link to="/contato" onClick={closeMenu}>{t('navbar.talkToTeam')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
