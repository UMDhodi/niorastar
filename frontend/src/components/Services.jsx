import React from 'react';
import { TrendingUp, Camera, Globe, Palette, Film, Sparkles, BarChart3 } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  TrendingUp: TrendingUp,
  Camera: Camera,
  Globe: Globe,
  Palette: Palette,
  Film: Film,
  Sparkles: Sparkles,
  BarChart3: BarChart3
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Services That Drive Results</h2>
          <p className="section-subtitle">Everything you need to build, grow, and scale your business</p>
        </div>

        <div className="services-grid">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <h4 className="service-subheading">{service.subheading}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
