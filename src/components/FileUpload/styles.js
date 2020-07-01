import styled from 'styled-components';

import { ReactComponent as UploadSvg } from '../../assets/images/CircleArrowLeft.svg';

export const UploadIcon = styled(UploadSvg)`
  fill: ${(props) => props.theme.colors.lightAccent};
  transform: rotate(90deg);
  cursor: pointer;
`;

export const Container = styled.div`
  input[type='file'] {
    display: none;
  }
`;

Container.displayName = 'UploadInput';
