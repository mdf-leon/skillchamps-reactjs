import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;

const defineProfile = ({ profile, theme }) => {
  if (profile === 'danger')
    return css`
      background-color: ${theme.colors.danger};
    `;
  if (profile === 'warning')
    return css`
      background-color: ${theme.colors.warning};
    `;
  if (profile === 'ghost')
    return css`
      color: ${theme.colors.primary.default};
      background-color: transparent;
      border: 1px solid ${theme.colors.primary.default};
    `;
  if (profile === 'disabled')
    return css`
      color: #98AFBC;
      background-color: transparent;
      border: 1px solid #98AFBC;
    `;
  return null;
};

const defineLoading = ({ isLoading }) => {
  if (isLoading)
    return css`
      svg {
        animation: ${spin} 2s linear infinite;
      }
    `;
  return null;
};

const defineDisabled = ({ isDisabled }) => {
  if (isDisabled)
    return css`
      cursor: not-allowed;
      opacity: 0.6;
    `;
  return null;
};

export const Button = styled.button`
  width: ${(props) => (props.width === '' ? '' : props.width)};
  min-width: fit-content;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: lowercase;
  border: none;
  padding: 9px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.default};
  color: #ffffff;
  ${defineProfile};
  ${defineLoading}
  ${defineDisabled}
`;
