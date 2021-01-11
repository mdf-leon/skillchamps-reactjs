import React from 'react';
import { UploadInputDiv, UploadInputLabel, UploadInputLabelText } from './styles';
import Button from '@material-ui/core/Button';

export default function UploadFileComponent(props: any) {
  const [file, setfile] = React.useState<any>({ message: 'Choose file' });

  const getUploadedFileName = (e) => {
    let files = e.target.files,
      value = e.target.value,
      message;
    if (files && files.length > 1) message = `${files.length} files selected`;
    else message = value.split('\\').pop();

    if (message) setfile({ ...file, message });
  };

  return (
    <UploadInputDiv {...props}>
      <UploadInputLabel htmlFor="input-file-id">
        <Button
          variant="contained"
          component="label"
          color="primary"
          style={{ zIndex: -10, marginRight: '6px' }}
        >
          Browse
        </Button>
        <input
          hidden
          id="input-file-id"
          type="file"
          onChange={getUploadedFileName}
        />
        {file.message}
      </UploadInputLabel>
      <UploadInputLabelText>
        Select a photo
      </UploadInputLabelText>
    </UploadInputDiv>
  );
}
