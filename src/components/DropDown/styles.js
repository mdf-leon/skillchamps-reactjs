import styled from 'styled-components';

export const DropButton = styled.button`
  width: 100%;
  height: 38px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  align-items: center;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  p {
    margin: 0;
    align-self: center;
  }
  & > *:not(:first-child) {
    margin-left: 2px;
  }
  :hover {
    background-color: #f1f1f1;
  }
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  p {
    margin: 0;
    align-self: center;
  }
  & > *:not(:first-child) {
    margin-left: 2px;
  }
`;

export const Card = styled.div`
  margin: auto;
  width: ${(props) => (props.width === '' ? 'auto' : props.width)};
  box-shadow: 0px 0px 20px rgba(45, 87, 104, 0.149);
  border-radius: 4px;
  background-color: white;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 10px 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoreDiv = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
`;



