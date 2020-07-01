import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';
import Input from '../TextInput';

// import { Container } from './styles';

export default function TextInput(props) {
  const [field, meta] = useField(props);
  return <Input {...field} {...meta} {...props} />;
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};
