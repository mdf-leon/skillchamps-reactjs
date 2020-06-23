import styled from 'styled-components'

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 4px;
`;

export const Row = styled.div`
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};
  display: flex;
  flex-direction: Row;
`;

export const TextInput = styled.textarea`
  display: block;
  min-height: 70px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 2px 10px;
  width: 100%;
  color: #4F6C7C;
  border: 1px solid #D8E2E7;
  font-size: 12px;
`;