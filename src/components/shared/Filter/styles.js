import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lines};
  padding-bottom: 10px;

  > div:not(:first-child) {
    margin-left: 40px;
    label {
      margin-right: 2px;
    }
  }
`;

Wrapper.displayName = 'Filter';

export const FilterMark = styled.div`
  h2 {
    display: inline;
    margin-left: 2px;
  }
`;

export const SelectDiv = styled.div`
  position: relative;

  /* Removing default dropdown icon from IE*/
  select::-ms-expand {
    display: none;
  }

  select {
    /* Removing default dropdown icon*/
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;

    display: block;
    width: 100%;
    max-width: 320px;
    padding: 0 24px;
    box-sizing: border-box;
    text-align: center;
    padding: 2px 10px 2px 0px;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.lightAccent};
    border: none;
    margin-top: ${(props) => (props.label === '' ? '0px' : '2px')};
  }

  svg {
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 6px;
  }
`;