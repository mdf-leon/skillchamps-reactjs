import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { FaCaretDown } from 'react-icons/fa';

import { SubMenuItems, SubMenuList } from './styles';

export default function SubMenu({ label, icon: Icon, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <ul>
      <SubMenuList onClick={() => setIsActive(!isActive)} isActive={isActive}>
        <span>
          <Icon className="sidebar-icons" />
          <h2>{label}</h2>
        </span>
        <FaCaretDown className="caret-icon" />
      </SubMenuList>
      <SubMenuItems visible={isActive}>{children}</SubMenuItems>
    </ul>
  );
}

SubMenu.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

SubMenu.defaultProps = {
  icon: null,
};
