import PropTypes from 'prop-types';
import React from 'react';

import { Container, UploadIcon } from './styles';

export default function FileUpload({ id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        <input type="file" id={id} {...rest} />
        <UploadIcon />
      </label>
    </Container>
  );
}

FileUpload.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
