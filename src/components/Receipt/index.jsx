import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../../utils';

import { Container, LogoBox, LogoPaytime, Header, Body, Block } from './styles';

export default function Receipt({ values }) {
  const {
    dateTime,
    amount,
    fullName,
    document,
    code,
    description,
    establishment,
    establishmentDocument,
    saleAmount,
    salePaidAmount,
  } = values;

  const amountInCurrency = amount && formatPrice(amount);
  const saleAmountInCurrency = saleAmount && formatPrice(saleAmount);
  const salePaidAmountInCurrency =
    salePaidAmount && formatPrice(salePaidAmount);

  // TODO: Make this dynamic

  // const formatedValues = {
  //   ...values,
  //   amount: amountInCurrency,
  //   saleAmount: saleAmountInCurrency,
  //   salePaidAmount: salePaidAmountInCurrency,
  // };

  return (
    <Container>
      <LogoBox>
        <LogoPaytime />
      </LogoBox>
      <Header>
        <p>Data / Hora da Transação</p>
        <h2>{dateTime}</h2>
        <h1>{amountInCurrency}</h1>
      </Header>
      <Body>
        <Block>
          <div>
            <h2>Cliente</h2>
            <p>{fullName}</p>
          </div>

          <div>
            <h2>Documento</h2>
            <p>{document}</p>
          </div>
        </Block>

        <Block>
          <div>
            <h2>Código</h2>
            <p>{code}</p>
          </div>

          <div>
            <h2>Descrição</h2>
            <p>{description}</p>
          </div>
        </Block>

        <Block>
          <div>
            <h2>Nome do estabelecimento</h2>
            <p>{establishment}</p>
          </div>

          <div>
            <h2>Documento</h2>
            <p>{establishmentDocument}</p>
          </div>
        </Block>
        <Block>
          <div>
            <h2>Valor da venda</h2>
            <p>{saleAmountInCurrency}</p>
          </div>

          <div>
            <h2>Valor pago</h2>
            <p>{salePaidAmountInCurrency}</p>
          </div>
        </Block>
      </Body>
    </Container>
  );
}

Receipt.propTypes = {
  values: PropTypes.shape({
    dateTime: PropTypes.string,
    amount: PropTypes.number,
    fullName: PropTypes.string,
    document: PropTypes.string,
    code: PropTypes.string,
    description: PropTypes.string,
    establishment: PropTypes.string,
    establishmentDocument: PropTypes.string,
    saleAmount: PropTypes.number,
    salePaidAmount: PropTypes.number,
  }).isRequired,
};
