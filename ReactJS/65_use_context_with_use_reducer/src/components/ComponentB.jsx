import React,{useContext} from 'react';
import { CounterContext } from './App';

function ComponentB() {

  const obj = useContext(CounterContext);
  return (
    <div>
        ComponentB  &nbsp;
        <button onClick={() => obj.dispatchMethod('increment')}>Increment</button>
        <button onClick={() => obj.dispatchMethod('decrement')}>Decrement</button>
        <button onClick={() => obj.dispatchMethod('reset')}>Reset</button>
    </div>
  )
}

export default ComponentB