import styled from "styled-components";

export const MainDiv = styled.div`
/* style={{ maxHeight: '100%', minHeight: '100%', overflowX: 'hidden' }} */
  max-height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  /* margin: 0; */
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

export const FlexRowSpaceB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const FlexColumnSpaceB = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 16px 16px 0 16px;
`;

export const HistoryInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const DivDepoisPensoNome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstMedal = styled.div<any>`
  /* border: 1px solid #ca5d3e; */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #989898;
  border-radius: 50%;
  background: #f0cd73;
  width: ${(props) => props.size || 70}px;
  height: ${(props) => props.size || 70}px;
  position: relative;
  box-shadow: 0px 0px 3px 0px #989898;
  min-width: 40px;

  :after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: ${(props) => (props.size || 70) / 2}px;
    height: ${(props) => (props.size || 70) / 2}px;
    border-radius: inherit;
    box-shadow: 0 0 0 ${(props) => props.internalSize || 9}px #d9b867;
  }
`;

export const SecondMedal = styled.div<any>`
  /* border: 1px solid #ca5d3e; */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #989898;
  border-radius: 50%;
  background: #e4e7e7;
  width: ${(props) => props.size || 70}px;
  height: ${(props) => props.size || 70}px;
  position: relative;
  box-shadow: 0px 0px 3px 0px #989898;
  min-width: 40px;

  :after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: ${(props) => (props.size || 70) / 2}px;
    height: ${(props) => (props.size || 70) / 2}px;
    border-radius: inherit;
    box-shadow: 0 0 0 ${(props) => props.internalSize || 9}px #cdcfcf;
  }
`;

export const ThirdMedal = styled.div<any>`
  /* border: 1px solid #ca5d3e; */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #989898;
  border-radius: 50%;
  background: #ed9d5d;
  width: ${(props) => props.size || 70}px;
  height: ${(props) => props.size || 70}px;
  position: relative;
  box-shadow: 0px 0px 3px 0px #989898;
  min-width: 40px;

  :after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: ${(props) => (props.size || 70) / 2}px;
    height: ${(props) => (props.size || 70) / 2}px;
    border-radius: inherit;
    /* #d58d54 */
    box-shadow: 0 0 0 ${(props) => props.internalSize || 9}px #b8632d6b;
  }
`;
