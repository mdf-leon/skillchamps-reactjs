import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/LogoPaytime.svg';

export const Container = styled.section`
  max-width: 380px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(45, 87, 104, 0.149);
  border-radius: 4px;
`;

export const LogoBox = styled.div`
  background: ${(props) => props.theme.colors.primary.default};
  border-radius: 4px 4px 0px 0px;
  text-align: center;
`;

export const LogoPaytime = styled(Logo)`
  height: 44px;
  margin: 20px auto;
  fill: white;
`;

export const Header = styled.div`
  padding-top: 20px;
  text-align: center;
  p {
    color: ${(props) => props.theme.colors.darkAccent};
  }
  h2 {
    color: ${(props) => props.theme.colors.lightAccent};
    margin-top: 2px;
  }
  h1 {
    color: ${(props) => props.theme.colors.primary.default};
    margin-top: 2px;
  }
`;

export const Body = styled.main`
  padding: 0 40px 40px;
`;

export const Block = styled.div`
  margin-top: 10px;
  div:first-child {
    border-top: 1px dashed ${(props) => props.theme.colors.lines};
  }
  h2 {
    margin-top: 10px;
  }
  p {
    color: ${(props) => props.theme.colors.primary.default};
    margin-top: 2px;
  }
`;
