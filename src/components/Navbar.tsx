
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('pt');

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

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'pt' ? 'en' : 'pt');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            Sobre a Duo
          </Link>
          <div className="relative group">
            <button className="flex items-center text-duo-blue hover:text-duo-blue/80 font-medium">
              Produtos <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/produtos/robo-slim" className="block px-4 py-2 hover:bg-gray-100">
                Robô Slim
              </Link>
              <Link to="/produtos/robo-eva" className="block px-4 py-2 hover:bg-gray-100">
                Robô EVA
              </Link>
              <Link to="/produtos/duo-connect" className="block px-4 py-2 hover:bg-gray-100">
                Duo Connect
              </Link>
              <Link to="/produtos/robo-picker" className="block px-4 py-2 hover:bg-gray-100">
                Robô Picker
              </Link>
            </div>
          </div>
          <Link to="/clientes" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            Clientes & Cases
          </Link>
          <Link to="/solucoes" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            Soluções de Automação
          </Link>
          <Link to="/contato" className="text-duo-blue hover:text-duo-blue/80 font-medium">
            Contato
          </Link>
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-duo-blue hover:text-duo-blue/80"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
          </button>
        </div>
        
        <div className="hidden lg:block">
          <Button className="bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90">
            Fale com nosso time
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="mr-4 text-duo-blue"
          >
            <Globe className="h-5 w-5" />
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-duo-blue"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`
        lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-20
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="container flex flex-col space-y-4 p-4">
          <Link to="/sobre" className="py-2 text-lg font-medium border-b" onClick={toggleMenu}>
            Sobre a Duo
          </Link>
          <div className="py-2 text-lg font-medium border-b">
            <div className="flex justify-between items-center mb-2">
              <span>Produtos</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="ml-4 flex flex-col space-y-2 mt-2">
              <Link to="/produtos/robo-slim" className="py-1" onClick={toggleMenu}>
                Robô Slim
              </Link>
              <Link to="/produtos/robo-eva" className="py-1" onClick={toggleMenu}>
                Robô EVA
              </Link>
              <Link to="/produtos/duo-connect" className="py-1" onClick={toggleMenu}>
                Duo Connect
              </Link>
              <Link to="/produtos/robo-picker" className="py-1" onClick={toggleMenu}>
                Robô Picker
              </Link>
            </div>
          </div>
          <Link to="/clientes" className="py-2 text-lg font-medium border-b" onClick={toggleMenu}>
            Clientes & Cases
          </Link>
          <Link to="/solucoes" className="py-2 text-lg font-medium border-b" onClick={toggleMenu}>
            Soluções de Automação
          </Link>
          <Link to="/contato" className="py-2 text-lg font-medium border-b" onClick={toggleMenu}>
            Contato
          </Link>
          <Button className="w-full mt-4 bg-duo-yellow text-duo-blue hover:bg-duo-yellow/90">
            Fale com nosso time
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
