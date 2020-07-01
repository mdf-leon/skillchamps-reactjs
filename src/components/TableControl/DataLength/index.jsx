import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

export default function DataLength({ length }) {
  return <Container>{`${length} registros`}</Container>;
}

DataLength.propTypes = {
  length: PropTypes.number,
};

DataLength.defaultProps = {
  length: 0,
};
