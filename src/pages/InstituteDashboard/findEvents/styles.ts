import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  input {
    margin: 0;
  }
`;

export const CardsDiv = styled.div`
  display: grid;
  margin-top: 20px;
  justify-content: center;
  @media (min-width: 1270px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 1269px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1082px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 742px) {
    grid-template-columns: auto;
  }
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
