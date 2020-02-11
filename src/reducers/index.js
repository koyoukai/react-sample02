import { combineReducers } from 'redux'
import loanReducer from './loanReducer'
import balanceReducer from './balanceReducer'

export default combineReducers({ loanReducer, balanceReducer })