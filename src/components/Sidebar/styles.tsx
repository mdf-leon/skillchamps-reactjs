import styled from 'styled-components';

export const Container = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  position: absolute;
  width: ${(props) => (props.isOpen ? '200px' : '50px')};
  height: 100%;
  transition: all 0.15s;
  /* width: 200px; */
  background: #293742;
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
`;

export const Title = styled.div<{ isOpen?: boolean }>`
  /* display: ${(props) => (props.isOpen ? 'flex' : 'none')}; */
  text-align: end;
  transition: all .15s;
  display: flex;
  padding: 0 10px; 
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  border-bottom: 1px solid #d1d5d8;
`;

export const TitleText = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  transition: all 0.1s;
`;
