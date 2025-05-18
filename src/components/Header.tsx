import React from 'react';
import styled from 'styled-components';

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
`;

const Link = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #090b0e;
  display: inline-block;
  transition: all 0.4s;
  padding: 0 20px;
  &:hover {
    color: #4e2fda;
  }
`;

export const Header: React.FC = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };
  return (
    <Wrapper>
      <MenuContainer className="container">
        <Link onClick={() => scrollToSection('about')}>About Us</Link>
        <Link onClick={() => scrollToSection('contact')}>Contact Us</Link>
      </MenuContainer>
    </Wrapper>
  );
};
