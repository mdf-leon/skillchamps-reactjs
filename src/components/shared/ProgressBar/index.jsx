import PropTypes from 'prop-types';
import React from 'react';

import { ProgressBar as Bar, Filler } from './styles';

function ProgressBar({ progress }) {
  const validate = (min, value, max) => {
    return Math.min(Math.max(value, min), max);
  };

  return (
    <Bar>
      <Filler progress={validate(0, progress, 100)} />
    </Bar>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
