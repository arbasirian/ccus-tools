import React from 'react';
import './styles.css';

import {
  Categories,
  ContactSection,
  Customers,
  Header,
  HeroSection,
  WhatSetsUsApart,
  Footer,
  ContentSection,
} from '../components';

import AboutUsImage from '../static/about-us.webp';
import MissionImage from '../static/mission.webp';
import VisionImage from '../static/vision.webp';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Customers />
      <div className="bg-wrapper">
        <Categories />
        <ContentSection
          id="about"
          image={AboutUsImage}
          title="Empowering Energy Transitions with Trusted Equipment Sourcing."
          description="CCUS Tools specializes in high-quality upstream oil and gas equipment sourcing, along
            with advanced CCUS solutions. Our markets are in Saudi Arabia, UAE, Qatar, and Oman to
            help streamline procurement and accelerate project timelines for energy transition and
            low carbon economy."
        />
        <WhatSetsUsApart />
        <div>
          <ContentSection
            id="vision"
            reverse
            image={VisionImage}
            title="Our Vision"
            description="To be the trusted sourcing partner for energy equipment across traditional and
            low-carbon markets, focusing on energy transition, CCUS & hydrogen endeavors."
          />
          <ContentSection
            id="mission"
            image={MissionImage}
            title="Our Mission"
            description="To deliver technically sound, cost-effective, and timely equipment solutions by
            leveraging a global vendor network and regional expertise."
          />
        </div>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};
