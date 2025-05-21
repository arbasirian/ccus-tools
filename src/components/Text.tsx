import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ noMargin?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &.title1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 70px;
    color: #090b0e;
    padding-bottom: 16px;
  }

  &.title2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: #090b0e;
    font-weight: 600;
    padding-bottom: 16px;
  }

  &.title3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    color: #090b0e;
    padding-bottom: 16px;
  }

  &.title4 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    color: #090b0e;
    padding-bottom: 16px;
  }

  &.title5 {
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    color: #090b0e;
    padding-bottom: 16px;
  }

  &.body {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #3d4c5e;
  }

  ${({ noMargin }) =>
    noMargin &&
    css`
      padding-bottom: 0 !important;
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color} !important;
    `}
`;

interface Props {
  children: React.ReactNode;
  variant?: 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'body';
  noMargin?: boolean;
  className?: string;
  color?: string;
}
export const Text: React.FC<Props> = ({
  children,
  variant = 'body',
  noMargin,
  className = '',
  color,
}) => {
  return (
    <Wrapper className={[variant, className].join(' ')} noMargin={noMargin} color={color}>
      {children}
    </Wrapper>
  );
};
