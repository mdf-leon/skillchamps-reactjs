import PropTypes from 'prop-types';
import React from 'react';

import { Card, Row, Item } from './styles';

function DetailCard({ isGray, noLeftPadding, children, ...rest }) {
  return (
    <Card isGray={isGray} noLeftPadding={noLeftPadding} {...rest}>
      {children}
    </Card>
  );
}

export default { Card: DetailCard, Row, Item };

DetailCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isGray: PropTypes.bool,
  noLeftPadding: PropTypes.bool,
};

DetailCard.defaultProps = {
  isGray: false,
  noLeftPadding: false,
};
