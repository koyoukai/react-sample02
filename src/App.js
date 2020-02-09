import React, { useState, useEffect } from 'react';
import './App.css';
import NameTag from './components/NameTag'

const initXY = {
  x: null, y: null
}

function App() {
  const [time, setTime] = useState(Date)
  const [xy, setXY] = useState(initXY)
  
  useEffect(() => {
    let handle = setInterval(() => {
      console.log('set')
      setTime(Date)
    }, 1000)
    return () => {
      clearInterval(handle)
    }
  })

  function handleMousemove(event) {
    setXY({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMousemove)
    return () => {
      window.removeEventListener('mousemove', handleMousemove)
    }
  })

  return (
    <div className="App">
      <h2>useEffect</h2>

      <div>this time: {time}</div>

      <div>this xy: {xy.x} : {xy.y}</div>
      
    </div>
  );
}

export default App;