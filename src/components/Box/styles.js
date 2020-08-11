import styled from 'styled-components';

export const Boox = styled.article`
  margin-top: ${(props) => (props.isTopSpaced ? '20px' : '0px')};
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  background-color: white;

  p {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
  }
  a {
    line-height: 1.2;
  }
`;

export const Header = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 10px 8px 10px;
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

export const DivHeader = styled.div`
  display: flex;
  justify-content: ${(props) => (props.alignLabel === 'center' ? 'center' : props.alignLabel === 'space-between' ? 'space-between' : 'flex-start')};
  width: 100%;
  align-items: center;
`;
