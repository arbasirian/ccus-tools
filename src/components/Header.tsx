import React from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../utils';

import Logo from '../static/logo.svg';
import { useDeviceLayout } from '../hooks';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  z-index: 2;
  border-bottom: 1px solid #e0e0e0;
  justify-content: flex-start;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  img {
    height: 30px;
  }
`;

const Link = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  transition: all 0.4s;
  padding: 0 20px;
  &:hover {
    color: #2a9d8f;
  }
`;

export const Header: React.FC = () => {
  const { isMobile } = useDeviceLayout();

  if (isMobile) {
    return (
      <Wrapper>
        <MenuContainer className="container">
          <img src={Logo} alt="CCUS Tools" />
        </MenuContainer>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <MenuContainer className="container">
        <img src={Logo} alt="CCUS Tools" />
        <Link onClick={() => scrollToSection('home')}>Home</Link>
        <Link onClick={() => scrollToSection('categories')}>Equipment</Link>
        <Link onClick={() => scrollToSection('about')}>About Us</Link>
        <Link onClick={() => scrollToSection('contact')}>Contact Us</Link>
      </MenuContainer>
    </Wrapper>
  );
};
