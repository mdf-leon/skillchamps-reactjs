import styled from 'styled-components';

const defineColor = (props) => {
  switch (props.status) {
    case 'success':
      return props.theme.colors.success;
    case 'danger':
      return props.theme.colors.danger;
    case 'warning':
      return props.theme.colors.warning;
    default:
      return props.theme.colors.lightAccent;
  }
};

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(props) => props.theme.statusTagWidth};
  padding: 0px 6px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid ${defineColor};
  cursor: default;
  span {
    color: ${defineColor} !important;
    font-size: 10px;
    text-transform: lowercase;
  }
`;
