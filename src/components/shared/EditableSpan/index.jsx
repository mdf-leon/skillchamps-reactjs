import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';

import { Container, SInput } from './styles';

export default function EditableSpan({ isEditable, label, span, ...rest }) {
  const [field, meta] = useField({ label, ...rest });
  return (
    <Container>
      <h2>{label}</h2>
      {isEditable ? (
        <SInput {...field} {...meta} {...rest} />
      ) : (
        <span>{span}</span>
      )}
    </Container>
  );
}

EditableSpan.propTypes = {
  isEditable: PropTypes.bool,
  label: PropTypes.string,
  span: PropTypes.string,
};

EditableSpan.defaultProps = {
  isEditable: false,
  label: '',
  span: '',
};
