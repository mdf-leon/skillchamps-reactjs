import styled from 'styled-components';

export const Container = styled.section`
  width: 302px;
  height: 184px;
  background: #8e62cc;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 20px;

  #icons-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #card-number-row {
    display: block;
    margin-top: 30px;
    margin-bottom: 15px;
    .number-block {
      padding: 5px;
    }
    .number-block:not(:first-child) {
      margin-left: 10px;
    }
  }

  .info-container {
    display: inline-block;
  }

  #cvv {
    margin-left: 20px;
  }
`;

export const Number = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.3em;
  color: #eef0ff;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.span`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #eef0ff;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
`;
