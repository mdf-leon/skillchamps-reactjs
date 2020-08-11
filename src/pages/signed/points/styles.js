import styled from 'styled-components'
import { TextInput } from 'components';

export const SideBarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// ------BeforePoinst------ //

export const ChangeButton = styled.button`
  padding: 20px;
  background-color: ${(props) => (props.isSelected === true ? "rgb(239, 239, 239)" : "white")};
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
`;

export const DivRT = styled.div`
  width: 100%;

button{
  padding: 10px;
  text-align: left;
  width: 100%;
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

// ------BeforePoinst------ //

export const TimeDiv = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RoundButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const NumberBox = styled.div`
 width: 100%; 
 text-align: center; 
 border: 1px solid #e8e8e8; 
 border-radius: 2px ;
`;

export const TimeInput = styled(TextInput)`
 input{
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #98AFBC;
  font-size: 1.5em;
  text-align: center;
 }
`;