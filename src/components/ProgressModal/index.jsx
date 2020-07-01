import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import FlexRow from '../FlexRow';
import { PaytimeLogo, Modal } from './styles';

function ProgressModal({ modalVisibility, progress }) {
  return (
    <Modal
      centered
      bodyStyle={{ padding: '24px' }}
      visible={modalVisibility}
      footer={null}
      closable={false}
      width="300px"
    >
      <FlexRow>
        <PaytimeLogo />
      </FlexRow>
      <span>Estamos processando sua compra...</span>
      <ProgressBar progress={progress} />
    </Modal>
  );
}

ProgressModal.propTypes = {
  modalVisibility: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProgressModal;
