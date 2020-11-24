import styled, { keyframes, css } from 'styled-components';
import { Row as RowRow, Col as ColCol } from 'styles/grid'

const spin = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`;

const spinAnimation = ({ isLoading }) => {
  if (isLoading)
    return css`
      svg {
        animation: ${spin} 2s linear infinite;
        text-align: right;
      }
    `;
  return null;
};

export const Row = styled(RowRow)`

`;

export const Col = styled(ColCol)`
  border-top: 1px solid ${(props) => props.theme.colors.lines};
    padding: 10px 0px 10px;
    > div {
      display: inline-block;
    }

  ${spinAnimation}
`;

export const Table = styled.table`
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};
  width: 100%;
  background-color: transparent;

  th {
  }

  td {
    border-top: 1px solid ${(props) => props.theme.colors.lines};
    padding: 10px 0px 10px;
    > div {
      display: inline-block;
    }
  }

  ${spinAnimation}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-weight: 500;
  width: auto;
  border: none;
  background: none;
  padding-top: 5px;
  padding-bottom: 10px;
`;

export const StatusCol = styled.button`
  font-weight: 500;
  width: auto;
  border: none;
  margin-left: 26px;
  background: none;
  padding-top: 5px;
  padding-bottom: 10px;
  span {
    color: inherit;
    font-weight: 500;
  }
`;


