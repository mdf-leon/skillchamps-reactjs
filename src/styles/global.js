import styled, { createGlobalStyle } from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 4px;  
  @media only screen and (max-width: 768px){
    width: 100%;
    height: 100%;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`

h3 {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
}

*{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    height: 100%;
    width: 100%;
}

h1{
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.darkAccent};
}

h2, label, th{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin: 0px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.darkAccent}
}

span, p{
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.lightAccent}
}

::-webkit-scrollbar{
  width: 0.4rem;
}

::-webkit-scrollbar-track{
  background: #F3F5F7;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb{
  background: #1DBDE6;
  border-radius: 10px;
}

body{
    -webkit-font-smoothing: antialiased !important;
}

button{
    cursor: pointer;
}

.link {
    font-weight: 500;
    font-size: 14px;
    color: #1dbde6;
    background: transparent;
    border: none;
  }

.status-tag-table-center{
  display: flex;
  justify-content: center;
  width: ${(props) => props.theme.statusTagWidth}
}

.register-form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    justify-content: center;
  }

  .inline-group {
    display: flex;
    justify-content: space-between;
  }

  .inline-group .ant-form-item {
    width: 48%;
  }

  .inline-group .ant-calendar-picker {
    width: 100%;
  }

  .logo-wrapper {
    width: 400px;
    margin: auto;
  }

  .ant-steps {
    margin: 10px auto 20px;
    width: 70%;
  }

  .ant-steps-item-process .ant-steps-item-icon {
    background: #1DBDE6;
    border-color: #1DBDE6;
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #1DBDE6;
    background-color: #1DBDE6;
  }

  .ant-steps-finish-icon > svg {
    color: white;
  }

  .ant-modal-body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 50px 24px;
  }

  .ant-select-selection,
  .ant-input {
    border: 1px solid #1dbde6;
    border-radius: 10px;
  }

  .ant-modal-body .ant-form {
    width: 450px;
  }

  .ant-form-item label {
    font-weight: normal;
    font-size: 18px;
    color: #000;
  }


.ant-select-dropdown-menu-item-group-title{
    color: black;
    font-weight: bold;
}

select {
    background-color: white;
}

.color-black{
    color: black !important;
}

.ant-btn:hover, .ant-btn:focus {
  color:  white;
}

.ant-btn:hover, .ant-btn:focus, .ant-btn:active, .ant-btn.active {
  background: #0F9BBF;
}

.color-white {
  color: white !important;
}

`;
