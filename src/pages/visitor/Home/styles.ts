import styled from 'styled-components'
import { Typography as LandTypography } from "@material-ui/core";

export const Typography = styled(LandTypography)<any>`
  color: ${(props) => (props.color === 'blue' ? "#0043c8" : props.color === 'red' ? "#ee284b" : props.color === 'white' ? 'white' : null )};
  border-bottom: ${(props) => (props.topBarTitleActive ? '1px solid #ee284b' : null)};
`;

export const TopBar = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export const Body = styled.div`
  /* height: calc(100% - 40px); */
  background-color: #e6d1ab;
`;

export const HomeButton = styled.button`
  height: 40px;
  background: none;
  border: none;
  letter-spacing: 2px;
  font-size: 25px;
`;

export const FirstDiv = styled.div`
  background-image: linear-gradient(#0043c8, #ea284d);
  padding: 40px 20px;
`;

export const SecondDiv = styled.div`
  background: white;
  padding: 40px 20px;
`;

export const ThirdDiv = styled.div`
  background: #0043c8;
  padding: 40px 20px;
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