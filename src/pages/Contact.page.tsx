import React from 'react';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
      <p
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
        }}
      >
        Have questions about our equipment or services? Fill out the form below and we'll get back
        to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
};
