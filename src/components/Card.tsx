import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import styled from 'styled-components';

const ImageCard = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

interface Props {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
}

export const Card: React.FC<Props> = ({ icon, image, title, description }) => {
  if (icon) {
    return (
      <Box borderRadius="8px">
        <Box>{icon}</Box>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Box>
    );
  }
  if (image) {
    return (
      <ImageCard>
        <Box>
          <img src={image} alt={title} />
        </Box>
        <Box padding="24px">
          <Text variant="title4">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </ImageCard>
    );
  }

  return null;
};
