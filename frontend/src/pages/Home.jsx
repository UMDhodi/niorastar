import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import BookingCalendar from '../components/BookingCalendar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <BookingCalendar />
      <Footer />
    </div>
  );
};

export default Home;
