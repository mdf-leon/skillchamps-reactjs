import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 40px;
`;

export const Div = styled.div`
  margin: ${(props) => (props.isTopSpaced ? '20px auto auto auto' : 'auto')};
  width: 75%;
  background-color: transparent;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const MonthYearDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

export const Table = styled.table`
  width: 100%;
  background-color: transparent;

  th {
    text-transform: capitalize;
    text-align: left;
    border-top: 1px solid #D8E2E7;
    padding: 10px 40px 10px 10px;
  }

  td {
    text-align: left;
    border-top: 1px solid #D8E2E7;
    border-right: 1px solid #D8E2E7;
    padding: 2px 0px 39px 10px;
    color: #98AFBC;
    > div {
      display: inline-block;
    }
  }
`;