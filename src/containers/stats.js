import React from 'react';
import { Stats } from '../components';

export function StatsContainer() {
  return (
    <Stats>
      <Stats.Block>
        <Stats.Title>128</Stats.Title>
        <Stats.Text>Km driven</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>3h 20m</Stats.Title>
        <Stats.Text>Driving time</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>1h 5m</Stats.Title>
        <Stats.Text>Driving time</Stats.Text>
      </Stats.Block>
    </Stats>
  );
}
