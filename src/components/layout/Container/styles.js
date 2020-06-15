import styled from 'styled-components';
import { ReactComponent as FaArrowCircleLeftSvg } from 'assets/images/CircleArrowLeft.svg';

export const ContentWrapper = styled.main`
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(45, 87, 104, 0.149);
  background: #fff;
  height: 100%;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  grid-row: 1/2;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lines};
  h1 {
    margin: auto;
  }
  button,
  a {
    position: absolute;
    background: none;
    border: none;
    height: 20px;
  }
`;

export const Body = styled.main`
  grid-row: 2/3;
  padding: 10px 20px 20px;
`;

export const FaArrowCircleLeft = styled(FaArrowCircleLeftSvg)`
  fill: ${(props) => props.theme.colors.lightAccent};
`;

export const TabsContainer = styled.div`
  position: absolute;
  height: 20px;
  right: 20px;

  .tab-icon:not(:last-child) {
    margin-right: 10px;
  }

  .active-tab {
    fill: ${(props) => props.theme.colors.primary.default};
  }
`;
