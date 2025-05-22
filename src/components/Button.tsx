import React from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button<{ isFullWidth: boolean }>`
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  padding: 8px 16px;
  transition: all 0.4s;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  min-height: 54px;
  background: #027360;
  color: white;
  &:hover {
    background: #015c4f;
  }
  &.outline {
    background: transparent;
    border: 1px solid #027360;
    color: #027360;
    &:hover {
      background: rgba(2, 115, 96, 0.1);
    }
  }
  &.primary {
    background: #2a9d8f;
    color: #fff;
    border: 1px solid #2a9d8f;
    &:hover {
      background: #027360;
      border: 1px solid #027360;
    }
  }
  &.secondary {
    background: #fff;
    color: #2a9d8f;
    border: 1px solid #2a9d8f;
    &:hover {
      background: #2a9d8f;
      color: #fff;
    }
  }
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isFullWidth?: boolean;
  children: React.ReactNode;
}
export const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  isFullWidth = false,
  className,
  ...props
}) => {
  return (
    <ButtonContainer
      className={[variant, className].join(' ')}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};
