import styled from "styled-components";
import { TextInput } from "components";

export const Connector = styled.div<any>`
  display: flex;

  & > :nth-child(1) {
    display: inline-block;
    position: relative;
    height: 5rem;
    width: 2rem;
    border: 1px solid black;
    border-left: 0;
  }

  & > :nth-child(2) {
    height: ${(props) => (props.winner ? "2.5rem" : "2.3rem")};
    width: 1.9rem;
    display: inline-block;
    border-bottom: 1px solid black;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const Divider = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 1.3;
  color: #4fb39c;

  .titleDiv {
    display: flex;
    justify-content: space-around;
  }

  i {
    font-style: normal;
    color: #049372;
    text-align: center;
    line-height: 40px;
  }

  .divider {
    overflow: hidden;
    height: 20px;
  }

  .divider:after {
    content: "";
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px / 12px;
    box-shadow: 0 0 8px #049372;
  }
`;

export const SelectBracketDiv = styled.div`
  max-width: 200px;

  @media (max-width: 780px) {
    max-width: 100%;
  }
`;

export const BracketsDiv = styled.div<any>`
  cursor: ${(props) => (props.winner ? "context-menu" : "pointer")};
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #bbbbbb;

  padding: 20px;
  height: 100%;
  width: 100%;

  :hover {
    background: ${(props) => (props.winner ? "inherit" : "#0000000d")};
  }

  .riders {
    width: 100%;
    & > :first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 0;
    }
    & > :nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  .bracket {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 10px 0 10px 20px;
    border-top: 0;
    border: 1px solid #0000006e;
    border-left: 5px solid #0000006e;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 100%;
  }

  .winner {
    width: 100%;
  }

  @media (max-width: 780px) {
    .winner {
      position: absolute;
      display: ${(props) => (props.win === 0 ? "none" : "flex")};
      align-items: center;
      justify-content: flex-end;

      height: 100%;
      width: 100%;
      backdrop-filter: blur(3px);

      .bracket {
        width: 70%;
        background: white;
      }
    }
  }
`;

// ---------------------------------------------------------------------------------------------------------

export const SideBarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// ------BeforePoinst------ //

export const ChangeButton = styled.button<any>`
  padding: 20px;
  background-color: ${(props) =>
    props.isSelected === true ? "rgb(239, 239, 239)" : "white"};
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
`;

export const DivRT = styled.div`
  width: 100%;

  button {
    padding: 10px;
    text-align: left;
    width: 100%;
    border: 1px solid rgb(232, 232, 232);
    background-color: transparent;
    :nth-child(odd) {
      background: rgb(239, 239, 239);
    }
    :not(:first-child) {
      margin-top: 20px;
    }
    text-transform: capitalize;
  }
`;

// ------BeforePoinst------ //

export const MainDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TimeDiv = styled.div`
  background: #ededed;
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
  height: 100%;
  padding: 12px 8px;
  div {
    margin-top: 20px;
    div {
      margin-top: 0px;
    }
  }
`;

export const RoundButton = styled.button`
  padding: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
`;

export const NumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background: white;
  width: 100%;
  border: 1px solid #1976d3;
`;

export const TimeInput = styled(TextInput)`
  input {
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #98afbc;
    font-size: 1.5em;
    text-align: center;
  }
`;

export const ShowTimeInput = styled(TextInput)`
  input {
    margin: 0;
    border: none;
    border-radius: 0;
    text-align: center;
    background: none;
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    width: 100%;
    cursor: context-menu;
  }
  input::placeholder {
    color: black;
    opacity: 1;
  }
`;

export const Blackground = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(79, 108, 124, 0.1); /*dim the background*/
  backdrop-filter: blur(6px);
  display: flex;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px 16px 16px;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #d5d5d5;
  &:not(:first-child) {
    padding-top: 16px;
  }
`;

export const YesNoDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 70%;
  .buttonRight {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    width: 100%;
    padding: 0 20px;
    .buttonRight {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;
