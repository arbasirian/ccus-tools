import React from 'react';
import { Text } from './Text';
import { Button } from './Button';
import styled from 'styled-components';
import BG from '../static/image-2.webp';
import { scrollToSection } from '../utils';

const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;

  .text-wrapper {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.5);
    }

    .text-wrapper {
      position: relative;
      z-index: 1;
    }
  }
`;

const HeroContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home">
      <HeroContainer className="container">
        <div className="text-wrapper">
          <Text variant="title1">
            Your Trusted Partner for Carbon &amp; Energy Equipment Sourcing
          </Text>
          <Text variant="body">
            From downhole tools to surface facilities and CCUS technologies, we connect your project
            with reliable global suppliers
          </Text>
          <Flex>
            <Button variant="primary" onClick={() => scrollToSection('categories')}>
              Explore Equipment
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')}>
              Get a Quote
            </Button>
          </Flex>
        </div>
      </HeroContainer>
    </SectionWrapper>
  );
};
