import PropTypes from 'prop-types';
import React from 'react';

import { Container, ContentWrapper } from './styles';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

export default function DashboardLayout({ children }) {
  return (
    <Container>
      <LeftSideBar />
      <ContentWrapper>{children}</ContentWrapper>
      <RightSideBar />
    </Container>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
