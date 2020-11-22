import styled from 'styled-components'
import { Typography as LandTypography } from "@material-ui/core";

export const TopBar = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export const Typography = styled(LandTypography)<any>`
  color: ${(props) => (props.textcolor === 'blue' ? "#0043c8" : props.textcolor === 'red' ? "#ee284b" : props.textcolor === 'white' ? 'white' : null )};
  border-bottom: ${(props) => (props.topbartitleactive ? '1px solid #ee284b' : null)};
`;

export const DivTitles = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    margin-left: 10px;
    cursor: pointer;
  }
`;
