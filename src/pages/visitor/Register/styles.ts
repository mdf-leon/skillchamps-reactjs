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
  @media only screen and (max-width: 768px){
    width: 100%;
    height: 100%;
  }
`;