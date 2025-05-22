import React from 'react';
import './styles.css';

import {
  Categories,
  ContactSection,
  Header,
  HeroSection,
  WhatSetsUsApart,
  Footer,
  ContentSection,
} from '../components';

import AboutUsImage from '../static/about-us.webp';
import MissionImage from '../static/mission.webp';
import VisionImage from '../static/vision.webp';
import styled from 'styled-components';

const MVContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (min-width: 992px) {
    gap: 0;
  }
`;

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <Customers /> */}
      <div className="bg-wrapper">
        <Categories />
        <ContentSection
          id="about"
          image={AboutUsImage}
          title="Empowering Energy Transitions with Trusted Equipment Sourcing."
          description={
            <>
              With 20 years of field operations experience in the GCC, CCUS Tools specializes in
              sourcing high-quality upstream oil and gas equipment, along with advanced carbon
              capture, utilization, and storage (CCUS) solutions. We serve markets in{' '}
              <b>Saudi Arabia, the UAE, Qatar, and Oman</b>—helping clients streamline procurement
              and accelerate project timelines to support the energy transition and a low-carbon
              economy. Our global network provides first-hand access to equipment stockpiles,
              ensuring fast and reliable delivery.
            </>
          }
        />
        <WhatSetsUsApart />
        <MVContainer>
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
        </MVContainer>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};
