import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../components';

export function ButtonContainer() {
  const { unitId } = useSelector((state) => state);
  const { tripStart } = useSelector((state) => state);
  const { tripEnd } = useSelector((state) => state);

  function buttonHandler() {
    console.log(unitId);
    console.log(tripStart);
    console.log(tripEnd);
  }

  return (
    <Button>
      <Button.Link onClick={() => buttonHandler()}>Generate</Button.Link>
    </Button>
  );
}
