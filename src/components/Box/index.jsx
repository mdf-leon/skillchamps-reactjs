import PropTypes from 'prop-types';
import React from 'react';

import { Boox, Header } from './styles';

export default function Box({
  label = '',
  children,
  id,
  className,
  checkboxLabel = '',
  value,
  onChange,
  ...rest
}) {
  const header = (
    // TODO: Componentizar o checkbox
    <Header>
      <h3>{label}</h3>
      {checkboxLabel !== '' && (
        <>
          <input type="checkbox" value={value} onChange={onChange} />
          <label htmlFor="checkbox">{checkboxLabel}</label>
        </>
      )}
    </Header>
  );
  return (
    <Boox label={label} {...rest}>
      {label !== '' && header}
      <div style={{ padding: "24px" }} id={id}>
        {children}
      </div>
    </Boox>
  );
}

Boox.propTypes = {
  checkboxLabel: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Boox.defaultProps = {
  checkboxLabel: '',
  className: '',
  id: '',
  label: '',
  onChange: null,
  value: false,
};
