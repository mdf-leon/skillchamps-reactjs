import styled from 'styled-components';

export const SelectBlock = styled.div`
  display: block;
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};

  &[disabled] > select {
    cursor: not-allowed;
    background-color: rgb(235, 235, 228);
  }

  select {
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    padding: 9px 10px;
    padding-left: 9px;
    font-size: 12px;
    line-height: 14px;
    color: #333;
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.touched && props.error
          ? props.theme.colors.danger
          : props.theme.colors.lines};
    margin-top: ${(props) => (props.label === '' ? '0px' : '2px')};
  }

  span {
    color: ${(props) => props.theme.colors.danger};
    font-size: 14px;
  }
  optgroup {
    color: #666666;
  }
  option {
    color: #333;
  }
  select:invalid {
    color: ${(props) => props.theme.colors.lightAccent};
  }
`;
