/* eslint-disable prefer-template */
import React from 'react';
import { useSelector } from 'react-redux';
import { Stats } from '../components';

export function StatsContainer() {
  const distance = useSelector((state) => state.pathKm);
  const timeDrove = useSelector((state) => state.timeDrove);
  const timeMean = useSelector((state) => state.timeMean);

  const timeFormat = (ms) => {
    const milliseconds = Math.floor((ms % 1000) / 100);
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + 'h ' + minutes + 'm';
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
