import styled from "styled-components";
import {
  Typography as TypographyComponent,
  Button as ButtonComponent,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

export const Burguer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  .menu-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-toggle {
    position: sticky;
    width: 25px;
    z-index: 7;
  }
  .one,
  .two,
  .three {
    background-color: #111b47;
    height: 3px;
    width: 100%;
    border-radius: 50px;
    margin: 4px auto;

    transition-duration: 0.3s;
  }

  .nav {
    display: none;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 6;
    button {
      font-size: 32px !important;
      line-height: 1 !important;
      padding: 20px 40px !important;
    }
    .nav-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }
  }

  .menu-section.on .menu-toggle {
    position: sticky;
    width: 25px;
    z-index: 7;
  }
  .menu-section.on .one {
    transform: rotate(45deg) translate(2px, 6px);
  }

  .menu-section.on .two {
    opacity: 0;
  }

  .menu-section.on .three {
    transform: rotate(-45deg) translate(4px, -8px);
  }

  .menu-section.on .nav {
    display: block;
    opacity: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 6;
  }
`;

// export const BurguerIcon = styled(MenuIcon)`
//   min-height: 30px;
//   min-width: 30px;
//   fill: #111b47 !important;
// `;

export const Header = styled.div<any>`
  background: transparent;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  width: 100%;
  padding: 18px;
  z-index: 8;
`;

export const FirstHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopBar = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export const Typography = styled(TypographyComponent)<any>`
  margin: ${(props) => props.marginAll} !important;
  font-weight: ${(props) =>
    props.fontWeight === "skTitle"
      ? "600"
      : props.fontWeight === "MainBlue900"
      ? "500"
      : "400"} !important;
  /* line-height: 66px; */
  color: ${(props) =>
    props.textColor === "logoPrimary"
      ? "#37447e"
      : props.textColor === "MainBlue900"
      ? "#091133"
      : "#505F98"} !important;
  line-height: ${(props) =>
    props.textColor === "MainBlue900" && props.lineHeightDefault === false
      ? "66px"
      : props.lineHeightDefault
      ? "1.6"
      : "initial"} !important;
  border-bottom: ${(props) =>
    props.topbartitleactive ? "1px solid #ee284b" : null};
`;

export const Button = styled<any>(ButtonComponent)`
  border-radius: 2px !important;
  border: ${(props) =>
    props.darkblue
      ? "none !important"
      : props.topbutton
      ? "none !important"
      : "2px solid #091133 !important"};
  background-color: ${(props) =>
    props.darkblue ? "#111b47 !important" : "transparent !important"};
  text-transform: none !important;
  box-shadow: none !important;
  color: ${(props) =>
    props.darkblue
      ? "white !important"
      : props.topbutton
      ? "#505F98 !important"
      : "#091133 !important"};
  padding: 4px 40px !important;
  margin: ${(props) => props.marginAll} !important;
  width: ${(props) => props.width} !important;
`;
