import React from 'react';
import { Text } from './Text';
import styled from 'styled-components';
import { ContactForm } from './ContactForm';

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
`;

const ContactInfoWrapper = styled.div`
  flex: 1;
  background: #090b0e;
  border-radius: 8px;
  padding: 32px;
  min-height: 600px;
`;

const ContactFormWrapper = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  min-height: 600px;
`;

export const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <Wrapper className="container">
        <ContactInfoWrapper></ContactInfoWrapper>
        <ContactFormWrapper>
          <Text variant="title3">Get In Touch</Text>
          <Text variant="body">We're here to help!</Text>
          <ContactForm />
        </ContactFormWrapper>
      </Wrapper>
    </section>
  );
};
