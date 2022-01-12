/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Form, Title, Text, Select, Date } from './styles/route-form';

export default function RouteForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
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
