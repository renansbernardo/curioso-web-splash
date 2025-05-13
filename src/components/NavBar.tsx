
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            CURIOSO
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'}`}>
            Sobre
          </a>
          <a href="#features" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'}`}>
            Recursos
          </a>
          <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'}`}>
            Contato
          </a>
          <Button variant="outline" className={`rounded-full px-6 ${
            isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
          }`}>
            Começar
          </Button>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
