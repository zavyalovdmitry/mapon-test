import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Logo src={logo} />
    </Header>
  );
}
