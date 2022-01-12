import React from 'react';
import { Form } from './styles/route-form';

export default function RouteForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}
