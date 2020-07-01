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
  min-width: 90%;
`;

export const Row = styled.div`
  margin-top: ${(props) => (props.isTopSpaced ? '30px' : '0px')};
  display: flex;
  flex-direction: Row;
`;

export const RowButton = styled.div`
  margin-top: ${(props) => (props.isTopSpaced ? '30px' : '0px')};
  display: flex;
  flex-direction: Row;
  justify-content: space-between;
`;