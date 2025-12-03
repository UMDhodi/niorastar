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
            We help businesses unlock more revenue with strategy-led websites.
          </h1>
          
          <p className="hero-subheadline">
            Your website should print money, not collect dust. We build conversion-focused experiences that turn visitors into customers in weeks, not months.
          </p>

          <div className="hero-cta">
            <Button onClick={scrollToBooking} className="btn-primary btn-large">
              Book a Strategy Call
            </Button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">Trusted by 30+ brands, agencies & founders</p>
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
