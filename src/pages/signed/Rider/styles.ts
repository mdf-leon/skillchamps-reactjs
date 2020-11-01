import styled from 'styled-components'
import { Col as Coluna } from 'styles/grid'

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

export const RowButton = styled.div<any>` 
  margin-top: ${(props) => (props.isTopSpaced ? '30px' : '0px')};
  display: flex;
  flex-direction: Row;
  justify-content: space-between;
`;

export const Col = styled(Coluna)`
margin-top: 20px;
`;