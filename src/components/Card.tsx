import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import styled from 'styled-components';

const BaseCard = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
`;

const IconCard = styled(BaseCard)`
  padding: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 220px;
  .icon-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    color: #027360;
    transition: all 0.2s ease;
  }
  &:hover {
    .icon-wrapper {
      background-color: #027360;
      color: #fff;
    }
  }
`;

const ImageCard = styled(BaseCard)`
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
  description: React.ReactNode;
}

export const Card: React.FC<Props> = ({ icon, image, title, description }) => {
  if (icon) {
    return (
      <IconCard>
        <div className="icon-wrapper">{icon}</div>
        <Text variant="title4">{title}</Text>
        <Text>{description}</Text>
      </IconCard>
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
