import React from 'react';
import { Container, Title, Text, Select, Date } from './styles/form';

export default function RouteForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RouteForm.Title = function RouteFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

RouteForm.Text = function RouteFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

RouteForm.Select = function RouteFormSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

RouteForm.Date = function RouteFormDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};
