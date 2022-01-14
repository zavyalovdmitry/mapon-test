import React from 'react';
import { useSelector } from 'react-redux';
import { Stats } from '../components';

export function StatsContainer() {
  const distance = useSelector((state) => state.pathKm);
  const { timeDrove, timeMean } = useSelector((state) => state);

  const timeFormat = (ms) => {
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m`;
  };

  return (
    <Stats>
      <Stats.Block>
        <Stats.Title>{distance}</Stats.Title>
        <Stats.Text>Km driven</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>{timeFormat(timeDrove)}</Stats.Title>
        <Stats.Text>Driving time</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>{timeFormat(timeMean)}</Stats.Title>
        <Stats.Text>Driving time / day</Stats.Text>
      </Stats.Block>
    </Stats>
  );
}
