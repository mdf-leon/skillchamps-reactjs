import styled from 'styled-components';
import LogoPaytimeSrc from 'assets/images/LogoPaytime.svg';

export const Container = styled.section`
  width: 440px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const LogoBox = styled.div`
  background: linear-gradient(180deg, #1ec1eb 0%, #0cdafa 48.44%, #8ff8ff 100%);
  border-radius: 4px 4px 0px 0px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoPaytime = styled.img.attrs({
  src: LogoPaytimeSrc,
})`
  height: 44px;
  width: 234px;
`;

export const Header = styled.div`
  span {
    display: block;
    text-align: center;
    color: #333333;
  }
  #date-time-label {
    margin-top: 12px;
    font-size: 16px;
    line-height: 19px;
  }
  #date-time-value {
    margin-top: 6px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }

  h3 {
    margin: 12px 0;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #333333;
  }
`;

export const Body = styled.main`
  padding: 0 24px 24px;
`;

export const Label = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

export const Value = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 16px;
  line-height: 19px;
  color: #1dbde6;
`;

export const FieldContainer = styled.div``;

export const Row = styled.div`
  border-top: 1px solid #e7f1ff;
  padding: 12px 24px 0;
  margin-top: 12px;
  ${FieldContainer}:last-child {
    margin-top: 12px;
  }
`;
