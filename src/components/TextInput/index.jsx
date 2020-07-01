import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.br';
import PropTypes from 'prop-types';
import { Input, TogglePassword, ErrorText } from './styles';

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  id,
  name,
  touched,
  error,
  isTopSpaced,
  inputType,
  className,
  style,
}) {
  let type = 'text';
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  let options = {};
  const expirationDate = new Date();
  switch (inputType) {
    case 'password':
      type = showPassword ? 'text' : 'password';
      break;
    case 'phone':
      options = {
        phone: true,
        phoneRegionCode: 'BR',
      };
      break;
    case 'number':
      options = {
        numeral: true,
        numeralThousandsGroupStyle: 'none',
      };
      break;
    case 'positiveNumber':
      options = {
        numeral: true,
        numeralPositiveOnly: true,
      };
      break;
    case 'date':
      options = {
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y'],
      };
      break;
    case 'cnpj':
      options = {
        delimiters: ['.', '.', '/', '-'],
        numericOnly: true,
        blocks: [2, 3, 3, 4, 2],
        noImmediatePrefix: true,
        uppercase: true,
      };
      break;
    case 'cpf':
      options = {
        numericOnly: true,
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
        noImmediatePrefix: true,
        uppercase: true,
      };
      break;
    case 'postalCode':
      options = {
        delimiters: ['-'],
        blocks: [5, 3],
        numericOnly: true,
        noImmediatePrefix: true,
        uppercase: true,
      };
      break;
    case 'creditCardNumber':
      options = {
        creditCard: true,
        uppercase: true,
      };
      break;
    case 'creditCardcvv':
      options = {
        blocks: [3],
        uppercase: true,
        numericOnly: true,
      };
      break;
    case 'expirationDate':
      options = {
        date: true,
        delimiter: '/',
        datePattern: ['m', 'Y'],
        dateMin: expirationDate.toISOString(),
      };
      break;
    case 'previousDate':
      options = {
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y'],
        dateMax: expirationDate.toISOString(),
      };
      break;
    case 'futureDate':
      options = {
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y'],
        dateMin: expirationDate.toISOString(),
      };
      break;
    case 'currency':
      options = {
        numeral: true,
        numeralPositiveOnly: true,
        numeralIntegerScale: 10,
        numeralDecimalMark: ',',
        rawValueTrimPrefix: true,
        prefix: 'R$ ',
        delimiter: '.',
        uppercase: true,
        noImmediatePrefix: true,
        swapHiddenInput: true,
      };
      break;
    default:
      options = {
        blocks: [999999],
        delimiter: '',
      };
      break;
  }

  return (
    <Input
      id={id}
      label={label}
      disabled={disabled}
      error={error}
      touched={touched}
      isTopSpaced={isTopSpaced}
      className={className}
      style={style}
    >
      <label htmlFor={name}>{label}</label>
      <Cleave
        name={name}
        disabled={disabled}
        value={value}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        options={options}
      />
      {inputType === 'password' ? (
        <TogglePassword
          type="button"
          onClick={toggleShowPassword}
          error={touched && error}
        >
          {showPassword ? 'Esconder' : 'Mostrar'}
        </TogglePassword>
      ) : null}
      <ErrorText>{touched && error ? error : null}</ErrorText>
    </Input>
  );
}

TextInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.elementType,
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  isTopSpaced: PropTypes.bool,
  inputType: PropTypes.oneOf([
    'password',
    'phone',
    'number',
    'positiveNumber',
    'cnpj',
    'cpf',
    'postalCode',
    'creditCardNumber',
    'creditCardcvv',
    'expirationDate',
    'previousDate',
    'futureDate',
    'currency',
  ]),
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChange: undefined,
  onBlur: undefined,
  disabled: false,
  id: '',
  name: '',
  touched: false,
  error: '',
  isTopSpaced: false,
  inputType: '',
  className: '',
  style: undefined,
};
