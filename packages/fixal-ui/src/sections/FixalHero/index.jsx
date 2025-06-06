import React from 'react';
import SideBySideHero from './sidebyside.jsx';
import StraightLineHero from './straightline.jsx';

const FixalHero = (props) => {
  const { type = 'sidebyside', ...rest } = props;

  switch (type) {
    case 'straightline':
      return <StraightLineHero {...rest} />;
    default:
      return <SideBySideHero {...rest} />;
  }
};

export default FixalHero;
