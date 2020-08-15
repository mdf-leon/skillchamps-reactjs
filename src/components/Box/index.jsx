import React from 'react';

import { Boox, Header, DivHeader } from './styles';

export default function Box(props) {
  const {
    label = '',
    children,
    id,
    className,
    checkboxLabel = '',
    value,
    onChange,
    sufix,
    isTopSpaced,
    noPadding,
    alignLabel,
    ...rest
  } = props
  const header = (
    // TODO: Componentizar o checkbox
    <Header>
      <DivHeader alignLabel={alignLabel}>
        <h3>{label}</h3>
        {sufix}
      </DivHeader>
      {checkboxLabel !== '' && (
        <>
          <input type="checkbox" value={value} onChange={onChange} />
          <label htmlFor="checkbox">{checkboxLabel}</label>
        </>
      )}
    </Header>
  );
  return (
    <Boox isTopSpaced={isTopSpaced} label={label} {...rest}>
      {label !== '' && header}
      <div style={{ padding: noPadding ? '0px' : '20px' }} id={id}>
        {children}
      </div>
    </Boox>
  );
}
