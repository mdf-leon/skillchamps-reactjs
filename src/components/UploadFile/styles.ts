import styled from "styled-components";

export const UploadInputDiv = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UploadInputLabel = styled.label`
  padding: 12px 13px;
  z-index: 10;
  font-size: 16px;
  /* margin-left: 6px; */
  /* background-color: burlywood; */
  width: 100%;
  margin: 0;
  height: 100%;
  cursor: pointer;
`;

export const UploadInputLabelText = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  font-size: 12px;
  position: absolute;
  margin-top: -64px;
  margin-left: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;
