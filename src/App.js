import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import HomePage from './components/HomePage'
import DepositPage from './components/DepositPage'
import WithdrawPage from './components/WithdrawPage'

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/deposit">Deposit</NavLink></li>
        <li><NavLink to="/withdraw">Withdraw</NavLink></li>
      </ul>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/deposit" exact component={DepositPage} />
        <Route path="/withdraw" exact component={WithdrawPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;