/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
  Wrapper,
} from './styles';

export default function Checkbox({
  className,
  label,
  // checked,
  style,
  isTopSpaced,
  children,
  ref,
  ...props
}) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper isTopSpaced={isTopSpaced}>
      <label>
        <CheckboxContainer className={className} style={style}>
          <HiddenCheckbox
            checked={checked}
            onClick={handleCheckboxClick}
            ref={ref}
            {...props}
          />
          <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <Label>{children || label}</Label>
      </label>
    </Wrapper>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  isTopSpaced: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

Checkbox.defaultProps = {
  label: '',
  className: '',
  style: undefined,
  isTopSpaced: false,
  children: undefined,
  ref: undefined,
};
