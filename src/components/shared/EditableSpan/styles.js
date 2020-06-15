import styled from 'styled-components';

export const Container = styled.div``;
Container.displayName = 'EditableSpan';

export const SInput = styled.input`
  font-family: 'Roboto Regular';
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.lightAccent};
  padding: 0px;
  margin: 0px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lines};
  background: transparent;
  size: 4px;
`;
