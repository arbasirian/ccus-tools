import React from 'react';
import { Box } from './Box';
import { Card } from './Card';
import { Text } from './Text';

import { IconDropCircle, IconRollercoaster, IconWorld } from '@tabler/icons-react';
export const WhatSetsUsApart: React.FC = () => {
  return (
    <div id="sets-us-apart">
      <div className="container">
        <Box display="flex" alignItems="center" justifyContent="center" margin=" 0 0 24px 0">
          <Text variant="title2">What Sets Us Apart</Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          flexWrap="wrap"
          desktop={{ flexWrap: 'nowrap' }}
        >
          <Card
            icon={<IconWorld size={32} />}
            title="Global Vendor Network"
            description="We partner with global OEMs and major distributors"
          />
          <Card
            icon={<IconDropCircle size={32} />}
            title="Middle East Expertise"
            description="Strong GCC presence with proven track record"
          />
          <Card
            icon={<IconRollercoaster size={32} />}
            title="Speed & Reliability"
            description="Rapid quote turnaround and equipment matchingors"
          />
        </Box>
      </div>
    </div>
  );
};
