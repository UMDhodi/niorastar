import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Pricing = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">No hidden fees. No surprises. Just great work at fair prices.</p>
        </div>

        <div className="pricing-grid">
          {mockData.pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="pricing-title">{plan.title}</h3>
              <p className="pricing-description">{plan.description}</p>
              
              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <Check size={18} strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToBooking} className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
