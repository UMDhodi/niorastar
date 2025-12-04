import React from 'react';
import { Button } from './ui/button';

const CTA = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-headline">
            It’s time to turn missed opportunities into measurable growth.
          </h2>
          <p className="cta-subtext">
            We identify and eliminate the gaps that quietly drain your revenue.
          </p>
          <Button onClick={scrollToBooking} className="btn-primary btn-large">
            Book a Strategy Call
          </Button>
        </div>
        <div className="cta-gradient-orb"></div>
      </div>
    </section>
  );
};

export default CTA;
