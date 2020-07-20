import styled from 'styled-components'

export const SideBarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChangeButton = styled.button`
  padding: 20px;
  background-color: ${(props) => (props.isSelected === true ? "rgb(239, 239, 239)" : "white")};
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
`;
