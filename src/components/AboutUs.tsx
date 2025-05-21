import React from 'react';
import { Text } from './Text';
import AboutUsImage from '../static/about-us.webp';
import styled from 'styled-components';
import { Box } from './Box';

const SectionWrapper = styled.section`
  display: flex;
  .image-container {
    height: 80vh;
    flex: 1;
    border-radius: 0px 8px 8px 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }
  }
`;
export const AboutUs: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="image-container">
        <img src={AboutUsImage} alt="About Us" />
      </div>
      <Box flex="1">
        <Box
          padding="20px 20px 20px 50px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="500px"
          height="100%"
        >
          <Text variant="title1">
            Empowering Energy Transitions with Trusted Equipment Sourcing.
          </Text>
          <Text variant="body">
            CCUS Tools specializes in high-quality upstream oil and gas equipment sourcing, along
            with advanced CCUS solutions. Our markets are in Saudi Arabia, UAE, Qatar, and Oman to
            help streamline procurement and accelerate project timelines for energy transition and
            low carbon economy.
          </Text>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
