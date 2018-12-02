import React from 'react';

import LogoImage from '../../images/Logo.png';
import { Header, Logo, Nav } from './styles';

export default () => {
  return (
    <Header>
      <Logo src={LogoImage} />
      <Nav>Hi</Nav>
    </Header>
  );
};
