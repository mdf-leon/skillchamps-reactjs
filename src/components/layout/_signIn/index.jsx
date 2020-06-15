import PropTypes from 'prop-types';
import React from 'react';

import { LoginContainer } from './styles';

export default function SignInLayout({ children }) {
  return <LoginContainer>{children}</LoginContainer>;
}

SignInLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
