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
  height: 20%;
  width:  60%;
  @media (max-width: 1600px) {
    width:  70%;
  }
  @media (max-width: 1250px) {
    width:  100%;
  }
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

export const MarkedDay = styled.p`
    margin-top: 2px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    align-items: center;
    background-color: #1DBDE6;
    border-radius: 10px;  
    width: 17px;
    height: 17px;
`;

export const Money = styled.p`
margin-top: 5px;
color: #41BA6D;
`;

export const Table = styled.table`
  width: 100%;
  background-color: transparent;
  padding: 0;

  p {
    margin: 0;
  }

  th {
    text-transform: capitalize;
    text-align: left;
    border-top: 1px solid #D8E2E7;
    padding: 10px 0 10px 10px;
  }

  td {
    text-align: left;
    border-top: 1px solid #D8E2E7;
    border-right: 1px solid #D8E2E7;
    padding: 2px 0 0 0;
    height: 55px;
    width: 86px;
    padding: 0!important;
    color: #98AFBC;
    > div {
      padding: 0 0 0 10px;
      height: 100%;
      width: 100%;
      display: inline-block;

      > p {
        margin-top: 2px;
      }

    & :not(:first-child){
        margin-top: 5px;
      }
    }
  }
`;