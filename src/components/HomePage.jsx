import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  const balance = useSelector(state => state.balanceReducer.balance)
  const loan = useSelector(state => state.loanReducer.loan)
  const dispatch = useDispatch()

  const handleApplyLoan = () => dispatch({ type: 'APPLY' })

  return (
    <div>
      <h1>Home</h1>

      <div>
        balance: {balance}
      </div>

      <strong>{loan ? "Loan Apply" : "Loan Needed"}</strong>

      <div>
        <button 
          disabled={loan ? true : false} 
          onClick={handleApplyLoan}
        >
          {loan ? "loan applied" : "apply for loan"}
        </button>
      </div>
    </div>
  )
}

export default HomePage