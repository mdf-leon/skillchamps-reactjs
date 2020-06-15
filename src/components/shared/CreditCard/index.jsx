import PropTypes from 'prop-types';
import React from 'react';

import { Container, Chip, Flag, Number, Label } from './styles';

export default function CreditCard({ creditCardNumber, expirationDate, Cvv }) {
  return (
    <Container>
      <div id="icons-row">
        <Chip />

        <Flag />
      </div>

      <div id="card-number-row">
        <Number>{creditCardNumber}</Number>
      </div>

      <div className="info-container">
        <Label>VALIDADE</Label>
        <Number>{expirationDate}</Number>
      </div>

      <div className="info-container" id="cvv">
        <Label>CVV</Label>
        <Number>{Cvv}</Number>
      </div>
    </Container>
  );
}

CreditCard.propTypes = {
  Cvv: PropTypes.number,
  creditCardNumber: PropTypes.string,
  expirationDate: PropTypes.string,
};

CreditCard.defaultProps = {
  Cvv: 111,
  creditCardNumber: '1111 1111 1111 1111',
  expirationDate: '11/1111',
};
