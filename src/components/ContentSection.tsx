import React from 'react';
import { Text } from './Text';
import styled from 'styled-components';
import { useDeviceLayout } from '../hooks';

const SectionWrapper = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  .image-container {
    height: 50vh;
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }
  }
  .content-container {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    height: 100%;
    padding: 20px;
  }
  @media (min-width: 992px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    .image-container {
      height: 80vh;
    }
    .content-container {
      padding: ${({ reverse }) => (reverse ? '20px 50px 20px 20px' : '20px 20px 20px 50px')};
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 500px;
      height: 100%;
      padding: 20px;
    }
  }
`;

interface Props {
  id: string;
  image: string;
  title: string;
  titleColor?: string;
  description: React.ReactNode;
  reverse?: boolean;
}
export const ContentSection: React.FC<Props> = ({
  id,
  image,
  title,
  titleColor,
  description,
  reverse = false,
}) => {
  const { isMobile } = useDeviceLayout();

  return (
    <SectionWrapper id={id} reverse={reverse}>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div>
        <div className="content-container">
          <Text variant={isMobile ? 'title2' : 'title1'} color={titleColor}>
            {title}
          </Text>
          <Text variant="body">{description}</Text>
        </div>
      </div>
    </SectionWrapper>
  );
};
