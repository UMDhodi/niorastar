import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Empowering brands with end-to-end solutions that drive growth and innovation.
          </h1>
          
          <p className="hero-subheadline">
            We build strategic digital foundations that accelerate growth, not slow it down.
          </p>

          <div className="hero-cta">
            <Button onClick={scrollToBooking} className="btn-primary btn-large">
              Book a Strategy Call
            </Button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">Trusted by 10+ brands, agencies & founders</p>
            <div className="brand-logos">
              {mockData.brandLogos.map((brand) => (
                <div key={brand.id} className="brand-logo">
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-gradient-orb"></div>
    </section>
  );
};

export default Hero;
