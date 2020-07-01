import styled from 'styled-components';
import TextInput from '../TextInput';
import Button from '../Button';
import { ReactComponent as Magnifier } from '../../assets/images/Magnifier.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const STextInput = styled(TextInput)`
  input {
    border-right: 0px !important;
    height: 32px;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }
`;

export const SButton = styled(Button)`
  padding: 6px;
  height: 32px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;

export const Icon = styled(Magnifier)`
  fill: #fff;
  width: 20px;
  height: 20px;
`;
