import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Niora Star
        </div>
        
        <div className="nav-menu desktop">
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('booking')} className="nav-link">Contact</button>
        </div>

        <div className="nav-cta desktop">
          <Button onClick={() => scrollToSection('booking')} className="btn-primary">
            Book a Strategy Call
          </Button>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
          <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">Pricing</button>
          <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('booking')} className="mobile-nav-link">Contact</button>
          <Button onClick={() => scrollToSection('booking')} className="btn-primary mobile-cta">
            Book a Strategy Call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
