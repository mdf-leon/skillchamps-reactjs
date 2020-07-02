import styled from 'styled-components';

export const Boox = styled.article`
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  background-color: white;

  p {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0 8px 10px;
  padding-left: 10px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
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
