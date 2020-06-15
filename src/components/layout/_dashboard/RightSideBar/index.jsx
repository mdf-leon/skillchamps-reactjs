import React from 'react';

import { RightSideBarContainer } from './styles';
import imgSrc from 'assets/images/right sidebar.png';

export default function RightSideBar() {
  return (
    <RightSideBarContainer>
      <img alt="AccountInfo" style={{ height: '100vh' }} src={imgSrc} />
    </RightSideBarContainer>
  );
}
