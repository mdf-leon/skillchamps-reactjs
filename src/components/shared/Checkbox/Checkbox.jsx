/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Label } from './styles';

export default function Checkbox(props) {
  const { prefix, content, postfix, onCheckChange } = props;

  return (
    <Label>
      {prefix}
      <input type="checkbox" onChange={onCheckChange} />
      {content}
      {postfix}
    </Label>
  );
}

Checkbox.propTypes = {
  content: PropTypes.string,
};

Checkbox.defaultProps = {
  content: '',
};
