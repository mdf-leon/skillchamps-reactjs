import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ItemWrapper, MenuItemContainer } from './styles';

export default function MenuItem({ path, label, icon: Icon }) {
  const WithIcon = Icon ? <Icon className="sidebar-icons" /> : null;

  return (
    <MenuItemContainer>
      <NavLink exact to={path} activeClassName="active-link">
        <ItemWrapper hasIcon={!!Icon}>
          {WithIcon}
          <h2>{label}</h2>
        </ItemWrapper>
      </NavLink>
    </MenuItemContainer>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  icon: null,
};
