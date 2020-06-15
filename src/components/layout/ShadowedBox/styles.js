import styled from 'styled-components';

export const Box = styled.article`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 24px;
  padding-top: ${(props) => props.label !== '' && '12px'};
  margin: 24px 0;
  background-color: white;

  p {
    margin-bottom: 0;
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e7f1ff;

  h3 {
    margin-bottom: 0px;
  }

  label {
    font-size: 14px;
    color: #333;
  }

  input {
    margin-left: 24px;
    margin-right: 12px;
  }
`;
