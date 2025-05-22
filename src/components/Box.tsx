import React from 'react';
import styled from 'styled-components';

interface MediaProps extends BoxProps {
  mobile?: BoxProps;
  tablet?: BoxProps;
  desktop?: BoxProps;
  desktopLg?: BoxProps;
}

const Wrapper = styled.div<MediaProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: ${({ borderStyle }) => borderStyle};
  background: ${({ background }) => background};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  align-content: ${({ alignContent }) => alignContent};
  overflow: ${({ overflow }) => overflow};

  @media (min-width: 768px) {
    flex-wrap: ${({ tablet }) => tablet?.flexWrap};
  }
  @media (min-width: 992px) {
    flex-wrap: ${({ desktop }) => desktop?.flexWrap};
  }
  @media (min-width: 1200px) {
    flex-wrap: ${({ desktopLg }) => desktopLg?.flexWrap};
  }
`;

interface BoxProps {
  display?: 'flex' | 'block' | 'grid' | 'inline-flex' | 'inline-block';
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  background?: string;
  backgroundColor?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  overflow?: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement>, MediaProps {
  children: React.ReactNode;
  className?: string;
}
export const Box: React.FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
