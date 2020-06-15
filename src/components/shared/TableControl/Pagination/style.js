import styled from 'styled-components';

export const Pages = styled.div`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

export const PageButton = styled.button`
  padding: 10px 16px;
  color: ${(props) => (props.active ? 'white' : '#1dbde6')};
  border: 1px solid ${(props) => (props.active ? '#1dbde6' : '#b9cbe6')};
  background-color: ${(props) => (props.active ? '#1dbde6' : 'transparent')};
`;

export const First = styled(PageButton)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const Last = styled(PageButton)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
