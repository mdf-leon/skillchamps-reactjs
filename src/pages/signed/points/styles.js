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

export const DivRT = styled.div`

button{
  padding: 10px;
  text-align: left;
  width: 50%;
  border: 1px solid rgb(232, 232, 232);
  background-color: transparent;
  :nth-child(odd) {
    background: rgb(239,239,239);
  }
  :not(:first-child){
    margin-top: 20px;
  }
  text-transform: capitalize;
}
`;