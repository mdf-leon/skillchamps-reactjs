import PropTypes from 'prop-types';
import React from 'react';

import { Menu as MenuWrapper } from './styles';

export default function Menu({ logo: Logo, children }) {
  return (
    <MenuWrapper>
      <Logo className="menu-logo" />
      {children}
    </MenuWrapper>
  );
}

Menu.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

Menu.defaultProps = {
  logo: null,
};
