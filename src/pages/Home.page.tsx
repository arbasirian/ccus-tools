import React from 'react';
import './styles.css';

import { AboutUs, ContactSection, Customers, Header, HeroSection, RoadMap } from '../components';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Customers />
      <div className="bg-wrapper">
        <AboutUs />
        <RoadMap />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};
