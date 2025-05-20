import React from 'react';
import { Text } from './Text';
import { Button } from './Button';
import styled from 'styled-components';
import BG from '../static/image-2.webp';

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
`;

const HeroContainer = styled.div`
  padding: 64px 0;
`;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="hero">
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
            <Button variant="primary">Explore Equipment</Button>
            <Button variant="secondary">Get a Quote</Button>
          </Flex>
        </div>
      </HeroContainer>
    </SectionWrapper>
  );
};
