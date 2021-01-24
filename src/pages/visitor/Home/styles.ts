import styled from "styled-components";
import {
  Grid as GridComponent,
  Typography as TypographyComponent,
  Button as ButtonComponent,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const BurguerIcon = styled(MenuIcon)`
  min-height: 30px;
  min-width: 30px;
  fill: #111b47 !important;
`;

export const MainDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: -webkit-fill-available;
  --android-status-bar-height: 48px;
  --asset-x-offset-mobile: 0%;
  --asset-y-offset-mobile: 0%;
  --asset-x-offset-desktop: 0%;
  --asset-y-offset-desktop: 0%;
  display: standalone;
  font-size: 27px;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-points-y: repeat(320px);
  scroll-snap-destination: 0 0;
  scroll-snap-type: y mandatory;
  scroll-snap-type: mandatory;
  margin: 0;
  position: relative;
  background: white;
  overflow-x: hidden;
`;

export const Card = styled.div`
  padding-top: 66px;
  height: 100vh;
  scroll-snap-align: end !important;
  @media (max-width: 1000px) {
    padding-bottom: 59px;
  }
`;

export const Header = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  padding: 18px;
  z-index: 6;
`;

export const Grid = styled(GridComponent)`
  direction: row-reverse;
`;

export const FirstHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Body1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  text-align: left;
  height: 100%;
  width: 100%;
  z-index: 3;
  padding: 0 163px;
  @media (max-width: 999px) {
    padding: 0 100px;
    align-items: center;
  }
  @media (max-width: 589px) {
    padding: 0 20px;
  }
`;

export const FirstTextDiv = styled.div<any>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  @media (min-width: 1000px) {
    max-width: 540px;
  }
    div:not(:first-child) {
      display: flex;
      width: 80%;
      @media (max-width: 999px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        button {
          &:first-child {
            margin-bottom: 16px !important;
          }
        }
      }
    }
  }

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: space-around;
    h3 {
      font-size: 27px;
      line-height: 1.167 !important;
    }
    h6 {
      font-size: 14px;
      line-height: 1.6 !important;
    }
  }
`;

export const SecondTextDiv = styled.div<any>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  flex-direction: row;
  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1121px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: space-between;
    h3 {
      font-size: 27px;
      line-height: 1.167 !important;
    }
    h6 {
      font-size: 14px;
      line-height: 1.6 !important;
    }
  }
  @media (max-width: 927px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: space-between;
    h3 {
      font-size: 27px;
      line-height: 1.167 !important;
    }
    h6 {
      font-size: 14px;
      line-height: 1.6 !important;
    }
  }
  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

export const ThirdTextDiv = styled.div<any>`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    svg {
      max-heiht: 300px;
      max-width: 300px;
    }
    div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 430px) {
      svg {
        margin-top 48px;
        max-height: 200px;
        max-width: 200px;
        margin-bottom: 20px;
      }
    }
    @media (max-width: 927px) {
      h3 {
        font-size: 27px;
        line-height: 1.167 !important;
      }
      h6 {
        font-size: 14px;
        line-height: 1.6 !important;
      }
    }
  }
`;

export const DivORside = styled.div<any>`
  height: 100%;
  @media (max-width: 1063px) {
    svg {
      height: 300px;
      width: 300px;
    }
  }
`;

export const DivBlinder = styled.div``;

export const ConeSvgDiv = styled.div`
  position: absolute;
  top: 18px;
  z-index: 2;
  @media (min-width: 1581px) {
    right: 150px;
  }
  @media (max-width: 1580px) {
    right: 0px;
  }
  @media (max-width: 1424px) {
    right: -50px;
  }
  @media (max-width: 1187px) {
    right: -100px;
  }
  @media (max-width: 1000px) {
    right: -400px;
    top: 200px;
    svg {
      max-height: 500px;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  margin-top: 16px;
  & :not(:first-child) {
    margin-left: 10px;
  }
`;

export const LandPageButton = styled.button<any>`
  font-size: 9px;
  background-color: ${(props) =>
    props.backcolor === "red" ? "#ee284b" : "#6246ac"};
  color: white;
  min-width: 100px;
  padding: 10px;
  border-radius: 20px;
  border: 0px;
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

export const TopBar = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export const DivTitles = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    margin-left: 10px;
    cursor: pointer;
  }
`;

// export const Body = styled.div`
//   /* height: calc(100% - 40px); */
//   background-color: #e6d1ab;
// `;

export const FirstDiv = styled.div`
  background-image: linear-gradient(#0043c8, #ea284d);
  padding: 82px 20px 40px 20px;
  min-height: 24%;
`;

export const SecondDiv = styled.div`
  background: white;
  padding: 40px 20px;
  min-height: 24%;
`;

export const ThirdDiv = styled.div`
  background: #0043c8;
  padding: 40px 20px;
  min-height: 24%;
`;

export const FourthDiv = styled.div`
  background: #252a2c;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 10px;

  display: flex;
  div {
    padding: 0 20px;
    width: 100%;
    a {
      color: white;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
      list-style: none;
      margin-bottom: 10px;
    }
  }
`;

// export const AccountButton = styled.button`
//   position: absolute;
//   right: 0;
//   height: 40px;
//   background: none;
//   border: none;
//   font-size: 20px;
// `;

export const AccountButton = styled.button`
  position: absolute;
  right: 0;
  margin: 3px;
  border: 1px solid black;
  border-radius: 4px;
  /* height: 40px; */
  background: none;
  font-size: 20px;
`;

export const IconButton = styled.button<{ selected?: Boolean }>`
  margin: 3px;
  border: 2px solid ${(props) => (props.selected ? "#ad0b26" : "#acbfe3")};
  border-radius: 4px;
  /* height: 40px; */
  background: ${(props) => (props.selected ? "#ad0b26" : "none")};
  color: #acbfe3;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: ${(props) => (props.selected ? "-3px" : "#acbfe3")};
`;

export const SelectedTab = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  font-family: "Raleway", sans-serif;
  color: #3842a3;
  margin: 5px;
`;

export const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #e7ecff;
  text-align: center;
`;
