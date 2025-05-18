import React from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button<{ isFullWidth: boolean }>`
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  padding: 8px 16px;
  transition: all 0.4s;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  min-height: 54px;
  &.primary {
    background: #4e2fda;
    color: #fff;
    border: 1px solid #4e2fda;
  }
  &.secondary {
    background: #fff;
    color: #4e2fda;
    border: 1px solid #4e2fda;
  }
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
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
