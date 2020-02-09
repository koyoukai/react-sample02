import React, { useState, useEffect } from 'react';
import './App.css';
import usePrevious from './usePrevious'


function App() {
  const [num, setNum] = useState(100)
  const previousNum = usePrevious(num)

  return (
    <div>
      <div>current num: {num}</div>
      <div>previous num: {previousNum}</div>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  )
  
}

export default App;