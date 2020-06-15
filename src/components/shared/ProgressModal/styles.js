import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';
import PaytimeLogoSrc from 'assets/images/PaytimeLogoDegrade.svg';

export const Modal = styled(AntdModal)`
  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #b9cbe6;
    display: block;
    text-align: center;
    margin: 12px 0 3px;
  }
`;

export const PaytimeLogo = styled.img.attrs({
  alt: 'Paytime',
  src: PaytimeLogoSrc,
})`
  width: 100px;
  height: 20px;
`;
