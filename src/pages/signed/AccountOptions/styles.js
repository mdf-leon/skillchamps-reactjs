import styled from 'styled-components'

export const Img = styled.img`
  width: ${(props) => (props.size)}px;
  height: ${(props) => (props.size)}px;
  border-radius: 50%;
`;

export const EventsDiv = styled.div`
  cursor: pointer;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  background-color: #efefef;
  padding: 10px 20px;
  :not(:first-child) {
    margin-top: 20px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  :hover {
    border: none
  }
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