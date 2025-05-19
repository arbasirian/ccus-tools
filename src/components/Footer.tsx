import React from 'react';
import { Text } from './Text';
import { Box } from './Box';

export const Footer: React.FC = () => {
  return (
    <Box backgroundColor="#edf6f1" padding="30px 0 24px 0" borderTop="1px solid #e0e0e0">
      <div className="container">
        <Text>ⓒCopyright 2024 SEOC . All rights reserved</Text>
      </div>
    </Box>
  );
};
