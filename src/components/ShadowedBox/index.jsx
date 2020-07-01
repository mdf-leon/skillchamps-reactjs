import PropTypes from 'prop-types';
import React from 'react';

import { Box, Header } from './styles';

export default function ShadowedBox({
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
    <Box label={label} {...rest}>
      {label !== '' && header}
      <section className={className} id={id}>
        {children}
      </section>
    </Box>
  );
}

ShadowedBox.propTypes = {
  checkboxLabel: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

ShadowedBox.defaultProps = {
  checkboxLabel: '',
  className: '',
  id: '',
  label: '',
  onChange: null,
  value: false,
};
