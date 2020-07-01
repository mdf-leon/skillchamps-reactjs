import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';
import Select from '../Select';

// import { Container } from './styles';

export default function FormikSelect(props) {
  const [field, meta] = useField(props);
  return (
    <Select {...field} error={meta.error} touched={meta.touched} {...props} />
  );
}

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
};
