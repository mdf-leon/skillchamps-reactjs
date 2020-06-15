import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { ContentWrapper, Header, Body, FaArrowCircleLeft } from './styles';

export default function Container({ title, backTo, buttonOnClick, children }) {
  function BackButton() {
    if (backTo && !buttonOnClick) {
      return (
        <Link to={backTo}>
          <FaArrowCircleLeft />
        </Link>
      );
    }
    if (buttonOnClick && !backTo) {
      return (
        <button type="button" onClick={buttonOnClick}>
          <FaArrowCircleLeft />
        </button>
      );
    }
    return null;
  }
  return (
    <ContentWrapper>
      <Header hasButton={backTo || buttonOnClick}>
        <BackButton />
        <h1>{title}</h1>
      </Header>
      <Body>{children}</Body>
    </ContentWrapper>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  backTo: PropTypes.string,
  buttonOnClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

Container.defaultProps = {
  backTo: '',
  buttonOnClick: undefined,
};
