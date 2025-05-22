import React from 'react';
import { Text } from './Text';
import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { Box } from './Box';
import { IconMail, IconMap, IconPhone } from '@tabler/icons-react';
import { useDeviceLayout } from '../hooks';

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const ContactInfoWrapper = styled.div`
  flex: 1;
  background: #027360;
  border-radius: 8px;
  padding: 32px;
  min-height: 550px;
  * {
    color: #fff !important;
  }
`;

const ContactFormWrapper = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 32px;

  width: 100%;
  @media (min-width: 992px) {
    width: auto;
    min-height: 550px;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  min-width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #222326;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  &:hover {
    ${IconWrapper} {
      background: #2a9d8f;
      transition: all 0.4s;
    }
  }
`;

export const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <Wrapper className="container">
        <ContactInfoWrapper>
          <Box
            border="0"
            borderBottom="1px"
            borderColor="#202429"
            borderStyle="solid"
            padding="0 0 32px 0"
            margin="0 0 32px 0"
          >
            <Text variant="title3">Contact Us</Text>
            <Text variant="body">
              Have a question or need equipment? Use the contact form or email us directly.
            </Text>
          </Box>

          <Box display="flex" flexDirection="column" gap="48px">
            <ContactItem>
              <IconWrapper>
                <IconMap />
              </IconWrapper>
              <Box>
                <Text variant="title4">Our Location</Text>
                <Text>No. 22, Street 6, The Wave office, Muscat, Oman</Text>
              </Box>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <IconPhone />
              </IconWrapper>
              <Box>
                <Text variant="title4">Phone Number</Text>
                <Text>+96895317333</Text>
              </Box>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <IconMail />
              </IconWrapper>
              <Box>
                <Text variant="title4">Email Address</Text>
                <Text>info@ccustools.com</Text>
              </Box>
            </ContactItem>
          </Box>
        </ContactInfoWrapper>
        <ContactFormWrapper>
          <Text variant="title3">Get In Touch</Text>
          <Text variant="body">We're here to help!</Text>
          <ContactForm />
        </ContactFormWrapper>
      </Wrapper>
    </section>
  );
};
