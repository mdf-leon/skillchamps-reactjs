import PropTypes from 'prop-types';
import React from 'react';

import {
  Container,
  LogoBox,
  LogoPaytime,
  Header,
  Body,
  Row,
  FieldContainer,
  Label,
  Value,
} from './styles';

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
  } = values;
  return (
    <Container>
      <LogoBox>
        <LogoPaytime />
      </LogoBox>
      <Header>
        <span id="date-time-label">Data / Hora da Transação</span>
        <span id="date-time-value">{dateTime}</span>
        <h3>R$ {amount}</h3>
      </Header>
      <Body>
        <Row>
          <FieldContainer>
            <Label>Cliente</Label>
            <Value>{fullName}</Value>
          </FieldContainer>

          <FieldContainer>
            <Label>Documento</Label>
            <Value>{document}</Value>
          </FieldContainer>
        </Row>

        <Row>
          <FieldContainer>
            <Label>Código</Label>
            <Value>{code}</Value>
          </FieldContainer>

          <FieldContainer>
            <Label>Descrição</Label>
            <Value>{description}</Value>
          </FieldContainer>
        </Row>

        <Row>
          <FieldContainer>
            <Label>Nome do estabelecimento</Label>
            <Value>{establishment}</Value>
          </FieldContainer>

          <FieldContainer>
            <Label>Documento</Label>
            <Value>{establishmentDocument}</Value>
          </FieldContainer>
        </Row>
      </Body>
    </Container>
  );
}

Receipt.propTypes = {
  values: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    document: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string,
    establishment: PropTypes.string.isRequired,
    establishmentDocument: PropTypes.string.isRequired,
  }).isRequired,
};
