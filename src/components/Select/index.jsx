import React from 'react';
import { SelectBlock } from './styles';

export default function Select(props) {
  const {
    children,
    label,
    placeholder,
    options,
    error,
    touched,
    ...rest
  } = props
  return (
    <SelectBlock label={label} touched={touched} error={error} {...rest}>
      <label htmlFor={label}>{label}</label>
      <select placeholder={placeholder} value="" {...rest}>
        <option value="" hidden id="placeholder">
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