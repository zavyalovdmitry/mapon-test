import React from 'react';
import { Container, Map } from './styles/map';

export default function RouteMap({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RouteMap.Map = function RouteMapMap({ children, ...restProps }) {
  return <Map {...restProps}>{children}</Map>;
};
