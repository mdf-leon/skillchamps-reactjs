import styled, { keyframes, css } from 'styled-components';

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

export const Table = styled.table`
  width: 100%;
  background-color: transparent;

  th {
    padding-bottom: 10px;
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
