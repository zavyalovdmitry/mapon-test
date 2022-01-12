import React from 'react';
import { Container, Title, Text, Block } from './styles/stats';

export default function Stats({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Stats.Block = function StatsBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>;
};

Stats.Title = function StatsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Stats.Text = function StatsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
