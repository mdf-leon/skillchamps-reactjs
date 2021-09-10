import styled from 'styled-components'
import { Typography as LandTypography } from "@material-ui/core";

export const DivButtons = styled.div`
display: flex;
margin-top: 16px;
& :not(:first-child) {
  margin-left: 10px;
}
`;

export const LandPageButton = styled.button<any>`
font-size: 9px;
background-color: ${(props) => (props.backcolor === 'red' ? '#ee284b' : '#6246ac' )};
color: white;
min-width: 100px;
padding: 10px;
border-radius: 20px;
border: 0px;
`;

export const Typography = styled(LandTypography)<any>`
  color: ${(props) => (props.textColor === 'blue' ? "#0043c8" : props.textColor === 'red' ? "#ee284b" : props.textColor === 'white' ? 'white' : null )};
  border-bottom: ${(props) => (props.topbartitleactive ? '1px solid #ee284b' : null)};
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

export const Body = styled.div`
  /* height: calc(100% - 40px); */
  background-color: #e6d1ab;
`;

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
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10px;

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
  border: 1px solid black ;
  border-radius: 4px;
  /* height: 40px; */
  background: none;
  font-size: 20px;
`;

export const IconButton = styled.button<{ selected?: Boolean }>` 
  margin: 3px;
  border: 2px solid ${(props) => props.selected ? '#ad0b26' : '#acbfe3'} ;
  border-radius: 4px;
  /* height: 40px; */
  background: ${(props) => props.selected ? '#ad0b26' : 'none'};
  color: #acbfe3;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: ${(props) => props.selected ? '-3px' : '#acbfe3'} ;
`;

export const SelectedTab = styled.h3` 
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  color: #3842a3;
  margin: 5px;
`;