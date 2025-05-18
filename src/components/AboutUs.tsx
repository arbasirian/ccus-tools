import React from 'react';
import { Text } from './Text';

export const AboutUs: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <Text variant="title2">Empowering Energy Transitions with Trusted Equipment Sourcing.</Text>
        <Text variant="body">
          CCUS Tools specializes in high-quality upstream oil and gas equipment sourcing, along with
          advanced CCUS solutions. Our markets are in Saudi Arabia, UAE, Qatar, and Oman to help
          streamline procurement and accelerate project timelines for energy transition and low
          carbon economy.
        </Text>
      </div>
    </section>
  );
};
