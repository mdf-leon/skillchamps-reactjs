import PropTypes from 'prop-types';
import React from 'react';
import { message } from 'antd';

// import { updateAvatar } from 'api/client';

import { ReactComponent as Camera } from 'assets/images/Camera.svg';
import { Container } from './styles';

export default function Avatar({ imageSrc }) {
  const handleOnChange = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('photo', file);
      // await updateAvatar(formData);
      message.success('Foto atualizada com sucesso');
    } catch (e) {
      message.error(
        'Falha ao atualizar a foto, tente novamente em breve ou contate o suporte.'
      );
    }
  };
  return (
    <Container>
      <label htmlFor="Avatar">
        <input type="file" id="Avatar" onChange={handleOnChange} />
        <img id="Avatar" alt="Avatar" src={imageSrc} />
        <Camera />
      </label>
    </Container>
  );
}

Avatar.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
