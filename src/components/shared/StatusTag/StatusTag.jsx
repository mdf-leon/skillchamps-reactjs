import PropTypes from 'prop-types';
import React from 'react';

import { Tag } from './styles';

export default function StatusTag({ status, label, ...rest }) {
  return (
    <Tag status={status} {...rest}>
      <span>{label}</span>
    </Tag>
  );
}

StatusTag.propTypes = {
  label: PropTypes.string,
  status: PropTypes.string,
};

StatusTag.defaultProps = {
  label: '',
  status: 'pending',
};
