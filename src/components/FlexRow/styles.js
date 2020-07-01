import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};

  &:first-child {
    margin-left: 0px;
  }

  & > * {
    flex: 1;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;
