import React from 'react';
import { Text } from './Text';
import { Button } from './Button';
import styled from 'styled-components';

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
    <section id="hero">
      <HeroContainer className="container">
        <div>
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
    </section>
  );
};
