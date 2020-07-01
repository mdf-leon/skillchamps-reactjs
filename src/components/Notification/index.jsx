import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

import { ReactComponent as NotificationIcon } from '../../assets/images/Notification.svg';

export default function Notification({ amount, ...rest }) {
  const value = Math.min(Math.max(amount, 0), 99);
  return (
    <Container {...rest}>
      <NotificationIcon />
      <div>
        <span>{value}</span>
      </div>
    </Container>
  );
}

Notification.propTypes = {
  amount: PropTypes.number,
};

Notification.defaultProps = {
  amount: 0,
};
