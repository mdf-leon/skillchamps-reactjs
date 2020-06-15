import styled from 'styled-components';

import chipSrc from 'assets/images/Arrow.svg';
import flagSrc from 'assets/images/Like.svg';

export const Container = styled.section`
  width: 230px;
  height: 140px;
  background: #8e62cc;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 17px;

  #icons-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #card-number-row {
    display: block;
    margin-top: 23px;
    margin-bottom: 12px;
  }

  .info-container {
    display: inline-block;
  }

  #cvv {
    margin-left: 15px;
  }
`;

export const Chip = styled.img.attrs({
  src: chipSrc,
})`
  top: 17px;
  left: 18px;
  width: 24px;
  height: 19px;
`;

export const Flag = styled.img.attrs({
  src: flagSrc,
})`
  top: 22px;
  right: 16px;
  width: 29px;
  height: 10px;
`;

export const Number = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.3em;

  color: #eef0ff;

  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;

export const Label = styled.span`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #eef0ff;

  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
`;
