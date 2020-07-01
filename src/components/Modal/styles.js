import styled from 'styled-components';

export const Blackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5); /*dim the background*/

  display: flex;
`;

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  text-align: center;
  margin: auto;
  width: auto;
  padding: 30px 24px;
  z-index: 120;
`; // NewReceipt style

