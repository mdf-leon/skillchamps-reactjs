import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  > svg {
    height: 20px;
    width: 16px;
    fill: ${({ theme }) => theme.colors.darkAccent};
  }
  > div {
    top: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary.default};
    span {
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
    }
  }
`;
