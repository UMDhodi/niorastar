import React from 'react';
import { RefreshCw, Zap, Users } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  RefreshCw: RefreshCw,
  Zap: Zap,
  Users: Users
};

const Features = () => {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why You'll Love Us</h2>
          <p className="section-subtitle">Premium service, delivered with care</p>
        </div>

        <div className="features-grid">
          {mockData.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
