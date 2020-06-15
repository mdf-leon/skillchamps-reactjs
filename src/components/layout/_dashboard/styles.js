import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 4fr 15fr 5fr;
  background-color: ${(props) => props.theme.colors.lightShades};
`;

export const ContentWrapper = styled.main`
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 5fr;
  padding-top: 20px;
`;
