import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const WithdrawPage = () => {
  const balance = useSelector(state => state.balanceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)
  const dispatch = useDispatch()
  const handleWithdraw = () => dispatch({ type: 'WITHDRAW', payload: 10 })

  return (
    <div>
      <h1>Withdraw</h1>
      <div>
        balance: {balance}
      </div>
      <button onClick={handleWithdraw}>Deposit</button>

      <strong>{loan ? "Loan Apply" : "Loan Needed"}</strong>
    </div>
  )
}

export default WithdrawPage