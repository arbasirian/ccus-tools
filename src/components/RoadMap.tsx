import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { Box } from './Box';

import image from '../static/image-1.webp';

const MissionWrapper = styled.div`
  background: #c8bff4;
  border-radius: 8px;
  padding: 24px;
  min-height: 225px;
  .title {
    color: #4e2fda;
  }
`;

const VisionWrapper = styled.div`
  border-radius: 8px;
  padding: 24px;
  background: #febfda;
  min-height: 225px;

  .title {
    color: #fb3189;
  }
`;

const ImageWrapper = styled.div`
  flex: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    max-height: 480px;
  }
`;

export const RoadMap: React.FC = () => {
  return (
    <section id="road-map">
      <div className="container">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap="24px"
        >
          <ImageWrapper>
            <img src={image} alt="road-map" />
          </ImageWrapper>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="24px"
            flex="1"
          >
            <MissionWrapper>
              <Text className="title" variant="title5">
                Mission
              </Text>
              <Text>
                To deliver technically sound, cost-effective, and timely equipment solutions by
                leveraging a global vendor network and regional expertise.
              </Text>
            </MissionWrapper>
            <VisionWrapper>
              <Text className="title" variant="title5">
                Vision
              </Text>
              <Text>
                To be the trusted sourcing partner for energy equipment across traditional and
                low-carbon markets, focusing on energy transition, CCUS &amp; hydrogen endeavors.
              </Text>
            </VisionWrapper>
          </Box>
        </Box>
      </div>
    </section>
  );
};
