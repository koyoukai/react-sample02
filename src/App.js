import React from 'react';
import './App.css';
import NameTag from './components/NameTag'
import Input from './components/Input'

const makeGreen = BaseComponent => props => {
  const addGreen = {
    style: {
      color: "green"
    }
  }

  const newProps = {
    ...props, ...addGreen
  }

  return <BaseComponent {...newProps} />
}

const removeInline = BaseComponent => props => {
  const newProps = {...props}
  delete newProps.style
  return <BaseComponent {...newProps} />
}

const GreenNameTag = makeGreen(NameTag)
const CleanNameTag = removeInline(NameTag)

function App() {
  return (
    <div className="App">
      <NameTag name="Peter" />
      <CleanNameTag style={{color: 'red'}} name="John" />
      <GreenNameTag name="Mike" />
      <NameTag />
    </div>
  );
}

export default App;
