import React from 'react';
import { Container } from './styles/map';

export default function Map({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
