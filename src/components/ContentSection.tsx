import React from 'react';
import { Text } from './Text';
import styled from 'styled-components';
import { Box } from './Box';

const SectionWrapper = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  .image-container {
    height: 80vh;
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }
  }
`;

interface Props {
  id: string;
  image: string;
  title: string;
  titleColor?: string;
  description: string;
  reverse?: boolean;
  noBorderRadius?: boolean;
}
export const ContentSection: React.FC<Props> = ({
  id,
  image,
  title,
  titleColor,
  description,
  reverse = false,
}) => {
  return (
    <SectionWrapper id={id} reverse={reverse}>
      <div className="image-container">
        <img src={image} alt={title} />
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
          <Text variant="title1" color={titleColor}>
            {title}
          </Text>
          <Text variant="body">{description}</Text>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
