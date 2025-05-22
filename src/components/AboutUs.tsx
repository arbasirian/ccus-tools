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
          <Text variant="title2">
            Empowering Energy Transitions with Trusted Equipment Sourcing.
          </Text>
          <Text variant="body">
            With 20 years of field operations experience in the GCC, CCUS Tools specializes in
            sourcing high-quality upstream oil and gas equipment, along with advanced carbon
            capture, utilization, and storage (CCUS) solutions. We serve markets in Saudi Arabia,
            the UAE, Qatar, and Oman—helping clients streamline procurement and accelerate project
            timelines to support the energy transition and a low-carbon economy. Our global network
            provides first-hand access to equipment stockpiles, ensuring fast and reliable delivery.
          </Text>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
