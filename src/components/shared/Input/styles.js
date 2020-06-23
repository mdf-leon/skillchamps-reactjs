import styled, { keyframes } from 'styled-components';

export const Input = styled.div`
  display: block;
  position: relative;
  width: 100%;
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};
  font-size: 12px;
  line-height: 14px;

  &[disabled] > input {
    cursor: not-allowed;
  }

  input {
    display: block;
    box-sizing: border-box;
    max-height: 32px;
    border-radius: 4px;
    padding: 9px 10px;
    width: 100%;
    color: ${(props) => props.theme.colors.darkAccent};
    border: 1px solid
      ${(props) =>
        props.touched && props.error
          ? props.theme.colors.danger
          : props.theme.colors.lines};
    margin-top: ${(props) => (props.label === '' ? '0px' : '2px')};
    font-size: 12px;
    line-height: 14px;
  }

  input:focus {
    border: none;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.lightAccent};
  }
`;

const fadein = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  animation: ${fadein} 1s;
`;

export const TogglePassword = styled.button`
  position: absolute;
  bottom: 12px;
  line-height: 14px;
  right: 11px;
  color: ${(props) => props.theme.colors.primary.default};
  cursor: pointer;
  background: transparent;
  border: none;
`;
