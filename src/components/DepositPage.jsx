import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { depositAsync, deposit } from '../actions/balance'

const DepositPage = () => {
  const balance = useSelector(state => state.balanceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)
  const loading = useSelector(state => state.balanceReducer.loading)

  const dispatch = useDispatch()
  const handleDeposit = () => {
    dispatch(depositAsync())
  }

  return (
    <div>
      <h1>Deposit</h1>
      <div>balance: {loading ? 'loading' : balance}</div>
      <button onClick={handleDeposit}>Deposit</button>

      <strong>{loan ? "Loan Apply" : "Loan Needed"}</strong>
    </div>
  )
}

export default DepositPage