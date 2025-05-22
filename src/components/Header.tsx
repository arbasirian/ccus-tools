import React from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../utils';

import Logo from '../static/logo.png';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  z-index: 2;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
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
