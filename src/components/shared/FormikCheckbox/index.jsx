import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';
import Checkbox from '../Checkbox/Checkbox';

// import { Container } from './styles';

export default function FormikCheckbox(props) {
  const [field, meta] = useField(props);
  return <Checkbox type="checkbox" {...field} {...meta} {...props} />;
}

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
};
