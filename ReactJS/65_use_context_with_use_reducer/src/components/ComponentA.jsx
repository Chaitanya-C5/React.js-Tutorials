import React, { useContext } from 'react';
import { CounterContext } from './App';

function ComponentA() {

  const obj = useContext(CounterContext);
  return (
    <div>
        ComponentA  &nbsp;
        <button onClick={() => obj.dispatchMethod('increment')}>Increment</button>
        <button onClick={() => obj.dispatchMethod('decrement')}>Decrement</button>
        <button onClick={() => obj.dispatchMethod('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA