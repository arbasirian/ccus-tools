import React from 'react';
import styled from 'styled-components';
import { Text } from '.';

const Wrapper = styled.section`
  background-color: #edeafb;
`;

export const Customers: React.FC = () => {
  return (
    <Wrapper id="customers">
      <div className="container">
        <Text noMargin variant="title2">
          Clients We've Worked With
        </Text>
      </div>
    </Wrapper>
  );
};
