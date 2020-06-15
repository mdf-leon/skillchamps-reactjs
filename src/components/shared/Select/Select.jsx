import PropTypes from 'prop-types';
import React from 'react';
import { SelectBlock } from './styles';

export default function Select({
  children,
  label,
  placeholder,
  options,
  error,
  touched,
  ...props
}) {
  return (
    <SelectBlock label={label} error={error} {...props}>
      <label htmlFor={label}>{label}</label>
      <select placeholder={placeholder} required {...props}>
        <option value="" disabled selected hidden id="placeholder">
          {placeholder}
        </option>
        {options
          ? options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))
          : children}
      </select>
      <span>{touched && error ? error : null}</span>
    </SelectBlock>
  );
}

Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

Select.defaultProps = {
  name: '',
  children: undefined,
  value: undefined,
  disabled: false,
  placeholder: '',
  error: '',
  touched: false,
  id: '',
  label: '',
  options: undefined,
};
