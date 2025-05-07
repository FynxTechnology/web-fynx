import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import Container from './Container';
import { navItems } from '../../constants/data';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-gray-100'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary">Get a Quote</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </Container>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <Container>
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="block text-gray-800 font-medium hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button variant="primary" className="w-full">Get a Quote</Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;