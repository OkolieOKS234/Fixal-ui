import React from 'react';
import SideBySideHero from './sidebyside';
import StraightLineHero from './straightline';

const FixalHero = ({ type = 'sidebyside', ...props }) => {
  switch (type) {
    case 'straightline':
      return <StraightLineHero {...props} />;
    default:
      return <SideBySideHero {...props} />;
  }
};

export default FixalHero;
