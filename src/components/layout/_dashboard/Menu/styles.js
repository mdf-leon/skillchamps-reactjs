import styled, { css } from 'styled-components';

export const Menu = styled.section`
  .menu-logo {
    margin: 24px 0px;
  }
  ul {
    margin-bottom: 0;
  }
`;

const menuItemStyle = css`
  list-style-type: none;
  margin-bottom: 12px;
  display: flex;
  align-items: baseline;
  margin-left: ${(props) => !props.hasIcon && '12px'};
  /* color: ${(props) =>
    props.isActive && props.theme.colors.primary.default}; */
  cursor: pointer;

  h2 {
    display: inline;
    /* color: ${(props) =>
      props.isActive && props.theme.colors.primary.default}; */
  }
  .sidebar-icons {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.colors.darkAccent};
    margin-right: 12px;
  }

  &:hover {
    .caret-icon,
    h2 {
      color: ${(props) => props.theme.colors.primary.lighter};
    }
    .sidebar-icons {
      fill: ${(props) => props.theme.colors.primary.lighter};
    }
  }
`;

export const MenuItemContainer = styled.div`
  .active-link {
    .caret-icon,
    h2 {
      color: ${(props) => props.theme.colors.primary.default};
    }
    .sidebar-icons {
      fill: ${(props) => props.theme.colors.primary.default};
    }
  }
`;

export const ItemWrapper = styled.li`
  ${menuItemStyle}
`;

const activeIconStyle = css`
  transform: rotate(180deg);
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
`;

export const SubMenuList = styled.div`
  ${menuItemStyle}
  justify-content: space-between;
  margin-left: 0px;
  .caret-icon {
    transform: rotate(0deg);
    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    ${({ isActive }) => isActive && activeIconStyle}
  }
`;

const visibleStyle = css`
  overflow: hidden;
  max-height: 500px;
  opacity: 1;
  pointer-events: visible;
`;

export const SubMenuItems = styled.div`
  max-height: 0px;
  min-height: 0px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  ${({ visible }) => visible && visibleStyle}
`;

SubMenuItems.displayName = 'SubMenuItemsWrapper';
