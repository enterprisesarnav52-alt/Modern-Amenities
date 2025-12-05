import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';

interface NavbarProps {
  onNavigate: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-brand-black shadow-lg py-2' : 'bg-brand-black/90 backdrop-blur-sm text-white py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick('home')}
        >
           <img 
             src={LOGO_URL} 
             alt="Modern Amenities Logo" 
             className={`h-12 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
           />
           <span className={`font-display font-bold text-xl tracking-widest ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
             MODERN AMENITIES
           </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-brand-red transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="hover:text-brand-red transition-colors"><Search size={20} /></button>
          <button className="hover:text-brand-red transition-colors"><User size={20} /></button>
          <button className="hover:text-brand-red transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-brand-black shadow-xl border-t h-screen">
          <div className="flex flex-col p-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg font-bold uppercase hover:text-brand-red"
              >
                {item.label}
              </button>
            ))}
             <div className="flex items-center space-x-6 pt-4 border-t">
              <button className="hover:text-brand-red"><Search size={24} /></button>
              <button className="hover:text-brand-red"><User size={24} /></button>
              <button className="hover:text-brand-red"><ShoppingBag size={24} /></button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};