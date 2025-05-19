import React from 'react';
import styled from 'styled-components';
import { Text } from '.';

const Wrapper = styled.section`
  background-color: #edeafb;
  padding: 60px 0;
`;

export const Customers: React.FC = () => {
  return (
    <Wrapper id="customers">
      <div className="container">
        <Text noMargin variant="title5">
          Clients We've Worked With
        </Text>
      </div>
    </Wrapper>
  );
};
