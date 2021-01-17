/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import {
  Typography as TypographyComponent,
  Button as ButtonComponent,
} from "@material-ui/core";
import { ReactComponent as ConeIcon } from "assets/svg/traffic-cone-svgrepo-com 1.svg";
export const Header = styled.div`
  background: transparent;
  position: relative;
  padding: 18px;
  z-index: 2;
`;

export const FirstHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled<any>(ButtonComponent)`
  border-radius: 2px !important;
  background-color: ${(props) =>
    props.darkblue ? "#111b47 !important" : "initial"};
  text-transform: none !important;
  box-shadow: none !important;
  color: ${(props) =>
    props.darkblue ? "white !important" : "#505F98 !important"};
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
  /* margin-left: 163px; */
  height: 100%;
  width: 100%;
  z-index: 2;
  @media (max-width: 1000px) {
    margin-right: 100px;
    align-items: center;
  }
`;

export const FirstTextDiv = styled.div`
  @media (min-width: 1001px) {
    max-width: 540px;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const ConeSvgDiv = styled.div`
  position: absolute;
  top: 18px;
  z-index: 1;
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
    right: -350px;
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
    props.textColor === "MainBlue900" ? "66px" : "30px"} !important;
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
