import styled from 'styled-components';

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  padding: 2px;
  border: 1px solid #b9cbe6;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Filler = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: #1dbde6;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
`;
