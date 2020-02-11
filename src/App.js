import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

const initialState = {
  count: 0
}

const reducerFunction = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  function plusOne() {
    dispatch({ type: 'INCREMENT' })
  }

  function minusOne() {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div className="app">
      <h1>Count</h1>

      <p>Counter: {state.count}</p>
      <button onClick={plusOne}>Plus One</button>
      <button onClick={minusOne}>Minus One</button>
    </div>
  );
}

export default App;
