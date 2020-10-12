import styled from 'styled-components';

export const Blackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(79, 108, 124, 0.1); /*dim the background*/
  backdrop-filter: blur(6px);
  display: flex;
`;

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  margin: auto;
  min-width: 299px;
  width: auto;
  padding: ${(props) => !props.noPadding && '50px 24px'};
`;
