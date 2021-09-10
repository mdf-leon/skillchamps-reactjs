import styled from 'styled-components'

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  @media only screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const Row = styled.div`
  margin-top: ${(props) => (props.isTopSpaced ? '10px' : '0px')};
  /* display: flex; */
  flex-direction: Row;
`;
