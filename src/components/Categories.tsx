import React from 'react';
import { Box } from './Box';
import { Card } from './Card';
import { Text } from './Text';

import SUR from '../static/SUR.webp';
import SUB from '../static/SUB.webp';
import CCUS from '../static/CCUS.webp';
export const Categories: React.FC = () => {
  return (
    <div id="categories">
      <div className="container">
        <Box display="flex" alignItems="center" justifyContent="center" margin=" 0 0 24px 0">
          <Text variant="title2">Equipment Categories</Text>
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
            image={SUB}
            title="Subsurface Equipment"
            description="Drilling Tools, Tubulars, Chemicals, Wellheads, Specialized Units"
          />
          <Card
            image={SUR}
            title="Surface Equipment"
            description="Separators, Pumps, Injection Skids, Flowmeters, Additives & Catalysts"
          />
          <Card
            image={CCUS}
            title="CCUS & Hydrogen"
            description="CO₂ Skids, Compressors, Injection Tools, Sensors, Special alloys"
          />
        </Box>
      </div>
    </div>
  );
};
