import PropTypes from 'prop-types';
import React from 'react';
import { Group } from './styles';

// Acts Grouping Child Elements into a single line
export default function FlexRow({ children, isTopSpaced, ...rest }) {
  return (
    <Group {...rest} isTopSpaced={isTopSpaced}>
      {children}
    </Group>
  );
}

FlexRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isTopSpaced: PropTypes.bool,
};

FlexRow.defaultProps = {
  isTopSpaced: false,
};
