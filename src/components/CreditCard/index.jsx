import PropTypes from 'prop-types';
import React from 'react';

import { Container, Number, Label } from './styles';

import { ReactComponent as ChipIcon } from '../../assets/images/creditCards/Chip.svg';
import { ReactComponent as FlagIcon } from '../../assets/images/creditCards/VisaNoBackground.svg';

export default function CreditCard({ creditCardNumber, expirationDate, Cvv }) {
  const numberBlocks = creditCardNumber.split(' ');
  return (
    <Container>
      <div id="icons-row">
        <ChipIcon />

        <FlagIcon />
      </div>

      <div id="card-number-row">
        {numberBlocks.map((numberBlock) => (
          <Number className="number-block">{numberBlock}</Number>
        ))}
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
  expirationDate: '11/11',
};
