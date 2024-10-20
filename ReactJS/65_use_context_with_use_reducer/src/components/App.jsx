import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const initialState = 0

const reducer = (state, action) => {

  switch(action) {

    case 'increment' :
        return state + 1
    case "decrement" :
        return state - 1
    case "reset" :
        return initialState
    default:
        return state
  }
}

export const CounterContext = React.createContext()

const App = () => {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{dispatchMethod: dispatch}}>
      <div>
        <p>{count}</p>
        App &nbsp;
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <ComponentA />
        <ComponentB />
    </div>
    </CounterContext.Provider>
  )
}

export default App