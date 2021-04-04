import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
  }
`;

export const Line = styled.div`
  border-right: 2px solid #9e9e9e;

  min-height: 50px;
  width: fit-content;
`;

export const Bracket = styled.div<any>`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  padding: 1em;
  border: 1px solid transparent;
  border-radius: 0.1em;
  box-shadow: 0 2px 0 0 #e5e5e5;
  outline: none;
  cursor: pointer;
  transition: padding 0.2s ease-in-out, border 0.2s linear;
  border-color: ${(props) =>
    props.isFocus ? "#2196f3" : "transparent"};
  /* &::before,
  &::after {
    transition: all 0.2s linear;
  } */

  /* @media (max-width: 24em) {
    padding: 0.75em 0.5em;
  }

  @media (min-width: 38em) {
    &::before,
    &::after {
      position: absolute;
      left: 0;
      z-index: 1;
      content: "";
      display: block;
      width: 1em;
      height: 10%;
      border-left: 2px solid #9e9e9e;
    }

    &::before {
      bottom: 50%;
      border-bottom: 2px solid #9e9e9e;
      transform: translate(0, 1px);

      .tournament-bracket--rounded & {
        border-bottom-left-radius: 0.6em;
      }
    }

    &::after {
      top: 50%;
      border-top: 2px solid #9e9e9e;
      transform: translate(0, -1px);

      .tournament-bracket--rounded & {
        border-top-left-radius: 0.6em;
      }
    }
  }

  @media (min-width: 72em) {
    &::before,
    &::after {
      width: 1.5em;
    }

    &::before {
      transform: translate(0, 1px);
    }

    &::after {
      transform: translate(0, -1px);
    }
  } */
`;
