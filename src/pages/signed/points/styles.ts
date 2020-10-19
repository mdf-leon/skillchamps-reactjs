import styled from 'styled-components'
import { TextInput } from 'components';

export const SideBarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// ------BeforePoinst------ //


export const ChangeButton = styled.button<any>`
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

export const MainDiv = styled.div`
  height: calc(100vh + -50px);
  display: flex;
  flex-direction: column;
`;

export const TimeDiv = styled.div`
  background: #EDEDED;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 12px 16px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PenaltyDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding:  12px 8px;
div{
    margin-top: 20px;
    div{
      margin-top: 0px;
    }
}
`;

export const RoundButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const NumberBox = styled.div`
 display: flex;
 justify-content: space-between;
 text-align: center; 
 border: 1px solid #e8e8e8; 
 border-radius: 4px;
 background: #EDEDED;
 width: 100%; 
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

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px 16px 16px;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #D5D5D5;
  &:not(:first-child) {
    padding-top: 16px;
  }
`;