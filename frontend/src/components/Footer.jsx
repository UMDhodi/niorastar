import React from 'react';
import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Niora Star</div>
            <p className="footer-tagline">
              Strategy-led design agency that helps businesses unlock revenue through conversion-optimized experiences.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="mailto:hello@niorastar.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="social-link" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-menu">
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Digital Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Product Photography</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Website Design</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Logo Design</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-menu">
              <li><button onClick={() => scrollToSection('testimonials')} className="footer-link">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="footer-link">Contact</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-menu">
              <li><a href="mailto:hello@niorastar.com" className="footer-link">hello@niorastar.com</a></li>
              <li><a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></li>
              <li><button onClick={() => scrollToSection('booking')} className="footer-link">Book a Call</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Niora Star — All Rights Reserved.</p>
          <p className="footer-credit">Design by Niora Star</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
