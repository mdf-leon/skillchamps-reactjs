import styled from "styled-components";

export const Container = styled.div``;

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
  margin: 10px 0 10px 0;
  @media (max-width: 780px) {
    max-width: 100%;
  }
`;

export const BracketsDiv = styled.button<any>`
  outline: none;
  cursor: context-menu;
  position: relative;
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  border-bottom: 1px dashed #bbbbbb;

  padding: 20px;
  height: 100%;
  width: 100%;

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
